"use client";

import Navbar from '@/components/navbar'
import { useState } from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";
import { notFound } from 'next/navigation';

const projects = [
    {
        "title": "Studydeck",
        "startDate": "July 2023",
        "endDate": "October 2023",
        "techStack": ["Django Rest","Python","Postgresql","Next.js","REST API","S3","Linux","Nginx"],
        "description": [
            "Studydeck is a one stop solution for all academic needs of BITS Pilani students. In BITS Pilani, students have to create their own timetable which is a cumbersome process. Also, after new google drive policy, the unlimited cloud storage for BITS Pilani students was reduced to 15 GB. More than 700 GB of study material was present on the google drive for students.",
            "After identifying all these problems, we came up with Studydeck. Firstly we devised an automated script which can download and populate our schema with timetable. Then we created REST APIs for students to use for creating and managing timetables. We also created a frontend application sourcing the REST APIs. We also allowed them to share their timetables with peers.",
            "For the study resources problem, we parsed all google drives using a BFS-based script, using multithreading to increase efficiency. We stored all the study resources in S3 bucket and also on LAN creating a CDN. We then created REST APIs and a Frontend application for students to access these resources. We also allowed them to upload the resources.",
            "We developed a backtracking-based algorithm for timetable autofill feature so that students can speed-up their timetable creation process. This we've done in C++ connected with python code using cython",
        ],
        "link": "https://studydeck.bits-sutechteam.org/"
    },
    {
        "title": "Project Onetap",
        "startDate": "July 2021",
        "endDate": "February 2022",
        "techStack": ["Django Rest","Python","MySQL","React.js","REST API", "Tkinter", "Multithreading","Asyncio","Symmetric encryption","Linux","Nginx"],
        "description": [
            "Project one tap is a multi-software system that aims to digitalize and organize the expenses of BITS Pilani students. The system has multiple features: Food Ordering and Delivery, Cab booking and pooling, Event and Merch signings etc.",
            "Food Ordering System: This system allows students to order food from various food outlets in the campus. Students have a mobile application - SU App, and outlets are installed with a tkinter-based desktop application. Students have a unique QR code which is scanned in the desktop application. Both are connected to a backend server providing REST APIS. A delivery app is also available for outlets to deliver food to students.",
            "Cab Booking and Pooling System: This system allows students to book cabs, pool cabs and also allows authorities to track them. Students use  SU App to book a cab and a vendor having Vendor app can see and take suitable actions. Also authorities have a web app to track all the cabs and to resolve any issues. All are connected to a backend server providing REST APIS to communicate among each other.",
            "Event and Merch Signing System: This system allows students to sign up for events and buy merchandise. Students use SU App to sign up for events and buy merchandise. The various socities and departments use a web app to add events and merchandise. Later they use a different application to track the entry of students for billing purposes.",
        ],
        "link": "https://su-bitspilani.org/"
    },
]


interface ProjectCardProps {
    title: string,
    startDate: string,
    endDate: string,
    techStack: string[],
    description: string[],
    link: string
}

function ProjectCard({title,startDate,endDate,techStack,description,link}:ProjectCardProps){
    return (
        <div className="bg-two px-6 py-2 flex flex-col gap-4 text-sm shadow shadow-gray">
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col font-sans gap-3'>
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

function Projects(){
    return (
        <div className="py-10 pr-3 pl-7 flex flex-col h-full gap-10">
            <div className="transparent pl-8 flex flex-col gap-2">
                <p className="text-4xl font-semibold font-mono text-three">PROJECTS</p>
            </div>
            <div className="flex flex-col gap-10">
                {
                    projects.map((project,index) => {
                        return <ProjectCard key={index} {...project} />
                    })
                }
            </div>
        </div>
    )
}

function WorkEx(){
    return (
        <div>
            Hello
        </div>
    )
}

function Blogs(){
    return (
        <div>
            Hello
        </div>
    )
}

function About(){
    return (
        <div className="py-10 pr-3 pl-7 flex flex-col h-full gap-10">
            <div className="transparent pl-8 flex flex-col gap-2">
                <p className="font-sans font-semibold text-lg">Hello World! My name is</p>
                <p className="text-4xl font-bold font-sans">Arya Veer Singh Chauhan</p>
                <p className="text-three font-semibold text-2xl">I am a full stack developer</p>
            </div>
            <div className="bg-two p-6  flex flex-col font-sans gap-3 ">
                <div>
                    <h2 className="text-lg font-bold  text-three underline">
                        About me
                    </h2>
                    <p className="text-sm">
                    I am a dedicated full stack developer with a passion for solving real-world problems. In July 2024, I will be joining Tata 1mg as a Software Developer, and I am eager to collaborate with the exceptional engineering team there to further enhance my skills and knowledge. My academic journey began with a strong foundation in Science and Mathematics during high school, where I achieved a JEE Advanced rank of 4741 and a BITSAT score of 391/450. My interest in coding sparked at an early age, starting with the creation of simple web pages and software.
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-bold  text-three underline">
                        College Experience
                    </h2>
                    <p className="text-sm">
                    I have completed my Bachelor of Engineering in Computer Science at BITS Pilani with a CGPA of 8.64. During my first year, I joined the Students Union Technical Team (SUTT), a group of passionate developers dedicated to enhancing the college experience for all BITS Pilani students through technology. Throughout my college years, I worked on various projects aimed at solving problems faced by BITS Pilani students. From my third year onwards, I began working part-time as a Software Development Engineer at the BITS Pilani Library, where I developed the official Library website and the BHG Gallery website. In my final semester, I completed a thesis under the guidance of Dr. Tanmay. My research focused on creating an innovative approach to address data collection and aggregation challenges in hospitals, which I successfully implemented using my technical expertise.
                    </p>
                </div>
                <div >
                    <h2 className="text-lg font-bold  text-three underline">
                        Tech Stack
                    </h2>
                    <p className="text-sm">
                        <span className="font-semibold">Programming Languages: </span>
                        Python, Java, C, C++, JavaScript, HTML, CSS, SQL
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold">Frameworks and Technologies </span>
                        Django, Next.js, React.js, Springboot, MySQL, PostgreSQL, MongoDB, Git, Docker, Kubernetes, Kafka, RabbitMQ, Git, 
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold">Methods and tools: </span>
                        Design patterns, Agile, Scrum, CI/CD, Microservices, RESTful APIs, GraphQL, Websockets, Server-side rendering, Postman, Github, 
                    </p>
                </div>
            </div>
        </div>
    )
}



export default function Page(){
    "use client"
    const [page,setPage] = useState('about');
    return (
        <div className='flex flex-col gap-0'>
            <Navbar page={page} setPage={setPage}/>
            <div>
            {
                page === 'about' 
                    ? 
                    <About /> 
                    : 
                    page === 'projects'
                    ?
                    <Projects />
                    :
                    page === 'workex'
                    ?
                    <WorkEx />
                    :
                    page === 'blogs'
                    ?
                    <Blogs />
                    :
                    page === 'contact'
                    ?
                    <div>
                        Contact
                    </div>
                    :
                    notFound()
            }
            </div>
        </div>
    )
}