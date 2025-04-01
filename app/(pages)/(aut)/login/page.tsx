'use client'

import { TlogIn } from "@/types/form/formdata";
import React, {useState} from "react";
import Link from "next/link";

export default function Login() {
	const [formData, setFormdata] = useState<TlogIn>({
		email: "",
		password: "",

	});

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const name = e.target.name;
		setFormdata((prev) => ({ ...prev, [name]: e.target.value }));
	};
	return (
		<div className='lg:container mx-4 lg:mx-auto h-[90vh] flex flex-col justify-center items-center'>
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
					type='text'
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
				<button className='text-white text-lg border py-2 px-22 rounded-lg bg-calltoaction'>
					Log in
				</button>
			</div>
		</div>
	);
}
