import { FaExternalLinkAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

function College() {
  return (
    <div className="border-t-2 border-three mt-4 flex flex-col md:gap-3 gap-1 md:pb-4 pb-1 md:pt-8 pt-1">
      <p className="font-semibold md:text-[15px] text-[10px]">
        Birla Institute of Technology and Science, Pilani
      </p>
      <div className="flex flex-row justify-between">
        <p className="md:text-[13px] text-[8px]">B.E. Computer Science</p>
        <p className="md:text-[13px] text-[8px]">2020-2024</p>
      </div>
      <p className="md:text-[13px] text-[8px]">CGPA: 8.64</p>
    </div>
  );
}

function PersonalDetails() {
  return (
    <div className="flex flex-col w-full">
      <p className="text-center font-sans w-full font-bold md:text-lg text-md">
        Arya Veer Singh Chauhan
      </p>
      <div className="flex flex-col md:gap-2 md:pt-6 pt-2 md:pb-2 pb-0 break-all gap-0">
        <Link
          className="flex flex-row gap-2 text-xl h-fit items-center"
          href="mailto:aryaveersingh2003@gmail.com"
        >
          <MdOutlineMailOutline className="text-three md:text-xl text-sm" />
          <p className="text-white md:text-sm text-[10px] font-sans my-auto">
            aryaveersingh2003@gmail.com
          </p>
        </Link>
        <Link
          className="flex flex-row gap-2 text-xl h-fit items-center"
          href="tel:+91 8619151680"
        >
          <MdOutlinePhone className="text-three md:text-xl text-sm" />
          <p className="text-white md:text-sm text-[10px] font-sans my-auto">
            +91 8619151680
          </p>
        </Link>
        <div className="flex flex-row w-full justify-between">
          <Link
            className="flex flex-row gap-2 text-xl h-fit items-center"
            href="https://github.com/Arya-veer"
          >
            <FaGithub className="text-three md:text-xl text-sm" />
            <p className="text-white md:text-sm text-[10px] font-sans my-auto">
              Github
            </p>
          </Link>
          <Link
            className="flex flex-row gap-2 text-xl h-fit items-center"
            href="https://www.linkedin.com/in/arya-veer-singh-chauhan-428154210/"
          >
            <FaLinkedinIn className="text-three md:text-xl text-sm" />
            <p className="text-white md:text-sm text-[10px] font-sans my-auto">
              Linkedin
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function CurrentWork() {
  return (
    <div className="border-t-2 border-three mt-4 flex flex-col md:gap-0 w-full gap-1 md:pb-0 pb-1 pt-1">
      <p className="font-semibold md:text-[20px] text-[10px] mx-auto">
        Upcoming at D.E. Shaw Group
      </p>
      <div className="flex flex-row justify-between md:pt-2 pt-0">
        <p className="md:text-[15px] text-[8px]">MTS</p>
        <p className="md:text-[15px] text-[8px]">June 2025 - Present</p>
      </div>
    </div>
  );
}

function Leetcode() {
  return (
    <div className="border-t-2 border-three mt-4 flex flex-col md:gap-0 w-full gap-1 md:pb-0 pb-1 pt-1">
      <div className="font-semibold flex flex-row md:text-[20px] w-full items-center justify-evenly text-[10px] mx-auto p-2">
        <p>Leetcode Profile</p>
        <Link
          href="https://leetcode.com/u/aryaveersingh2003/"
          className="hover:text-three"
        >
          <FaExternalLinkAlt />
        </Link>
      </div>

      <div className="flex flex-col justify-between md:pt-2 pt-0">
        <p className="md:text-[15px] text-[8px]">Contest Rating: 2077</p>
        <p className="md:text-[15px] text-[8px]">Problems Solved: 651</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="rounded-2xl border-0 bg-gradient-to-r from-gr1a to-gr1b p-[1px] w-full h-full">
      <div className="rounded-2xl bg-two px-5 py-2  w-full flex flex-col">
        <div className="flex md:flex-col flex-row">
          <div className="md:w-full md:my-5 md:h-fit h-full my-auto md:pb-6 md:border-b-[1.5px]   border-three w-1/3">
            <Image
              src="/profile/propic.jpg"
              width={200}
              height={200}
              className="md:rounded-full my-auto h-fit object-contain mx-auto"
              alt="profile picture"
            />
          </div>
          <div className="flex flex-col md:pl-0 pl-3 w-full">
            <PersonalDetails />
            <div className="md:block hidden">
              <CurrentWork />
            </div>
            <div className="md:block hidden">
              <Leetcode />
            </div>
            <div className="md:block hidden">
              <College />
            </div>
          </div>
        </div>
        <div className="md:hidden block">
          <CurrentWork />
        </div>
        <div className="md:hidden block">
          <Leetcode />
        </div>
        <div className="md:hidden block">
          <College />
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="pt-8 h-full md:w-full justify-evenly">
      <Profile />
    </div>
  );
}
