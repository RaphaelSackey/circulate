import Link from "next/link";
export default function ProfileCommunityCard() {
	return (
		<div className='text-2xl border p-3 hover:cursor-pointer hover:bg-gray-900'>
			<Link
				href='community/macomb'
				className='w-full h-full'>
				Macomb Hall
			</Link>
		</div>
	);
}
