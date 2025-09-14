"use client";

import {
	useState,
	useEffect,
	ReactElement,
	useLayoutEffect,
	useMemo,
} from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import DropdownMenuCheckboxes from "@/components/ui/dropdowncheckbox";
import { ItemCard } from "@/components/ui/itemcard";
import { Testimonial } from "@/components/ui/itemcard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getItemsByCurrentLocation } from "@/actions/client/C_data_interractions_actions";
import { useLocation } from "@/context/location";
import { PromptAlert } from "@/components/ui/promptalert";
import useSignedIn from "@/hooks/singedInStatus";
import Skeleton from "@/components/ui/skeleton";
import Itmesnotfound from "@/components/ui/itemsnotfound";
import { useRouter } from "next/navigation";
import { handleRequestItem } from "@/actions/client/C_data_interractions_actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TitemsNearby } from "@/types/C_types";
import { ErrorAlert } from "@/components/ui/erroralert";

export default function BrowseItems() {
	// State for search input
	const [searchWord, setSearchWord] = useState("");
	// State for selected filter items
	const [selectedFilterItems, setSelectedFilterItems] = useState<string[]>([]);
	// State for location prompt alert
	const [showPromptAlert, setShowPromptAlert] = useState(false);
	const router = useRouter();
	const queryClient = useQueryClient();
	// State for query data (location and search)
	const [queryData, setQueryData] = useState({
		longitude: 0,
		latitude: 0,
		searchQuery: "",
	});
	// State for error alert
	const [showErrorAlert, setShowErrorAlert] = useState(false);

	// Location context
	const {
		location,
		isLoading: locationLoading,
		error,
		requestLocation,
	} = useLocation();

	// Skeleton loader for initial loading
	const skel = [...Array(5).keys()].map((cur) => <Skeleton key={cur} />);
	const { data: signInData, isPending, isSuccess } = useSignedIn();

	// Update search query in queryData when searchWord changes
	useEffect(() => {
		setQueryData((prev) => ({ ...prev, searchQuery: searchWord }));
	}, [searchWord]);

	// Update location in queryData when location changes
	useEffect(() => {
		if (location) {
			setQueryData((prev) => ({
				...prev,
				latitude: location.latitude,
				longitude: location.longitude,
			}));
		}
	}, [location]);

	const isReady = queryData.latitude !== 0 && queryData.longitude !== 0;

	// Infinite query for items data
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useInfiniteQuery({
			queryKey: ["itemsData"],
			queryFn: ({ pageParam }) => getItemsByCurrentLocation(pageParam),
			initialPageParam: { data: queryData, batch: 1 },
			getNextPageParam: (lastPage) => {
				return lastPage.success && lastPage.nextBatch
					? lastPage.nextBatch
					: undefined;
			},
			enabled: isReady,
			retry: false,
		});

	// Redirect to home if not signed in
	useLayoutEffect(() => {
		if (!isPending && !isSuccess) {
			router.push("/");
		}
	}, [isSuccess]);

	// Mutation for requesting an item
	const {
		data: requestItemReturnData,
		mutate: requestItmesMutation,
		isPending: requestItemPending,
		isSuccess: requestItemSuccess,
	} = useMutation({
		mutationFn: handleRequestItem,
		onMutate: async (id) => {
			await queryClient.cancelQueries({ queryKey: ["itemsData"] });
			const previousCardData: any = queryClient.getQueryData([
				"itemsData",
			]);
			// Optimistically update item status to PENDING
			queryClient.setQueryData(["itemsData"], (oldData: any) => {
				if (!oldData) return oldData;
				return {
					...oldData,
					pages: oldData.pages.map((page: any) => ({
						...page,
						itemsNearby: page.itemsNearby.map(
							(item: TitemsNearby) =>
								item.id === id
									? { ...item, status: "PENDING" }
									: item
						),
					})),
				};
			});
			return { previousCardData };
		},
		retry: false,
		onError: (err, newTodo, context) => {
			// Rollback on error
			queryClient.setQueryData(["itemsData"], context?.previousCardData);
			setShowErrorAlert(true);
			setTimeout(() => {
				setShowErrorAlert(false);
			}, 5000);
		},
		onSuccess: (data, variables, context) => {
			if (!data.success) {
				console.log("Failed to request item");
			} else {
				console.log("Item request successful");
			}
		},
	});

	// Memoized item cards based on filters and search
	const cards = useMemo(() => {
		const allItems = data?.pages.flatMap((page) =>
			page.success ? page.itemsNearby : []
		);

		if (allItems?.length) {
			const tempCards = allItems.map((item) => {
				const testimonials: Testimonial[] = [];
				let shouldDisplay = true;

				// Filter logic
				if (searchWord.length && selectedFilterItems.length) {
					const word = item.name.toLowerCase();
					const filWord = searchWord.toLowerCase();
					shouldDisplay =
						item.category.some((itr) =>
							selectedFilterItems.includes(itr)
						) && word.includes(filWord);
				} else if (searchWord.length > 0) {
					const word = item.name.toLowerCase();
					const filWord = searchWord.toLowerCase();
					shouldDisplay = word.includes(filWord);
				} else if (selectedFilterItems.length) {
					shouldDisplay = item.category.some((itr) =>
						selectedFilterItems.includes(itr)
					);
				}

				// Prepare testimonials for ItemCard
				if (item.imageUrl.length > 1) {
					for (let i = 0; i < item.imageUrl.length; i++) {
						testimonials.push({
							name: item.name,
							distance: String(item.distance),
							description: item.description,
							src: item.imageUrl[i],
						});
					}
				} else {
					testimonials.push({
						name: item.name,
						description: item.description,
						distance: String(item.distance),
						src: item.imageUrl[0],
					});
				}

				return (
					<ItemCard
						testimonials={testimonials}
						key={item.id}
						display={shouldDisplay}
						id={item.id}
						onclick={requestItmesMutation}
						status={item.status}
					/>
				);
			});

			return tempCards;
		}
		return <Itmesnotfound key={1} />;
	}, [data, selectedFilterItems, searchWord]);

	// Toggle filter item selection
	const toggleItem = (value: string) => {
		setSelectedFilterItems((prev) =>
			prev.includes(value)
				? prev.filter((v) => v !== value)
				: [...prev, value]
		);
	};

	// Show location prompt if location is not set and not previously shown
	useEffect(() => {
		const hasSeenPrompt = sessionStorage.getItem("locationPromptShown");
		if (location === null && !hasSeenPrompt) {
			sessionStorage.setItem("locationPromptShown", "true");
			setShowPromptAlert(true);
		}
	}, [location]);

	// Debug function for search filter (currently unused)
	function searchFilter() {
		console.log(data?.pages[0].itemsNearby);
	}

	// Handle location access prompt actions
	const handleAllowLocationAccess = () => {
		requestLocation();
		setShowPromptAlert(false);
	};

	const handleDenyLocationAccess = () => {
		setShowPromptAlert(false);
	};

	return (
		<div className='container mx-auto flex flex-col gap-5'>
			{/* Location access prompt */}
			{showPromptAlert && (
				<PromptAlert
					message='Location access is needed to be able to view items near you'
					acceptfn={handleAllowLocationAccess}
					rejectfn={handleDenyLocationAccess}
				/>
			)}
			{/* Error alert for item request */}
			{showErrorAlert && <ErrorAlert message='Item Request Failed' />}
			<div className='flex justify-end items-center gap-2 mt-6'>
				<DropdownMenuCheckboxes
					toggleItem={toggleItem}
					selectedFilterItems={selectedFilterItems}
				/>
				<Link
					href='/browseitems/postitems'
					className='bg-blue-600 rounded-sm px-2 py-1 text-lg'>
					Post Item
				</Link>
			</div>
			<div className='relative'>
				<form className='w-full'>
					<Search className='absolute top-2.5 left-4' />
					<input
						type='text'
						className='h-10 border w-full rounded pl-13'
						placeholder='Search items...'
						value={searchWord}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setSearchWord(e.target.value);
							searchFilter();
						}}
					/>
				</form>
			</div>
			<div>
				<h1 className='text-lg'>
					Location:{" "}
					<span className='opacity-50 text-md'>Near You</span>
				</h1>
				<div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-2'>
					{status === "pending" ? skel : cards}
				</div>
				{hasNextPage && (
					<div>
						{/* Load more items */}
						<button
							onClick={() => fetchNextPage()}
							className='bg-blue-500 flex px-16 py-'>
							Load More
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
