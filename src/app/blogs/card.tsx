import Link from "next/link";


interface BlogCardProps{
    title: string;
    link:string;
    category:string;
    date:string;
    excerpt:string;
    active:boolean;
}

export function BlogCard({title,link,category,date,excerpt,active}:BlogCardProps){
    return(
        <div className="p-4 ">
            <div className="h-full w-full rounded-lg bg-two p-2 flex flex-col gap-3">
                <div className="flex md:flex-row flex-col-reverse justify-between md:items-center">
                    <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">Category: {category}</p>
                    {   active 
                            ? 
                    <div className={`px-6 py-[1px] rounded-xl bg-gradient-to-r from-gr1b text-[#000000] to-gr3 hover:cursor-pointer`}>
                        <Link href={link} className={`font-bold text-lg font-sans`}>
                            Read
                        </Link>
                    </div>
                        :
                    <p  className={`font-bold md:text-lg text-md font-sans`}>
                        Coming Soon
                    </p>
                }
                </div>
                <p className="md:text-2xl text-lg font-semibold text-wrap font-mono text-three underline">{title}</p>
                <p className="text-sm font-sans text-white">{excerpt}</p>
                <p className="text-md font-sans text-white w-full text-right">Published on: {date}</p>
            </div>
        </div>
        
    )
}