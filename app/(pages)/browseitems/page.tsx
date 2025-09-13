"use client";

import { useState, useEffect, ReactElement, useLayoutEffect } from "react";
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

// Main component for browsing items
export default function BrowseItems() {
	const [searchWord, setSearchWord] = useState(""); // State for search input
	const [selectedFilterItems, setSelectedFilterItems] = useState<string[]>([]); // State for selected filters
	const [showPromptAlert, setShowPromptAlert] = useState(false); // State for location prompt alert
	const [cards, setCards] = useState<ReactElement[]>([]); // State for rendered item cards
	const router = useRouter(); // Next.js router
	const queryClient = useQueryClient(); // React Query client
	const [queryData, setQueryData] = useState({
		longitude: 0,
		latitude: 0,
		searchQuery: "",
	}); // State for query parameters

	const {
		location,
		isLoading: locationLoading,
		error,
		requestLocation,
	} = useLocation(); // Custom hook for location

	const skel = [...Array(5).keys()].map((cur) => <Skeleton key={cur} />); // Skeleton loading placeholders
	const { data: signInData, isPending, isSuccess } = useSignedIn(); // Custom hook for sign-in status

	// Update search query in queryData when searchWord changes
	useEffect(() => {
		setQueryData((prev) => ({ ...prev, searchQuery: searchWord }));
	}, [searchWord]);

	// Update latitude and longitude in queryData when location changes
	useEffect(() => {
		if (location) {
			setQueryData((prev) => ({
				...prev,
				latitude: location.latitude,
				longitude: location.longitude,
			}));
		}
	}, [location]);

	console.log("selected", selectedFilterItems);

	// Infinite scroll query for items near current location
	const isReady = queryData.latitude !== 0 && queryData.longitude !== 0;
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

	// Redirect to home if user is not signed in
	useLayoutEffect(() => {
		if (!isPending && !isSuccess) {
			router.push("/");
		}
	}, [isPending]);

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

			// Optimistically update the item status to PENDING
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
			queryClient.setQueryData(['itemsData'], context?.previousCardData)
		},
		// onSettled: () => queryClient.invalidateQueries({ queryKey: ['itemsData'] }),
		onSuccess: (data, variables, context) => {
			if (!data.success) {
				console.log("failed to request item --- component page");
			} else {
				console.log("item was added --- component page");
			}
		},
	});

	// Update cards when data, searchWord, or selectedFilterItems change
	useEffect(() => {
		if (data?.pages[0].success) {
			if (data.pages[0].itemsNearby.length) {
				const tempCards = data.pages[0].itemsNearby.map((item) => {
					const testimonials: Testimonial[] = [];
					let shouldDisplay = true;
					// Filter logic: both search and filter selected
					if (searchWord.length && selectedFilterItems.length) {
						const word = item.name.toLowerCase();
						const filWord = searchWord.toLowerCase();
						shouldDisplay =
							item.category.some((itr) =>
								selectedFilterItems.includes(itr)
							) && word.includes(filWord);
					} else if (searchWord.length > 0) {
						// Only search word
						const word = item.name.toLowerCase();
						const filWord = searchWord.toLowerCase();
						shouldDisplay = word.includes(filWord);
					}
					// Only filter selected
					else if (selectedFilterItems.length) {
						shouldDisplay = item.category.some((itr) =>
							selectedFilterItems.includes(itr)
						);
					}
					// Build testimonials for item images
					if (item.imageUrl.length > 1) {
						for (let i = 0; i < item.imageUrl.length; i++) {
							testimonials.push({
								name: item.name,
								distance: String(item.distance),
								description: item.description,
								src: item.imageUrl[i],
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
					} else {
						const testimonials: Testimonial[] = [];
						testimonials.push({
							name: item.name,
							description: item.description,
							distance: String(item.distance),
							src: item.imageUrl[0],
						});

						return (
							<ItemCard
								testimonials={testimonials}
								key={item.id}
								display={shouldDisplay}
								id={item.id}
								onclick={requestItmesMutation}
œ								status={item.status}
							/>
						);
					}
				});

				setCards(tempCards); // Set rendered cards
			} else {
				setCards([<Itmesnotfound key={1} />]); // Show not found if no items
			}
		}
	}, [data, searchWord, selectedFilterItems]);

	// Toggle filter selection
	const toggleItem = (value: string) => {
		setSelectedFilterItems((prev) =>
			prev.includes(value)
				? prev.filter((v) => v !== value)
				: [...prev, value]
		);
	};

	// Show location prompt if location is not available and not shown before
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
		if (data?.pages[0].itemsNearby) {
		}
	}

	// Handler for allowing location access
	const handleAllowLocationAccess = () => {
		requestLocation();
		setShowPromptAlert(false);
	};
	// Handler for denying location access
	const handleDenyLocationAccess = () => {
		setShowPromptAlert(false);
	};

	return (
		<div className='container mx-auto flex flex-col gap-5'>
			{/* Show location prompt alert if needed */}
			{showPromptAlert && (
				<PromptAlert
					message='Location access is needed to be able to view items near you'
					acceptfn={handleAllowLocationAccess}
					rejectfn={handleDenyLocationAccess}
				/>
			)}
			{/* Filter and post item buttons */}
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

			{/* Search bar */}
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

			{/* Items nearby section */}
			<div>
				<h1 className='text-lg'>
					Location:{" "}
					<span className='opacity-50 text-md'>Near You</span>
				</h1>
				<div className=' grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-2 '>
					{status === "pending" ? skel : cards}
				</div>
			</div>
		</div>
	);
}
