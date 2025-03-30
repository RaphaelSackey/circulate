"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const pathname = usePathname()

	return (
		<>
			{/* Navbar */}
			<div className='w-full h-14 flex flex-row items-center justify-between container mx-auto'>
				<div className='flex items-center'>
					{/* Logo */}
					<div className='w-50 h-20 flex items-center justify-center relative'>
						<Link href='/'>
							<Image
								src='/websiteLogos/logo.png'
								alt='Logo'
								fill
							/>
						</Link>
					</div>

					{/* Links (Hidden on small screens) */}
					<div className='hidden lg:flex gap-5 justify-center items-center'>
						<Link
							href='/'
							className='hover:underline'>
							Home
						</Link>
						<Link
							href='/profile'
							className='hover:underline'>
							Profile
						</Link>
					</div>
				</div>

				{/* Sign in/Sign up (Hidden on small screens) */}
				<div className='hidden lg:flex flex-row gap-2 items-center'>
					<div className='flex items-center justify-center gap-1'>
						<Link
							href='/aut/login'
							className='hover:underline'>
							Log in
						</Link>
						<div>/</div>
						<Link
							href='/aut/signup'
							className='hover:underline'>
							Sign up
						</Link>
					</div>
					<Link
						href='/browseitems'
						className='bg-calltoaction flex items-center justify-center rounded-sm px-5 py-1 hover:opacity-85 text-xl bg-gradient-to-r from-calltoaction to-gray-900'>
						Browse Items
					</Link>
				</div>

				{/* Hamburger Icon for Mobile */}
				<button
					className='lg:hidden'
					onClick={() => setSidebarOpen(true)}>
					<Menu size={32} />
				</button>
			</div>

			{/* Sidebar */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform z-50 text-black ${
					isSidebarOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out lg:hidden`}>
				<button
					className='absolute top-4 right-4'
					onClick={() => setSidebarOpen(false)}>
					<X size={32} />
				</button>
				<div className='flex flex-col mt-16 gap-5 items-center'>
					<Link
						href='/'
						className={`hover:underline ${pathname === '/'? 'active' : ''}`}
						onClick={() => setSidebarOpen(false)}>
						Home
					</Link>
					<Link
						href='/profile'
						className={`hover:underline ${pathname === '/profile'? 'active' : ''}`}
						onClick={() => setSidebarOpen(false)}>
						Profile
					</Link>
					<Link
						href='/aut/login'
						className={`hover:underline ${pathname === '/aut/login'? 'active' : ''}`}
						onClick={() => setSidebarOpen(false)}>
						Log in
					</Link>
					<Link
						href='/aut/signup'
						className={`hover:underline ${pathname === '/aut/signup'? 'active' : ''}`}
						onClick={() => setSidebarOpen(false)}>
						Sign up
					</Link>
					<Link
						href='/browseitems'
						className={`hover:underline ${pathname === '/browseitems'? 'active' : ''}`}
						onClick={() => setSidebarOpen(false)}>
						Browse Items
					</Link>
				</div>
			</div>

			{/* Overlay when sidebar is open */}
			{isSidebarOpen && (
				<div
					className='fixed inset-0 bg-black opacity-50 lg:hidden z-30'
					onClick={() => setSidebarOpen(false)}></div>
			)}
		</>
	);
}
