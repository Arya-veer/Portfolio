"use client";

import Navbar from '@/components/navbar'
import { useState } from 'react'
import Projects from '@/components/project'
import WorkEx from '@/components/workex'
import About from '@/components/about'
import { notFound } from 'next/navigation';


function Blogs(){
    return (
        <div>
            Hello
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