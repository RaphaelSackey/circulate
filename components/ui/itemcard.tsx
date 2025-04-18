import { TitemCard } from "@/types/C_types";
import Image from "next/image";

export default function ItemCard(props: TitemCard) {
	return (
		<div className='relative'>
			{/* Highlight behind card */}
			<div className='absolute inset-0 top-3 right-3 flex items-center justify-center z-0'>
				<div className='w-full h-full rounded-lg bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-500  blur-sm opacity-30' />
			</div>
			<div className='relative grid w-full h-52 grid-cols-7 p-2 rounded-lg gap-2 items-center max-h-full border z-1 bg-background'>
				{/* left */}
				<div className='flex items-center justify-center relative h-full w-full col-span-3'>
					<Image
						src='/assets/lawn.jpg'
						alt='image url'
						fill
						className='rounded'
					/>
				</div>

				{/* right */}
				<div className='col-span-4 max-h-full'>
					<h1 className='text-5xl md:text-5xl lg:text-6xl font-bold opacity-85 truncate'>
						Lawm Mower{" "}
					</h1>
					<p className='text-md md:text-lg opacity-60 line-clamp-2'>
						here is the descdkad jkdahd hadsu hasd kjasd hdady hadb
						adjupsdj{" "}
					</p>
					<h4 className='text-md md:text-lg opacity-60'>2 miles </h4>
					<h4 className='text-md md:text-lg opacity-60'>Available</h4>
				</div>
				<button className='absolute right-2 bottom-1 bg-blue-600 px-7 py-2 rounded text-white'>
					Request
				</button>
			</div>
		</div>
	);
}
