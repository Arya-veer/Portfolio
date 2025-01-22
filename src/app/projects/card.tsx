import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    startDate: string;
    endDate: string;
    techStack: string[];
    description: string[];
    link: string;
}

export function ProjectCard({
    title,
    startDate,
    endDate,
    techStack,
    description,
    link,
}: ProjectCardProps) {
    return (
        <div className='bg-two md:px-3 px-2 py-2 flex flex-col gap-4 text-sm shadow shadow-gray'>
            <div className='flex md:flex-row flex-col justify-between border-b-[1px] border-three pb-1 w-full'>
                <div className='flex flex-col font-sans gap-3 md:w-3/5 w-full'>
                    <h2 className='md:text-3xl text-2xl font-bold  text-three underline flex flex-row gap-4'>
                        {title}{" "}
                        <Link
                            href={link}
                            target='_blank'
                            className='text-sm self-center hover:cursor-pointer hover:text-lg py-2'
                        >
                            <FaExternalLinkAlt />
                        </Link>
                    </h2>
                    <p className='md:text-sm text-[12px]'>
                        <span className='font-bold underline text-white'>
                            {" "}
                            Technologies:
                        </span>{" "}
                        {techStack.join(", ")}
                    </p>
                </div>
                <p className='md:text-lg text-md pt-2 font-sans'>
                    {startDate} - {endDate}
                </p>
            </div>
            <div>
                <ul className='marker:text-three list-disc list-inside md:text-sm text-[12px] flex flex-col gap-2'>
                    {description.map((point, index) => {
                        return <li key={index}>{point}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}
