"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ImageDown } from "lucide-react";

export default function MyDropzone({
	handleImageUpload,
	imageCount
}: {
	handleImageUpload: (image: string[]) => void;
	imageCount: number
}) {
	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			// Convert files to base64
			const base64Files = await Promise.all(
				acceptedFiles.map(
					(file) =>
						new Promise((resolve, reject) => {
							const reader = new FileReader();
							reader.onloadend = () => resolve(reader.result); // base64
							reader.onerror = reject;
							reader.readAsDataURL(file);
						})
				)
			);

			// Update state with base64 files and other form data
			handleImageUpload(base64Files as string[])
			

			console.log("Files as base64:", base64Files);
		},[]);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: true,
		accept: {
			"image/*": [],
		},
	});

	return (
		<div
			{...getRootProps()}
			className='relative flex flex-col items-center justify-center h-46 border border-dashed p-0'>
			<input {...getInputProps()} />
			<div className="absolute top-0 text-start w-full text-xs opacity-70">Image Count: {imageCount}</div>
			{isDragActive ? (
				<>
					<p>Drop the files here ...</p>
				</>
			) : (
				<>
					<ImageDown
						height={100}
						width={100}
					/>
					<p>Upload Image</p>
				</>
			)}
		</div>
	);
}
