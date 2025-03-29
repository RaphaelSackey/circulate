import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<div className='w-full h-[90vh] lg:h-[80vh] grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 items-center justify-center'>
            {/* small screen up*/}
            <div className='lg:hidden h-full relative w-full flex items-center justify-center'>
				<Image
					src='/assets/hero.png'
					fill
					className='invert'
					alt='hero image'
				/>
			</div>
			{/* left */}
			<div className=' w-full h-full flex flex-col items-center justify-center text-7xl lg:text-8xl xxl:text-9xl lg:col-span-5 xxl:col-span-6'>

				<h1 className="text-center lg:hidden">
					Borrow, Lend, Swap - It's,
					<br /> That Easy!
				</h1>
				<h1 className="hidden lg:block text-center ">
					Borrow, Lend, <br />
					Swap - It's,
					<br /> That Easy!
				</h1>

				<div className='text-lg mt-8'>
					<Link
						href='/browseitem'
						className='flex items-center justify-center py-3 px-10 rounded-md border bg-gradient-to-r from-calltoaction  to-gray-900 hover:scale-105 transform transition-transform duration-500 ease-in-out hover:scale-105'>
						{" "}
						Browse Itmes
					</Link>
				</div>
			</div>

			{/* right */}
			<div className='hidden h-full lg:h-5/6 xxl:h-full relative w-full lg:col-span-7 xxl:col-span-6 lg:flex items-center justify-center'>
				<Image
					src='/assets/hero.png'
					fill
					className='invert'
					alt='hero image'
				/>
			</div>
		</div>
	);
}
