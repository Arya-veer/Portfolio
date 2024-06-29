import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";

export interface WorkExCardProps {
    title: string,
    startDate: string,
    endDate: string,
    organisation:string,
    techStack: string[],
    description: string[],
    type: string,
    links: string[][]
}

export function WorkExCard({title,startDate,endDate,organisation,techStack,description,type,links}:WorkExCardProps){
    return (
        <div className="bg-two px-6 py-2 flex flex-col gap-4 text-sm shadow shadow-gray">
            <div className='flex flex-row justify-between border-b-[1px] border-three pb-1'>
                <div className='flex flex-col font-sans gap-3 w-3/5'>
                    <h2 className="text-3xl font-bold  text-three underline flex flex-row gap-4">
                        {organisation}
                    </h2>
                    <p className='text-xl'>
                        {title}, {type}
                    </p>
                </div>
                <div className='flex flex-col h-fit'>
                    <p className='text-lg pt-2 font-sans'>
                        {startDate} - {endDate}
                    </p>
                    <div className='flex flex-col p-2 gap-2 h-full justify-between'>{   
                            links.map((arr,index) => {
                                return <Link key={index} href={arr[1]} target="_blank" className='flex flex-row gap-2'><FaExternalLinkAlt />{arr[0]}</Link>
                                
                            })
                        }
                    </div>
                </div>
            </div>
            <p>
                <span className='font-bold underline'> Technologies:</span>  {techStack.join(', ')}
            </p>
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
