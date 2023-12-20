import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";


function Profile() {
  return (
    <div className="mt-5">
      <div className=" flex md:flex-row flex-col justify-between md:gap-5 gap-2 px-2">
        <Image
          src="/profile-super.png"
          alt="Picture of the author"
          width={600}
          height={600}
          className="hidden md:block"
        />
        <div className="flex flex-col justify-between">
          <div className=" border-2 border-amber-300 h-fit w-fit rounded-[20px] flex flex-col text-2xl font-mono p-2 text-justify">
            <div>
              My name is <span className="text-3xl underline">Arya Veer</span>,
              and I am a 4th year Computer Science student at Birla Institute of
              Technology and Science, Pilani. I am a full-stack developer, and I
              love to build things.
            </div>
            <div>
              <span className="underline underline-offset-1">My motto is:</span>{" "}
              Give me a problem, and I will solve it, And I will not stop until I
              do it perfectly.
            </div>
            <div className="mt-4 flex md:flex-row flex-col text-2xl justify-between">
              <p>Want to know more about me?</p>
              <Link href="#skills" className="underline underline-offset-1 border-white border-2 rounded p-3 bg-gradient-to-r"> Resume </Link>
              <Link href="/about" className="underline underline-offset-1 border-white border-2 rounded p-3 bg-gradient-to-r"> Github </Link>
              <Link href="/about" className="underline underline-offset-1 border-white border-2 rounded p-3 bg-gradient-to-r"> Linkedin </Link>
            </div>
          </div>
          <div>
            <h1 className="text-6xl font-sans text-center font-bold items-center text-center">
              Coding 🧑‍💻 is my leisure activity.  
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}


function Landing(){
  return (
    <div className="md:min-h-screen bg-gradient-to-b from-zinc-950 to-indigo-950 w-full px-5 snap-start pb-4" >
      <h1 className="text-8xl mx-auto text-center font-bold">
        Hello World! 😂😅
      </h1>
      <Profile />
      
    </div>
  )
}

function Skills(){

  const skills = [
    {
      "type":"Backend",
      "skills":[
        {
          "name":"Django",
          "image":"/django.png"
        },
        {
          "name":"PostgreSQL",
          "image":"/postgres.png"
        },
        {
          "name":"Spring Boot",
          "image":"/spring.jpg"
        },
        {
          "name":"Mysql",
          "image":"/mysql.jpg"
        }
      ]
    },
    {
      "type":"Languages",
      "skills":[
        {
          "name":"Python",
          "image":"/python.png"
        },
        {
          "name":"Java",
          "image":"/java.png"
        },
        {
          "name":"C++",
          "image":"/cpp.png"
        },
        {
          "name":"Javascript",
          "image":"/js.png"
        }
      ]
    },
    {
      "type":"Frontend",
      "skills":[
        {
          "name":"React",
          "image":"/react.png"
        },
        {
          "name":"Material UI",
          "image":"/mui.png"
        },
        {
          "name":"Next.js",
          "image":"/next.png"
        },
        {
          "name":"Tailwind",
          "image":"/twnd.png"
        }
      ]
    },
    {
      "type":"Developer Tools",
      "skills":[
        {
          "name":"Git",
          "image":"/git.png"
        },
        {
          "name":"Postman",
          "image":"/postman.png"
        },
        {
          "name":"Nginx",
          "image":"/nginx.png"
        },
        {
          "name":"Linux",
          "image":"/linux.png"
        }
      ]
    }
  ]


  return (
    // These are all the technical About I have acquired over the years.
    <div className="md:min-h-screen bg-gradient-to-b from-indigo-950 to-amber-950 w-full p-6 snap-center" id="skills">
      <h1 className="text-8xl font-sans text-center font-bold">
        Skills 🤖⌨️
      </h1>
      <p className="mt-4 text-lg font-serif">
        I am a full stack developer, starting my career as a backend developer and then learning frontend development. I have worked with a lot of technologies, and I am always open to learning new things.
        I have recently depeloved an interest in Cybersecurity and have started learning about it. I have also tried my hands on NLP and AI, applied them to some projects, and I am currently learning more about them.
      </p>
      <div className="flex flex-row flex-wrap justify-between gap-2">
        {
          skills.map((skill, index) => (
            <div key={index} className="flex flex-col h-fit md:w-2/5 justify-between mx-auto mt-2">
              <h1 className="text-4xl font-bold mx-auto mt-0">{skill.type}</h1>
              <div className="flex flex-row flex-wrap justify-between mt-4 items-end">
                {
                  skill.skills.map((dd, idx) => (
                    <div key={idx} className="flex flex-col justify-center bg-white p-2">
                      <Image
                        src={dd.image}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        className=""
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
      <div className="mt-4 text-4xl font-bold text-amber-300">
        I believe in mastery 🥇🤟. So I always learn everything in depth rather than jumping from one thing to another.
      </div>
    </div>
  )
}

class Project {
  name: string;
  description: string;
  image: string;
  link: string;

  constructor(name: string, description: string, image: string, link: string) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}

function ProjectCard({project}: {project: Project}){
  return (
    <Link className="border-amber-300 rounded-2xl border-2 shadow shadow-lg h-full m-auto" href={project.link}>
      <h1 className="text-3xl font-bold text-amber-300 bg-tranparent">
        {project.name}
      </h1>
      <Image
        src={project.image}
        alt={project.name}
        width={140}
        height={140}
        className="mx-auto rounded-full"
      />
      <p className="text-md font-serif bg-black border-0 rounded-b-2xl px-1 text-justify whitespace">
        {project.description}
      </p>
    </Link>
  )
}


function Projects(){

  const projects = [
    {
      "name":"Project One Tap",
      "description":"Having more than 5000 active users, Project One Tap enables students to order food from various food outlets from a single app. This project consists of an App for students, a webserver for handling requests, and a desktop application for food outlets.\nI have worked as a full-stack developer in this project developing the Desktop application using C++ as well as the backend using Django.",
      "image":"/SUAPP.png",
      "link":"https://play.google.com/store/apps/details?id=org.subitspilani.bits_su_app&pli=1"
    },
    {
      "name":"Studydeck",
      "description":"Studydeck is a one stop solution for all academic needs of BITS Pilani Students. It has 1000+ video lectures streaming, question papers, reading material, and much more. It also helps students to create their academic timetables and setting reminder for classes.\nI have worked as a full-stack developer in this project developing the backend using Django and frontend using Nextjs.",
      "image":"/SUTDYDECK.png",
      "link":"https://studydeck.bits-sutechteam.org/"
    },
    {
      "name":"Library Website",
      "description":"Created the official website for Library of BITS Pilani. The website allows users to scan through catalogue, search for resources, reserve spaces, and overall help them in their academic endeavours.\nI worked as a full-stack developer in this project developing the backend using Django and frontend using Nextjs. This project is now being expanded with an addition of chatbot for users to interact with.",
      "image":"/lib.png",
      "link":"https://library.bits-pilani.ac.in/"
    },
    {
      "name":"MeDiKIT",
      "description":"Working under the guidance of Dr. Tanmay Mahapatra on a funded project by ICMR for Tech in Health, I developed a web app for collection of medical data for research purposes. The first phase of project is over and the application is currently used.\nI worked as a full-stack developer in this project developing the backend using Django and frontend using React.",
      "link":"",
      "image":"/icmr.jpg"
    }
  ]

  const otherProjects = [
    {
      "name":"ERPLAG Compiler",
      "description":"Developed a compiler for ERPLAG language using C integrating Lexer, Parser, Semantic Analyzer, and Code Generator.",
    },
    {
      "name":"School Management System using Java",
      "description":"Developed a School Management System using Java Swing and MySQL connecting both using JDBC.",
    },
    {
      "name":"BITSMart",
      "description":"Developed backend for an app students to buy and sell products within the campus. Integrated chatting system.",
    },
    {
      "name":"Best Lecture Identifier using AI",
      "description":"The system uses NLP to identify the best lecture. Calculates TF-IDF score of documents and uses cosine similarity to find the best lecture.",
    }
    
    
  ]

  return(
    <div className="md:min-h-screen bg-gradient-to-b from-amber-950 to-fuchsia-950 w-full p-6 snap-end" id="projects">
      <h1 className="text-8xl font-sans text-center font-bold">
        Projects💻📱💪
      </h1>
      <p className="mt-4 text-lg font-serif">
        After coming to college, I joined Students&apos; Union Technical Team 
        which is a Student Run organization for solving problems faced by students using technologies.
        I have worked as a Full Stack Developer in SUTT for 2 years and later on leading the team for 1 year.
        I have also worked on some personal as well as academic projects.
      </p>
      <div className="mt-6 flex md:flex-row flex-col justify-between gap-4">
        {
          projects.map((project, index) => (
            <div key={index} className="flex flex-col justify-between h-fit text-center mx-auto">
              <ProjectCard project={project}/>
            </div>
          ))
        }
      </div>
      <p className="text-slate-300 mt-2 text-lg">
        There are numerous other projects I have done. These are: 
      </p>
      <div className="flex flex-col  justify-between mt-2">
        {
          otherProjects.map((project, index) => (
            <div key={index} className="flex flex-row">
              <div className="text-lg text-amber-300">
                {index+1}. {project.name} - 
              </div>
              <div className="text-md">
                {project.description}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

function WorkEx(){
  return (
    <div className="md:min-h-screen bg-gradient-to-b from-fuchsia-950 to-indigo-950 w-full p-6 snap-end" id="workex">
      <h1 className="text-8xl font-sans text-center font-bold">
        Work Experience
      </h1>
      
    </div>
  )
}

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory flex flex-col">
        <Landing />
        <Skills />
        <Projects />
        <WorkEx />
      </div>
    </>
  );
}
