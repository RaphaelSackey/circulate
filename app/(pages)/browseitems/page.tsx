"use client";

import ItemCard from "@/components/ui/itemcard";
import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import DropdownMenuCheckboxes from "@/components/ui/dropdowncheckbox";


export default function BrowseItems() {
	const [searchWord, setSearchWord] = useState("");
    const [selectedFilterItems, setSelectedFilterItems] = useState<string[]>([]);

    console.log(selectedFilterItems)
	const toggleItem = (value: string) => {
		setSelectedFilterItems((prev) =>
			prev.includes(value)
				? prev.filter((v) => v !== value)
				: [...prev, value]
		);
	};
	return (
		<div className='container mx-auto flex flex-col gap-5'>
			{/* filter and add items buttons */}
			<div className='flex justify-end items-center gap-2 mt-6'>
                <DropdownMenuCheckboxes toggleItem = {toggleItem } selectedFilterItems = {selectedFilterItems}/>
				<Link
					href='/postitem'
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
                    Location: <span className='opacity-50 text-md'>Near You</span>
                </h1>
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
		</div>
	);
}
