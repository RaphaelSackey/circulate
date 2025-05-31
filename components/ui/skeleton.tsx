export default function Skeleton() {
	return (
		<div className='mx-auto w-full rounded-md border p-4 h-full' >
			<div className='flex animate-pulse space-x-4'>
				<div className='size-20 rounded-full bg-border'></div>
				<div className='flex-1 space-y-6 py-1'>
					<div className='h-7 rounded bg-border'></div>
					<div className='space-y-3'>
						<div className='grid grid-cols-3 gap-4'>
							<div className='col-span-2 h-6 rounded bg-border'></div>
							<div className='col-span-1 h-6 rounded bg-border'></div>
						</div>
						<div className='h-4 rounded bg-border'></div>
					</div>
				</div>
			</div>
		</div>
	)
}
