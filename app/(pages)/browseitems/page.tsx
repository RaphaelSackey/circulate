"use client"

import ItemCard from "@/components/ui/itemcard";
import { useState } from "react";
import { Search } from "lucide-react"; 

export default function BrowseItems() {
    const [searchWord, setSearchWord] = useState('')
	return (
		<div className='container mx-auto'>
            <div></div>
			<div className="relative">
				<form className="w-full">
                    <Search className="absolute top-2.5 left-4"/>
					<input type='text' className="h-10 border w-full rounded pl-13" placeholder= "Search items..." value={searchWord} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setSearchWord(e.target.value)} />
				</form>
			</div>

			{/* items near by */}
            <h1 className="text-lg">Location: <span className="opacity-50 text-md">Near You</span></h1>
			<div className=' grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-2 '>
				<ItemCard
					imgUrl='ds'
					description='sd'
					distance='ds'
					status='Available'
					name='sdadd'
				/>
				<ItemCard
					imgUrl='ds'
					description='sd'
					distance='ds'
					status='Available'
					name='sdadd'
				/>
				<ItemCard
					imgUrl='ds'
					description='sd'
					distance='ds'
					status='Available'
					name='sdadd'
				/>
				<ItemCard
					imgUrl='ds'
					description='sd'
					distance='ds'
					status='Available'
					name='sdadd'
				/>
				<ItemCard
					imgUrl='ds'
					description='sd'
					distance='ds'
					status='Available'
					name='sdadd'
				/>
			</div>
		</div>
	);
}
