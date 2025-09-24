"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProfileItemCard from "@/components/ui/profileItemCard";
import ProfileCommunityCard from "@/components/ui/profileCommunityCard";
import { useQuery } from "@tanstack/react-query";
import { requestUserSpecificItemsData } from "@/actions/client/C_data_interractions_actions";
import { useMemo, useState } from "react";

export default function Profile() {
	// edit profile logic
	function handleEditProfile() {
		console.log("edit profile has been clicked");
	}

	function removeItemHandler() {
		console.log("remove item clicked");
	}

	// Sample testimonials input
	const sampleTestimonials = [
		{
			distance: "2 miles away",
			name: "John Doe",
			description: "Great experience borrowing this item!",
			src: "/assets/headshot.jpg",
		},
	];

	// data fetching queries

	const {
		isPending: isPendingUserItemsDataFetch,
		isSuccess: isSuccessUserItemsDataFetch,
		data: UserItemsData,
		isFetching: isFetchingUserItemsDataFetch,
	} = useQuery({
		queryKey: ["UserItemsData"],
		queryFn: requestUserSpecificItemsData,
	});

	// ItemsDataFetch UI control logic
	if (!isPendingUserItemsDataFetch && !isSuccessUserItemsDataFetch) {
		console.log("failed to fetch user data");
	}

	// Filter state for item status
	const [itemStatusFilter, setItemStatusFilter] = useState<
		"ALL" | "AVAILABLE" | "PENDING"
	>("ALL");

	// ItemsDataFetch result actions
	const myItmesDataCards = useMemo(() => {
		if (!isPendingUserItemsDataFetch && isSuccessUserItemsDataFetch) {
			const filteredItems =
				itemStatusFilter === "ALL"
					? UserItemsData.items
					: UserItemsData.items.filter(
							(item) => item.status === itemStatusFilter
					  );

			const cards = filteredItems.map((item) => (
				<ProfileItemCard
					id={item.id}
					removeItemHandler={removeItem}
					status={item.status}
					imageUrl={item.imageUrl.length ? item.imageUrl[0] : ""}
					name={item.name}
					date={item.createdAt}
					key={item.id}
				/>
			));
			return cards;
		} else {
			return [];
		}
	}, [
		isPendingUserItemsDataFetch,
		isSuccessUserItemsDataFetch,
		UserItemsData,
		itemStatusFilter,
	]);

	// Item card interaction functions

	function removeItem(id: number) {
		console.log("item removed");
	}

	return (
		<div className='container mx-auto my-10 px-4 h-[100vh]'>
			<div className='lg:grid grid-cols-4 gap-6 rounded-md'>
				{/* user info container */}
				<div className='lg:col-span-3 grid grid-cols-12 gap-4'>
					{/* Avatar container */}
					<div className='col-span-5 lg:col-span-3 flex items-center justify-center'>
						<div className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 xl:w-56 xl:h-56 rounded-full overflow-hidden relative'>
							<Image
								src='/assets/headshot.jpg'
								alt='Profile picture'
								fill
								sizes='(max-width: 768px) 100vw, 400px'
								className='object-cover'
							/>
						</div>
					</div>

					{/* Text section */}
					<div className='col-span-7 lg:col-span-9 flex flex-col justify-center'>
						<h1 className='text-4xl md:text-8xl font-bold'>
							Alice Jones
						</h1>
						<h5 className='text-lg md:text-2xl '>
							alice.rfaf@gmail.com
						</h5>
						<h5 className='text-sm md:text-xl'>New York, NY</h5>
					</div>
				</div>

				{/* Trust Score container*/}
				<div className='hidden lg:flex flex-col justify-center items-center border-2 m-6 rounded-lg'>
					<h1 className='text-4xl'>Trust Score</h1>
					<h2 className='text-4xl font-semibold'>4.5</h2>
				</div>
			</div>

			{/* Edit profile section */}
			<div className='grid lg:grid-cols-4 mt-4'>
				<div className='lg:col-span-3 grid grid-cols-12'>
					<div className='col-span-full lg:col-span-3'>
						<Button
							className='w-full'
							onClick={() => handleEditProfile()}>
							Edit Profile
						</Button>
					</div>
				</div>
			</div>

			{/*bottom sections with use items data  */}

			<div className='md:grid md:grid-cols-2 md:h-[70vh] mt-12'>
				<div className='w-full md:pr-10'>
					<h1 className='text-3xl'>My Communities</h1>
					<div className='border h-[30vh] max-h-[30vh] mt-5 rounded-lg overflow-scroll'>
						<ProfileCommunityCard />
						<ProfileCommunityCard />
						<ProfileCommunityCard />
						<ProfileCommunityCard />
						<ProfileCommunityCard />
						<ProfileCommunityCard />
						<ProfileCommunityCard />
						<ProfileCommunityCard />
						<ProfileCommunityCard />
						<ProfileCommunityCard />
					</div>

					<h1 className='mt-10 text-3xl'>My Borrowed Items</h1>
					<div className='border h-[20vh] mt-6 rounded-lg overflow-scroll'></div>
				</div>
				<div className='w-full md:pl-10'>
					<h1 className='text-3xl'>My Items</h1>
					{/* Filter UI */}
					<div className='flex justify-end gap-2 mt-2 mb-2'>
						<button
							className={`px-3 py-1 rounded border hover:cursor-pointer ${
								itemStatusFilter === "ALL"
									? "bg-blue-600 text-white"
									: "bg-background"
							}`}
							onClick={() => setItemStatusFilter("ALL")}>
							All
						</button>
						<button
							className={`px-3 py-1 rounded border hover:cursor-pointer ${
								itemStatusFilter === "AVAILABLE"
									? "bg-blue-600 text-white"
									: "bg-background"
							}`}
							onClick={() => setItemStatusFilter("AVAILABLE")}>
							Available
						</button>
						<button
							className={`px-3 py-1 rounded border hover:cursor-pointer ${
								itemStatusFilter === "PENDING"
									? "bg-blue-600 text-white"
									: "bg-background"
							}`}
							onClick={() => setItemStatusFilter("PENDING")}>
							Requested
						</button>
					</div>
					<div className='border h-[40vh] max-h-[40vh] mt-5 rounded-lg overflow-scroll'>
						{myItmesDataCards}
					</div>
				</div>
			</div>
		</div>
	);
}
