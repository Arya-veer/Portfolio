"use client";
import Link from "next/link"
import { usePathname } from 'next/navigation'

const LINKS = [
    
    {
        name: "About",
        link: "/about"
    },
    {
        name: "Work Experience",
        link: "/workex"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Blogs",
        link: "/blogs"
    },
    {
        name: "Resume",
        link: "/resume"
    }
]

interface NavLinkProps {
    name: string,
    link: string
}

function NavLink({name,link}:NavLinkProps){

    const path = usePathname();

    return (
        <Link href={link} className={`my-auto py-[1px] px-[6px] rounded-full  ${path === link ? "from-[#FF6445] bg-gradient-to-r to-[#ffb820] text-[#000000]  font-bold":"text-three"} hover:cursor-pointer`}>
            {name}
        </Link>
    )
}

export default function Navbar(){

    return (
        <div className="md:h-[70px] h-fit w-full mt-6 md:mt-0 z-30 pb-[1px] bg-gradient-to-r from-gr3 to-gr1b">
            <div className="h-full w-full bg-[#000000]">
                <div  className="flex md:flex-row flex-col xl:gap-24 lg:gap-14 md:gap-10 gap-2 p-3 h-full self-end font-sans bg-[#000000] justify-end">
                    {
                        LINKS.map((link,index) => {
                            return <NavLink key={index} {...link} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}