"use client";

import { useState } from "react";
import MyDropzone from "@/components/ui/imagedropzone";
import { TaddItmes } from "@/types/C_types";

export default function PostItems() {
	const [formData, setFromData] = useState<TaddItmes>({
		name: "",
		description: "",
	});

	const [images, setImages] = useState<Array<string>>([]);

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const name = e.target.name;
		setFromData((prev) => ({ ...prev, [name]: e.target.value }));
	};

	const handleImageUpload = (image: string[]) => {
		setImages((prev) => [...prev, ...image]);
	};

	return (
		<div className='flex flex-col justify-center items-center'>
			<div className='text-4xl mb-5 text-center'>
				Share With Community
			</div>
			<form className='flex flex-col justify-center w-[90%] md:w-[50%] lg:w-[33%] gap-2'>
				<label
					htmlFor='name'
					className='text-lg'>
					Name
				</label>
				<input
					type='text'
					name='name'
					id='name'
					className='border rounded h-10 pl-2'
					value={formData.name}
					onChange={handleFormChange}
				/>
				<label
					htmlFor='description'
					className='text-lg'>
					Description
				</label>
				<textarea
					name='description'
					id='description'
					className='border rounded h-42 pl-2 pt-2'
					value={formData.description}
					onChange={handleFormChange}
				/>
				<label className='text-lg'>Images</label>
				<MyDropzone
					handleImageUpload={handleImageUpload}
					imageCount={images.length}
				/>
				<button className='bg-blue-600 mt-2 rounded hover:cursor-pointer hover:opacity-85 h-8'>
					Post Item
				</button>
			</form>
		</div>
	);
}
