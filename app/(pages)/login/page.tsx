"use client";

import { TlogIn, TsessionCookieResponse } from "@/types/C_types";
import React, { useState } from "react";
import { clientLogin } from "@/actions/client/C_auth_actions";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ErrorAlert } from "@/components/ui/erroralert";
import { LoaderCircle } from "lucide-react";

export default function Login() {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState("");
	const [error, setError] = useState(false);

	const [formData, setFormdata] = useState<TlogIn>({
		email: "",
		password: "",
	});

	const {mutate, isPending} = useMutation({
		mutationFn: clientLogin,
		onSuccess: (data: TsessionCookieResponse) => {
			if (!data.status) {
				handleError(data.e as string);
			} else {
				if (!data.data.success) {
					handleError(data.data.message);
				} else {
					console.log(data.data.data);
					router.push("/");
				}
			}
		},
		onError: (e) => console.log("something went wrong", e),
	});


	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const name = e.target.name;
		setFormdata((prev) => ({ ...prev, [name]: e.target.value }));
	};


	const handleError = (message: string): void => {
		setErrorMessage(message);
		setError(true);

		setTimeout(() => setError(false), 5000);
	};

	return (
		<div className='lg:container mx-4 lg:mx-auto h-[90vh] flex flex-col justify-center items-center'>
			{error && <ErrorAlert message={errorMessage} />}
			<h1 className='md:hidden text-4xl font-extrabold mb-10 text-balance'>
				Log In
			</h1>
			<h1 className='hidden md:block text-4xl font-extrabold mb-10 text-balance'>
				Log in to Start Borrowing and Lending!
			</h1>
			<form className='flex flex-col w-full md:w-[30rem] gap-2'>
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
			</form>
			<h5 className='mt-2 text-md'>
				Don't have an account?
				<span className='text-custom-secondary underline ml-1'>
					<Link href='/signup'>sing up</Link>
				</span>
			</h5>
			<div className='pt-5'>
				<button
					className=' text-white text-lg border py-2 px-22 rounded-lg bg-calltoaction hover:cursor-pointer hover:opacity-85'
					onClick={() => mutate(formData)}>
					{isPending ? (
						<LoaderCircle className='animate-spin' />
					) : (
						"Log in"
					)}
				</button>
				
			</div>
		</div>
	);
}
