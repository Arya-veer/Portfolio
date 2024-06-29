import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";



interface ProjectCardProps {
    title: string,
    startDate: string,
    endDate: string,
    techStack: string[],
    description: string[],
    link: string
}

export function ProjectCard({title,startDate,endDate,techStack,description,link}:ProjectCardProps){
    return (
        <div className="bg-two px-6 py-2 flex flex-col gap-4 text-sm shadow shadow-gray">
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col font-sans gap-3 w-3/5'>
                    <h2 className="text-3xl font-bold  text-three underline flex flex-row gap-4">
                        {title} <Link href={link} target="_blank" className='text-sm self-center hover:cursor-pointer hover:text-lg py-2'><FaExternalLinkAlt /></Link>
                    </h2>
                    <p className='text-sm'>
                        <span className='font-bold underline'> Technologies:</span>  {techStack.join(', ')}
                    </p>
                </div>
                <p className='text-lg pt-2 font-sans'>
                    {startDate} - {endDate}
                </p>
            </div>
            <div>
                <ul className='marker:text-three list-disc text-sm flex flex-col gap-2'>
                    {
                        description.map((point,index) => {
                            return <li key={index}>{point}</li>
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}