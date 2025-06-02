"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import ModeToggle from "../../components/ui/modetoggle";
import useSignedIn from "@/hooks/singedInStatus";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "@/actions/client/C_auth_actions";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function Navbar() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const pathname = usePathname();
	const { isPending, isSuccess } = useSignedIn();
	const w = useRouter();
	const queryClient = useQueryClient();

	// mutation to log user out
	const mutation = useMutation({
		mutationFn: signOut,
		onSuccess: (data) => {
			if (data.status) {
				queryClient.invalidateQueries({ queryKey: ["uid"] });
				router.push("/");
			}
		},
		onError: () => {
			console.log("failed to sign out");
		},
	});

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
								height={160}
								width={160}
								className=''
								priority
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
							href='/community'
							className='hover:underline'>
							Community
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
							href='/login'
							className={
								!isPending && isSuccess
									? "hidden"
									: "hover:underline"
							}>
							Log in
						</Link>
						<div
							className={!isPending && isSuccess ? "hidden" : ""}>
							/
						</div>
						<Link
							href='/signup'
							className={
								!isPending && isSuccess
									? "hidden"
									: "hover:underline"
							}>
							Sign up
						</Link>
						<button
							className={
								!isPending && isSuccess
									? "hover:underline"
									: "hidden"
							}
							onClick={() => mutation.mutate()}>
							Sign out
						</button>
					</div>
					{!isPending && isSuccess ? (
						<Link
							href='/browseitems'
							className='flex bg-calltoaction text-white items-center justify-center rounded-sm px-5 py-1 hover:opacity-85 text-xl dark:bg-gradient-to-r from-calltoaction to-gray-900'>
							Browse Items
						</Link>
					) : (
						""
					)}
					<ModeToggle />
				</div>

				{/* Hamburger Icon for Mobile */}
				<div className='lg:hidden flex items-center justify-center gap-3'>
					<button
						className='lg:hidden'
						onClick={() => setSidebarOpen(true)}>
						<Menu size={32} />
					</button>
					<ModeToggle />
				</div>
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
						className={`hover:underline ${
							pathname === "/" ? "active" : ""
						}`}
						onClick={() => setSidebarOpen(false)}>
						Home
					</Link>
					<Link
						href='/browseitems'
						className={`hover:underline ${
							pathname === "/browseitems" ? "active" : ""
						}`}
						onClick={() => setSidebarOpen(false)}>
						Browse Items
					</Link>
					<Link
						href='/community'
						className={pathname === "/community" ? "active" : ""}
						onClick={() => setSidebarOpen(false)}>
						Community
					</Link>
					<Link
						href='/profile'
						className={`hover:underline ${
							pathname === "/profile" ? "active" : ""
						}`}
						onClick={() => setSidebarOpen(false)}>
						Profile
					</Link>
					<Link
						href='/login'
						className={
							!isPending && isSuccess
								? "hidden"
								: `hover:underline ${
										pathname === "/login" ? "active" : ""
								  }`
						}
						onClick={() => setSidebarOpen(false)}>
						Log in
					</Link>

					<Link
						href='/signup'
						className={
							!isPending && isSuccess
								? "hidden"
								: `hover:underline ${
										pathname === "/signup" ? "active" : ""
								  }`
						}
						onClick={() => setSidebarOpen(false)}>
						Sign up
					</Link>
					<Link
						href='/signup'
						className={
							!isPending && !isSuccess
								? "hidden"
								: `hover:underline ${
										pathname === "/signup" ? "active" : ""
								  }`
						}
						onClick={() => {
							setSidebarOpen(false);
							mutation.mutate();
						}}>
						Sign out
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
