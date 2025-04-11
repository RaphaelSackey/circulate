import { Search, Recycle, GitPullRequestCreate, MoveRight } from "lucide-react";

export default function Howitworks() {
	return (
		<section className='container'>
			<div className='flex items-center justify-center text-4xl mb-8'>
				How It Works
			</div>

			<div className='flex flex-wrap items-center justify-center gap-10'>
				{/* Step 1 */}
				<div className='flex flex-col items-center justify-center'>
					<div className='dark:bg-popover bg-accent p-10 md:p-20 rounded-lg'>
						<Search className='w-12 h-12 md:w-16 md:h-16' />
					</div>
					<h1 className='text-center pt-4 text-lg'>Browse items</h1>
				</div>

				<MoveRight className='hidden lg:block w-8 h-8' />

				{/* Step 2 */}
				<div className='flex flex-col items-center justify-center'>
					<div className='dark:bg-popover bg-accent p-10 md:p-20 rounded-lg'>
						<GitPullRequestCreate className='w-12 h-12 md:w-16 md:h-16' />
					</div>
					<h1 className='text-center pt-4 text-lg'>
						Request to Borrow or Swap
					</h1>
				</div>

				<MoveRight className='hidden lg:block w-8 h-8' />

				{/* Step 3 */}
				<div className='flex flex-col items-center justify-center'>
					<div className='dark:bg-popover bg-accent p-10 md:p-20 rounded-lg'>
						<Recycle className='w-12 h-12 md:w-16 md:h-16' />
					</div>
					<h1 className='text-center pt-4 text-lg'>
						Enjoy and Return the Item!
					</h1>
				</div>
			</div>
		</section>
	);
}
