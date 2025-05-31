"use client";

import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft as IconArrowLeft ,ArrowRight as IconArrowRight, Dot } from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";

export type Testimonial = {
	distance: string;
	name: string;
	description: string;
	src: string;
};
export const ItemCard = ({
	testimonials,
	autoplay = false,
	display = true
}: {
	testimonials: Testimonial[];
	autoplay?: boolean;
	display: boolean
}) => {
	const [active, setActive] = useState(0);
	const [onClient, setOnClient] = useState(false);

	const handleNext = () => {
		setActive((prev) => (prev + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setActive(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

	const isActive = (index: number) => {
		return index === active;
	};

	useEffect(() => {
		if (autoplay) {
			const interval = setInterval(handleNext, 5000);
			return () => clearInterval(interval);
		}
	}, [autoplay]);

	const randomRotateY = () => {
		return Math.floor(Math.random() * 21) - 10;
	};
	useEffect(() => setOnClient(true),[])
	
	if (!onClient){
		return <div></div>
	}
	
	return (
		display? <div className='relative px-2 py-2 antialiased border rounded-lg '>
			
			{/* Highlight behind card
			<div className='absolute inset-0 top-3 right-3 flex items-center justify-center z-0'>
				<div className='w-full h-full rounded-lg bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-500  blur-sm opacity-30' />
			</div> */}
			
			<div className='relative grid grid-cols-2 gap-5 h-full'>
				<div>
					<div className='relative h-full w-full'>
						<AnimatePresence>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.src}
									initial={{
										opacity: 0,
										scale: 0.9,
										z: -100,
										rotate: randomRotateY(),
									}}
									animate={{
										opacity: isActive(index) ? 1 : 0.7,
										scale: isActive(index) ? 1 : 0.95,
										z: isActive(index) ? 0 : -100,
										rotate: isActive(index)
											? 0
											: randomRotateY(),
										zIndex: isActive(index)
											? 40
											: testimonials.length + 2 - index,
										y: isActive(index) ? [0, -80, 0] : 0,
									}}
									exit={{
										opacity: 0,
										scale: 0.9,
										z: 100,
										rotate: randomRotateY(),
									}}
									transition={{
										duration: 0.4,
										ease: "easeInOut",
									}}
									className='absolute inset-0 origin-bottom'>
									<Image
										src={testimonial.src}
										alt={testimonial.name}
										priority
										fill
										className='h-full w-full rounded-3xl object-cover object-center'
									/>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</div>
				<div className='flex flex-col justify-between py-4'>
					<div>
						<h3 className='text-4xl font-bold'>
							{testimonials[active].name}
						</h3>
						<p className='text-sm text-gray-500 dark:text-neutral-500 line-clamp-2'>
							{testimonials[active].description}
						</p>
						<div className='text-lg text-gray-500 dark:text-neutral-300'>
							{testimonials[active].distance}
								
						</div>
						
					</div>
					<div className='flex gap-4 pt-12 md:pt-0'>
						<button
							onClick={handlePrev}
							className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'>
							<IconArrowLeft className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400' />
						</button>
						<button
							onClick={handleNext}
							className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'>
							<IconArrowRight className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400' />
						</button>
					</div>
				</div>
			</div>
			<button className="absolute right-2 bottom-1 bg-blue-600 px-7 py-2 rounded text-white">Request</button>
		</div> : ""
	);
};
