"use client";

import { useState, useEffect } from "react";
import MyDropzone from "@/components/ui/imagedropzone";
import { TaddItmes } from "@/types/C_types";
import { useMutation } from "@tanstack/react-query";
import { addNewItem } from "@/actions/client/C_data_interractions_actions";
import { ErrorAlert } from "@/components/ui/erroralert";
import { useLocation } from "@/context/location";
import { LoaderCircle } from "lucide-react";

export default function PostItems() {
	const [formData, setFromData] = useState<TaddItmes>({
		name: "",
		description: "",
		location: [],
	});

	const [images, setImages] = useState<Array<string>>([]);
	const [alertMessage, setAlertMessage] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const location = useLocation();
	console.log(location);

	// set the location data for the formdata
	useEffect(() => {
		if (location !== null) {
			setFromData((prev) => ({
				...prev,
				location: [
					String(location.latitude),
					String(location.longitude),
				],
			}));
		}
	}, [location]);

	// update the form data
	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const name = e.target.name;
		setFromData((prev) => ({ ...prev, [name]: e.target.value }));
	};

	// update the image array to contain attached images
	const handleImageUpload = (image: string[]) => {
		setImages((prev) => [...prev, ...image]);
	};

	// addItemMutation definition
	const { mutate, isPending } = useMutation({
		mutationFn: addNewItem,
		onError: (e) => {
			handleAlert("Failed to add item");
		},
		onSuccess: (data) => {},
	});

	// control the alert ui
	const handleAlert = (e: string) => {
		setAlertMessage(e);
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 5000);
	};

	// function to invoke addItemMutation
	function handleAddItem() {
		if (images.length === 0) {
			handleAlert("Must have at least one image attached");
		} else if (formData.location.length == 0) {
			handleAlert("Location access is needed to post an item");
		} else if (formData.name === "") {
			handleAlert("Item must have a name");
		} else {
			mutate({ data: formData, images });
		}
	}
	return (
		<div className='container mx-auto flex flex-col justify-center items-center'>
			{showAlert && <ErrorAlert message={alertMessage} />}{" "}
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
				<button
					className='bg-blue-600 mt-2 rounded hover:cursor-pointer hover:opacity-85 h-8'
					onClick={(e) => {
						e.preventDefault();
						handleAddItem();
					}}>
					{isPending ? (
						<div className='w-full flex justify-center items-center'>
							<LoaderCircle className='animate-spin' />
						</div>
					) : (
						"Post Item"
					)}
				</button>
			</form>
		</div>
	);
}
