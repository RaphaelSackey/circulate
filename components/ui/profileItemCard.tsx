import { Testimonial } from "./itemcard";
import Image from "next/image";

export default function ProfileItemCard({
	id,
	removeItemHandler,
	imageUrl,
	status,
	name,
	date,
}: {
	id: number;
	removeItemHandler: (id: number) => void;
	imageUrl: string;
	status: "AVAILABLE" | "  PENDING" | " BORROWED" | " RETURNED";
	name: string;
	date: string;
}) {

	const dateObj = new Date(date);
	const formattedDate = dateObj.toLocaleDateString("en-US");

	return (
		<div >
			<div className='grid grid-cols-12 p-2 justify-center items-center gap-5 relative'>
				<div className='col-span-3 relative h-[8vh] rounded-2xl overflow-hidden'>
					<Image
						src={imageUrl}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						alt='items Image'
						priority
					/>
				</div>
				<div className='col-span-3 flex flex-col'>
					<h1 className='text-4xl'>{name}</h1>
					<h5 className='opacity-50 text-lg'>Posted {formattedDate}</h5>
				</div>
				<div className='col-span-6 flex flex-col items-end'>
					<button
						onClick={() => removeItemHandler(id)}
						className='bg-red-500 rounded-lg p-2 absolute t-0 r-0 hover:cursor-pointer'>
						Remove Item
					</button>
				</div>
				<div className='absolute top-1 right-4'>{status}</div>
			</div>
			<div className='border  mx-2'></div>
		</div>
	);
}
