
import Link from "next/link"

export default function Navbar(){
    return (

        <div className="md:h-[90px] h-[130px] z-10 lg:px-[50px] border-b-2 border-gray-150 w-full flex flex-row bg-zinc-950 justify-between">
            <Link href="/" className="lg:text-6xl md:text-5xl text-2xl text-amber-400 font-bold my-auto">
                Arya Veer Singh Chauhan
            </Link>
            <div className="flex flex-row text-amber-400 text-xl font-bold my-auto gap-6 justify-between">
                <Link href="#skills">
                    Skils
                </Link>
                <Link href="#projects">
                    Projects
                </Link>
                <Link href="#workex">
                    WorkEx
                </Link>
                <Link href="#blogs">
                    Blogs
                </Link>
            </div>
        </div>
    )
}