import Image from "next/image"
import Link from "next/link"


export default function Navbar(){
    return (
        <div className="w-full h-14 flex flex-row items-center justify-between container mx-auto">

            <div className="flex items-center">
                {/* Logo */}
                <div className="w-50 h-20 flex items-center justify-center relative">
                    <Link href='/'>
                        <Image src='/websiteLogos/logo.png'  alt="Logo" fill />
                    </Link>
                </div>
                
                {/* links */}
                <div className="hidden lg:flex gap-5 justify-center items-center">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/profile" className="hover:underline">Profile</Link>
                </div>
            </div>
            
            {/* sign in sing up */}
            <div className="hidden lg:flex flex-row gap-2 items-center">
                <div className="flex items-center justify-center gap-1">
                    <Link href='/aut/login' className="flex items-center justify-center w-fit h-10 hover:underline">Log in</Link>
                    <div className="">/</div>
                    <Link href='/aut/signup' className="flex items-center justify-center w-fit h-10 mr-2 rounded-sm hover:underline">Sign up</Link>
                </div>
                <Link href="/browseitems" className="bg-calltoaction flex items-center justify-center rounded-sm px-5 py-1 hover:opacity-85 text-xl bg-gradient-to-r from-calltoaction  to-gray-900 ">Browse Items</Link>
            </div>
        </div>
    )

}