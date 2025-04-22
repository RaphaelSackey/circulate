"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import DropdownMenuCheckboxes from "@/components/ui/dropdowncheckbox";
import { ItemCard } from "@/components/ui/itemcard";
import { Testimonial } from "@/components/ui/itemcard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getItemsByCurrentLocation } from "@/actions/client/C_data_interractions_actions";
import { useLocation } from "@/context/location";

export default function BrowseItems() {
	const [searchWord, setSearchWord] = useState("");
	const [selectedFilterItems, setSelectedFilterItems] = useState<string[]>(
		[]
	);
	const [queryData, setQueryData] = useState({
		longitude: 0,
		latitude: 0,
		searchQuery: "",
	});

	const location = useLocation();

	if (!location) {
		console.log("Location is needed to see items");
	}

    // update setQueryData when user is typing in the search bar
	useEffect(() => {
		setQueryData((prev) => ({ ...prev, searchQuery: searchWord }));
	}, [searchWord]);

    // set the long and lat of the querydata
	useEffect(() => {
		if (location) {
			setQueryData((prev) => ({
				...prev,
				latitude: location?.latitude,
				longitude: location?.longitude,
			}));
		}
	}, [location]);

	// infinite scroll query
    const isReady = queryData.latitude !== 0 && queryData.longitude !== 0;
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ["itemsData"],
		queryFn: ({ pageParam }) => getItemsByCurrentLocation(pageParam),
		initialPageParam: { data: queryData, batch: 1 },
		getNextPageParam: (lastPage, pages) => {
			return lastPage.success ? lastPage.nextBatch : undefined;
		},
        enabled: isReady
	});

	const toggleItem = (value: string) => {
		setSelectedFilterItems((prev) =>
			prev.includes(value)
				? prev.filter((v) => v !== value)
				: [...prev, value]
		);
	};

	const testimonials: Testimonial[] = [
		{
			description:
				"here is somethign that you might like and i am selling it for like ",
			name: "name one",
			distance: "2 Miles",
			src: "/assets/lawn.jpg",
		},
		{
			description:
				"here is somethign that you might like and i am selling it for like ",
			name: "name one",
			distance: "2 Miles",
			src: "/assets/hero.png",
		},
	];
	return (
		<div className='container mx-auto flex flex-col gap-5'>
			{/* filter and add items buttons */}
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

			{/* searchbar */}
			<div className='relative'>
				<form className='w-full'>
					<Search className='absolute top-2.5 left-4' />
					<input
						type='text'
						className='h-10 border w-full rounded pl-13'
						placeholder='Search items...'
						value={searchWord}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setSearchWord(e.target.value)
						}
					/>
				</form>
			</div>

			{/* items near by */}
			<div>
				<h1 className='text-lg'>
					Location:{" "}
					<span className='opacity-50 text-md'>Near You</span>
				</h1>
				<div className=' grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-2 '>
					<ItemCard testimonials={testimonials} />
					<ItemCard testimonials={testimonials} />
					<ItemCard testimonials={testimonials} />
					<ItemCard testimonials={testimonials} />
					<ItemCard testimonials={testimonials} />
					<ItemCard testimonials={testimonials} />
					<ItemCard testimonials={testimonials} />
				</div>
			</div>
		</div>
	);
}
