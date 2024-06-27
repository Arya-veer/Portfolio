import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";


const WORKEXES = [
    {
        "title": "Software Developer",
        "startDate": "August 2022",
        "endDate": "June 2024",
        "techStack": ["Django Rest","Python","Postgresql","Next.js","REST API","React.js","Pandas","Nginx","Framework","Git"],
        "description": [
            "Developed Official Website of BITS Pilani Library migrating data from old website to new website. Also included a CMS for the library staff to update the website without changes in code.",
            "Integrated features like Space booking in library, Requesting for books and articles, Online catalogue, Chatbot, and a unique Three search feature for universal search of books, research papers etc.",
            "Used the cache feature of Next.js to reduce the load time of the webpages and integrated it with django to revalidate the cache only when the data is changed.",
            "Also developed BHG Gallery website for the library to showcase the art and culture of BITS Pilani. Integrated components like heritage books, videos and images.",
        ],
        "organisation": "Library BITS Pilani",
        "type":"Part-time",
        "links":[
            ["Library Website","https://library.bits-pilani.ac.in/"],
            ["BHG Gallery","https://library.bits-pilani.ac.in/bhg"],
        ],
    },
    {
        "title": "Software Developer",
        "startDate": "May 2023",
        "endDate": "July 2023",
        "techStack": ["Spring boot","Java","Oracle DB","React.js","REST API","Scrum","JUnit","Mockito","Postman"],
        "description": [
            "As a Summer Internship Oppurtunity, engineered a proof-of-concept software reducing manual work of lookup of 150+ fields in account opening flow.",
            "Also enhanced the core functionality of utility library to compare two XML files using Java and tested the same using JUnit and mockito by creating robust test cases.",
            "Pipelined API development, documentation and testing through postman collections automated with newman and python subprocesses.",
        ],
        "organisation": "Standard Chartered GBS",
        "type":"Internship",
        "links": []

    },
]

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

function WorkExCard({title,startDate,endDate,organisation,techStack,description,type,links}:WorkExCardProps){
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

export default function WorkEx(){
    return (
        <div className="py-10 pr-3 pl-7 flex flex-col h-full gap-10">
            <div className="transparent pl-8 flex flex-col gap-2">
                <p className="text-4xl font-semibold font-mono text-three">WORK EXPERIENCE</p>
            </div>
            <div className="flex flex-col gap-10">
                {
                    WORKEXES.map((workex,index) => {
                        return <WorkExCard key={index} {...workex} />
                    })
                }
            </div>
        </div>
    )
}