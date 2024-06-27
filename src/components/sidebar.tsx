import Image from 'next/image'

import Link from 'next/link'

import { MdOutlineMailOutline,MdOutlinePhone } from "react-icons/md";
import { FaLinkedinIn,FaGithub, } from "react-icons/fa";


function College(){
    return(
        <div className='border-t-2 border-three mt-4 flex flex-col gap-3 pb-4 pt-8 break-all'>
            <p className='font-semibold text-[15px]'>
                Birla Institute of Technology and Science, Pilani
            </p>
            <div className='flex flex-row justify-between'>
                <p className='text-[13px]'>
                    B.E. Computer Science
                </p>
                <p className='text-[13px]'>
                    2020-2024
                </p>
            </div>
            <p className='text-[13px]'>
                CGPA: 8.64
            </p>
        </div>
    )
}


function PersonalDetails(){
    return (
        <>
            <p className='text-center font-sans font-bold text-lg'>
                    Arya veer singh chauhan
            </p>
            <div className='flex flex-col gap-4 pt-6 pb-2 break-all'>
                <Link className='flex flex-row gap-2 text-xl h-fit items-center' href="mailto:aryaveersingh2003@gmail.com">
                    <MdOutlineMailOutline className='text-three text-xl'/>
                    <p className='text-white text-sm font-sans my-auto'>aryaveersingh2003@gmail.com</p>
                </Link>
                <Link className='flex flex-row gap-2 text-xl h-fit items-center' href="tel:+91 8619151680">
                    <MdOutlinePhone className='text-three'/>
                    <p className='text-white text-sm font-sans my-auto'>+91 8619151680</p>
                </Link>
                <Link className='flex flex-row gap-2 text-xl h-fit items-center' href="https://github.com/Arya-veer">
                    <FaGithub className='text-three'/>
                    <p className='text-white text-sm font-sans my-auto'>Github</p>
                </Link>
                <Link className='flex flex-row gap-2 text-xl h-fit items-center' href="https://www.linkedin.com/in/arya-veer-singh-chauhan-428154210/">
                    <FaLinkedinIn className='text-three'/>
                    <p className='text-white text-sm font-sans my-auto'>Linkedin</p>
                </Link>
            </div>
        </>
    )
}


function Profile(){
    return (
        <div className="rounded-2xl border-0 bg-gradient-to-r from-gr1a to-gr1b p-[1px] w-full h-full">
            <div className='rounded-2xl bg-two px-5 py-2  border-three w-full'>
                <div className='w-full my-5 pb-6 border-b-[1.5px] border-three'>
                    <Image src='/profile/propic.jpg' width={200} height={200} className='rounded-full object-contain mx-auto' alt='profile picture' />
                </div>
                <PersonalDetails/>

                <College/>
            </div>
        </div>
    )
}


export default function Sidebar(){
    return (
        <div className='pt-8 flex flex-col h-full justify-evenly'>
            <Profile/>
        </div>
    )
}