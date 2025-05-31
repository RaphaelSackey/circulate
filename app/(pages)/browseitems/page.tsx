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
import { useRouter } from 'next/navigation'


export default function BrowseItems() {
	const [searchWord, setSearchWord] = useState("");
	const [selectedFilterItems, setSelectedFilterItems] = useState<string[]>([]);
	const [showPromptAlert, setShowPromptAlert] = useState(false)
	const [cards, setCards] = useState<ReactElement[]>([])
	const router = useRouter()

	const [queryData, setQueryData] = useState({
		longitude: 0,
		latitude: 0,
		searchQuery: "",
	});

	const {location, isLoading:locationLoading, error, requestLocation} = useLocation();

	const skel = [...Array(5).keys()].map(cur => <Skeleton key={cur}/>)
	const {data:signInData, isPending, isSuccess} = useSignedIn()

    // update setQueryData when user is typing in the search bar
	useEffect(() => {
		setQueryData((prev) => ({ ...prev, searchQuery: searchWord }));
	}, [searchWord]);

    // set the long and lat of the querydata
	useEffect(() => {
		if (location) {
			setQueryData((prev) => ({
				...prev,
				latitude: location.latitude,
				longitude: location.longitude,
			}));
		}
	}, [location]);

	// infinite scroll query
    const isReady = queryData.latitude !== 0 && queryData.longitude !== 0;
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		status,
	} = useInfiniteQuery({
		queryKey: ["itemsData"],
		queryFn: ({ pageParam }) => getItemsByCurrentLocation(pageParam),
		initialPageParam: { data: queryData, batch: 1 },
		getNextPageParam: (lastPage) => {
			return lastPage.success && lastPage.nextBatch? lastPage.nextBatch : undefined;
		},
        enabled: isReady,
		retry: false,
	});

	useLayoutEffect(() => {
		if (!isPending && !isSuccess){
			router.push('/')
		}

	}, [isPending])
	
	useEffect(() => {
		if (data?.pages[0].success){
			if (data.pages[0].itemsNearby.length){
				const tempCards = data.pages[0].itemsNearby.map(item => {
					const testimonials: Testimonial[] = []
					let shouldDisplay = true
					if (searchWord.length > 0){
						const word = item.name.toLowerCase()
						const filWord = searchWord.toLowerCase()

						if (!word.includes(filWord)){
							shouldDisplay = false
						}
					}
					if (item.imageUrl.length > 1){
						for (let i = 0; i < item.imageUrl.length - 1; i ++ ){
							testimonials.push({
								name: item.name,
								distance: String(item.distance),
								description: item.description,
								src: item.imageUrl[i]
							})
						}
				
					return <ItemCard testimonials={testimonials} key={item.id} display= {shouldDisplay}/>
					
					}else{
						const testimonials: Testimonial[] = []
						testimonials.push({
							name: item.name,
							description: item.description,
							distance: String(item.distance),
							src: item.imageUrl[0]
						})

						return <ItemCard testimonials={testimonials} key={item.id} display = {shouldDisplay}/>
					}
				})
				
				setCards(tempCards)
			}else{
				setCards([<Itmesnotfound key={1}/>])
			}
		}
	},[data, searchWord])
    
	const toggleItem = (value: string) => {
		setSelectedFilterItems((prev) =>
			prev.includes(value)
				? prev.filter((v) => v !== value)
				: [...prev, value]
		);
	};


	useEffect(() => {
		const hasSeenPrompt = sessionStorage.getItem("locationPromptShown");
		if (location === null && !hasSeenPrompt){
			sessionStorage.setItem("locationPromptShown", "true");
			setShowPromptAlert(true)
		}
	},[location])
	
	function searchFilter(){
		console.log(data?.pages[0].itemsNearby)
		if (data?.pages[0].itemsNearby){
			
		}
	}
	
	const handleAllowLocationAccess = () => {
		requestLocation()
		setShowPromptAlert(false)
	}
	const handleDenyLocationAccess = () =>{
		setShowPromptAlert(false)
	}
	
	return (
		<div className='container mx-auto flex flex-col gap-5'>
			{showPromptAlert && <PromptAlert message="Location access is needed to be able to view items near you" acceptfn={handleAllowLocationAccess} rejectfn={handleDenyLocationAccess}/>}
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
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
							setSearchWord(e.target.value)
							searchFilter()
						}
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
					{status === "pending"? skel : cards}
					
				</div>
			</div>
		</div>
	);
}
