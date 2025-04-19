"use client";

import {useState}from "react";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const options = [
	{ label: "Electronics" },
	{ label: "Tools" },
	{ label: "Education" },
	{ label: "Appliances" },
	{ label: "Sports & Fitness" },
	{ label: "Clothing & Wearables" },
	{ label: "Home & Furniture" },
	{ label: "Books & Media" },
	{ label: "Outdoor & Garden" },
	{ label: "Toys & Games" },
	{ label: "Art & Crafts" },
	{ label: "Musical Instruments" },
	{ label: "Bikes & Mobility" },
];
export default function DropdownMenuCheckboxes({toggleItem, selectedFilterItems}: {toggleItem:(value: string) => void, selectedFilterItems: string[] }) {

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='outline' className="text-lg">Filter</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56'>
				<DropdownMenuLabel>Categories</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{options.map((option) => (
					<DropdownMenuCheckboxItem
						key={option.label}
						checked={selectedFilterItems.includes(option.label)}
						onCheckedChange={() => toggleItem(option.label)}
                        onSelect={(e) => e.preventDefault()}
					>
						{option.label}
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
