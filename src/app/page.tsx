"use client";

import Navbar from '@/components/navbar'
import { useState } from 'react'

function Projects(){
    return (
        <div>
            Hello
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
                    null
            }
            </div>
        </div>
    )
}