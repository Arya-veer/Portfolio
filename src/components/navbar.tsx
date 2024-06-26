
import Link from "next/link"

interface NavbarProps {
    page: string,
    setPage: (page: string) => void
}

export default function Navbar({page,setPage}: NavbarProps){
    return (
        <div className="md:h-[70px] h-[130px] w-full  pb-[1px] bg-gradient-to-r from-gr3 to-gr1b">
            <div className="h-full w-full  bg-[#000000]">
                <div  className="flex flex-row gap-24 p-3 h-full self-end font-sans justify-end">
                    <div className={`my-auto py-[1px] px-[6px] rounded-full  ${page == "about" ? "from-[#FF6445] bg-gradient-to-r to-[#ffb820] text-[#000000]  font-bold":"text-three"} hover:cursor-pointer`} onClick={()=>{setPage("about")}}>
                        About
                    </div>
                    <div className={`my-auto py-[1px] px-[6px] rounded-full  ${page == "projects" ? "from-[#FF6445] bg-gradient-to-r to-[#ffb820] text-[#000000]  font-bold":"text-three"} hover:cursor-pointer`} onClick={()=>{setPage("projects")}}>
                        Projects
                    </div>
                    <div className={`my-auto py-[1px] px-[6px] rounded-full  ${page == "workex" ? "from-[#FF6445] bg-gradient-to-r to-[#ffb820] text-[#000000] font-bold":"text-three "} hover:cursor-pointer`} onClick={()=>{setPage("workex")}}>
                        Work Experience
                    </div>
                    <div className={`my-auto py-[1px] px-[6px] rounded-full  ${page == "blogs" ? "from-[#FF6445] bg-gradient-to-r to-[#ffb820] text-[#000000] font-bold":"text-three"} hover:cursor-pointer`} onClick={()=>{setPage("blogs")}}>
                        Blogs
                    </div>
                </div>
            </div>
        </div>
    )
}