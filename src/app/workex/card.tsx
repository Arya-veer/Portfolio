import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface WorkExCardProps {
  title: string;
  startDate: string;
  endDate: string;
  organisation: string;
  techStack: string[];
  description: string[];
  type: string;
  links: string[][];
}

export function WorkExCard({
  title,
  startDate,
  endDate,
  organisation,
  techStack,
  description,
  type,
  links,
}: WorkExCardProps) {
  return (
    <div className="bg-two md:px-3 px-2 py-2 flex flex-col gap-4 text-sm shadow shadow-gray">
      <div className="flex md:flex-row flex-col justify-between border-b-[1px] border-three pb-1 w-full">
        <div className="flex flex-col font-sans gap-3 md:w-3/5 w-full">
          <h2 className="md:text-3xl text-2xl font-bold  text-three underline flex flex-row gap-4">
            {organisation}
          </h2>
          <p className="md:text-xl text-lg text-white">
            {title}, {type}
          </p>
        </div>
        <div className="flex flex-col h-fit">
          <p className="text-white md:text-lg text-md pt-2 font-sans">
            {startDate} - {endDate}
          </p>
          <div className="text-white flex md:flex-col flex-row p-2 gap-2 h-full justify-between md:text-md text-sm">
            {links.map((arr, index) => {
              return (
                <Link
                  key={index}
                  href={arr[1]}
                  target="_blank"
                  className="flex flex-row gap-2 hover:underline"
                >
                  <FaExternalLinkAlt className="text-sm md:text-md" />
                  {arr[0]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <p>
        <span className="text-white font-bold underline md:text-md md:text-[14px] text-[13px]">
          {" "}
          Technologies:
        </span>{" "}
        {techStack.join(", ")}
      </p>
      <div>
        <ul className="marker:text-three list-inside list-disc md:text-[14px] text-[12px] flex flex-col md:gap-2">
          {description.map((point, index) => {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
