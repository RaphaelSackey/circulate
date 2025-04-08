"use client";

import React, { useState } from "react";
import { TsignUp } from "@/types/client/C_types";
import Link from "next/link";
import { clientActionSignup } from "@/actions/client/auth/C_authActions";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { validateSigninForm } from "@/actions/client/lib/validateSigninForm";
import { ErrorAlert } from "@/components/ui/erroralert";

export default function Signup() {
	const [formData, setFormdata] = useState<TsignUp>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	

	const { mutate, isPending } = useMutation({
		mutationFn: clientActionSignup,
		onSuccess: (data) => {
			if(!data.status){
				handleError(data.e as string)
			}
		},
		onError: (e) => console.log("something went wrong", e),
	});

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const name = e.target.name;
		setFormdata((prev) => ({ ...prev, [name]: e.target.value }));
	};
	const handleError = (message:string) => {
		setErrorMessage(message)
		setError(true);
		
		setTimeout(() => setError(false), 5000);
	}

	const handleSubmit = () => {
		const goodForm = validateSigninForm(formData);
		if (!goodForm) {
			handleError('Passwords do not match')
		} else {
			mutate(formData);
		}
	};

	return (
		<div className='lg:container mx-4 lg:mx-auto h-[90vh] flex flex-col justify-center items-center'>
			{error && <ErrorAlert message= {errorMessage} />}
			<h1 className='md:hidden text-4xl font-extrabold mb-10 text-balance'>
				Sign In
			</h1>
			<h1 className='hidden md:block text-4xl font-extrabold mb-10 text-balance'>
				Sign In to Start Borrowing and Lending!
			</h1>
			<form className='flex flex-col w-full md:w-[30rem] gap-2'>
				<label
					htmlFor='firstName'
					className='text-md'>
					First Name
				</label>
				<input
					type='text'
					id='firstName'
					name='firstName'
					onChange={handleFormChange}
					value={formData.firstName}
					className='border rounded h-10 pl-2'
				/>

				<label
					htmlFor='lastName'
					className='text-md'>
					Last Name
				</label>
				<input
					type='text'
					id='lastName'
					name='lastName'
					onChange={handleFormChange}
					value={formData.lastName}
					className='border rounded h-10 pl-2'
				/>

				<label
					htmlFor='email'
					className='text-md'>
					Email
				</label>
				<input
					type='text'
					id='email'
					name='email'
					onChange={handleFormChange}
					value={formData.email}
					className='border rounded h-10 pl-2'
				/>

				<label
					htmlFor='password'
					className='text-md'>
					{" "}
					Password{" "}
				</label>
				<input
					type='password'
					id='password'
					name='password'
					onChange={handleFormChange}
					value={formData.password}
					className='border rounded h-10 pl-2'
				/>

				<label
					htmlFor='confirmPassword'
					className='text-md'>
					{" "}
					Confirm Password
				</label>
				<input
					type='password'
					id='confirmPassword'
					name='confirmPassword'
					onChange={handleFormChange}
					value={formData.confirmPassword}
					className='border rounded h-10 pl-2'
				/>
			</form>
			<h5 className='mt-2 text-md'>
				Already have an account?
				<span className='text-custom-secondary underline ml-1'>
					<Link href='/login'>login</Link>
				</span>
			</h5>
			<div className='pt-5'>
				<button
					className=' text-white text-lg border py-2 px-22 rounded-lg bg-calltoaction hover:cursor-pointer hover:opacity-85'
					onClick={handleSubmit}>
					{isPending ? (
						<LoaderCircle className='animate-spin' />
					) : (
						"Sign up"
					)}
				</button>
			</div>
		</div>
	);
}
