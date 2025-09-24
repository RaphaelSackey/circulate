import { Testimonial } from "./itemcard";
import Image from "next/image";

export default function ProfileItemCard({
	id,
	removeItemHandler,
	testimonials,
	status,
}: {
	id: string;
	removeItemHandler: (id: string) => void;
	testimonials: Testimonial[];
	status: "AVAILABLE" | "REQUESTED" | "LOANED";
}) {
	return (
		<div key={id}>
			<div className='grid grid-cols-12 p-2 justify-center items-center gap-5 relative'>
				<div className='col-span-3 relative h-[8vh] rounded-2xl overflow-hidden'>
					<Image
						src={testimonials[0].src}
						fill
						alt='items Image'
					/>
				</div>
				<div className='col-span-3 flex flex-col'>
					<h1 className='text-4xl'>Drill</h1>
					<h5 className='opacity-50 text-lg'>Posted 5/23/2025</h5>
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
            <div className="border  mx-2"></div>
		</div>
	);
}
