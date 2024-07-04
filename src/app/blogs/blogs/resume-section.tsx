

export default function Resume({blog}:any){
    return (
        
        <div className="bg-two h-full w-full p-4 text-justify">
            <div className="flex flex-row justify-between">
                <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">{blog.category}</p>
                <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">{blog.date}</p>
            </div>
            <h1 className="md:text-3xl text-2xl w-full text-center text-three font-bold mt-2">
                {blog.title}
            </h1>
            <p className="md:text-md text-md text-white font-serif mt-3 p-2">
                This blog will be discussing about the resume segment of a technical interview. In this segment, interviewer generally asks you questions related to your personal projects or projects during internships. We will discuss about the correct way to explain the projects, what kind of questions you might be asked and how to prepare for this segment. In case you think that you need few tips on creating a good resume, then let me know. This blog is equally important for people who might not have done any major projects and do not want a project-specific interview. Let&apos;s get started!
            </p>
            <div className="p-2 flex flex-col gap-2">
                <div className="md:text-md text-md text-white font-serif">
                    <h2 className="md:text-xxl text-lg text-three font-bold">
                        How to explain your project
                    </h2>
                    <p className="my-2">
                        Generally, an Interviewer might ask you to explain one of your projects or internships in detail which might look relevant and interesting to interviewer. So, we should be prepared about all our projects and internships and should have an outline on what and how to explain in a clean and conise manner. Here are the few steps to explain your project:
                    </p>
                    <ul className="flex flex-col list-disc ml-4 list-inside gap-2">
                        <li><span className="text-three">Start with the introduction and motivation. </span>i.e. How did you start this project, what problem the project solves solves and what you created to solve the problem. It is important to keep this part as short as possible as this is not related to the technical theme of interview</li>
                        <li><span className="text-three">Explain what the project does in a technical manner. </span> This should include all the various software components and the technologies used to develop them. Do not use your business jargons and use terms which are universal otherwise it would create problem for interviewer to understand your project.</li>
                        <li><span className="text-three">Explain the engineering approach. </span>Always remember that your are first an engineer and your job is to solve problems by designing something to solve it. So include this in the explaination. Mention about some innovative ideas implemented during the development like a Advanced data structure designed or a different approach taken etc. </li>
                        <li><span className="text-three">Do not and I repeat Do not even say something which you do not know about! </span> During your explaination, you must have in-depth knowledge of all the technical terms which come out of your mouth. You can&apos;t escape by saying that this was not assigned to me. This point is equally important for your resume too.</li>
                        <li><span className="text-three">Explain with a diagram </span> Try to draw block diagram of everything you explain. This gives a technical feel to the interviewer. This can be a high-level architecture or a class diagram. Draw it roughly for a good impact.</li>
                    </ul>
                </div>
                <div className="md:text-md text-md text-white font-serif mt-6">
                    <h2 className="md:text-xxl text-lg text-three font-bold">
                        How to approach questionnarire of projects.
                    </h2>
                    <p className="my-2">
                        After you explain the project, the interviewer might ask you few questions about the project. Some of these questions are about the project itself emphasizing on one part that interviewer might not have understood or want to go deep into that part. Other questions can be about the general understanding of technologies and methodologies used. Some important question categories I have discussed below:
                    </p>
                    <ul className="flex flex-col list-disc ml-4 list-inside gap-2">
                        <li><span className="text-three">Questions on technologies </span>These kind of questions are about various technologies that you might have used in your projects. For eg. If you have a backend project developed using spring-boot, you might be asked basic spring boot questions like explain about beans or annotations. Or if your project is a react application, questions can be asked about how react works internally. So, you must have indepth knowledge of technologies which you use and to gain the knowledge, you should read and understand theoretical aspects of technologies used</li>
                        <li><span className="text-three">Questions on Approach </span>You might be asked about certain approach that you took in the project to solve a certain problem. And when you explain, there might be cross question about better approaches. Don&apos;t panic in such situations and try to think. Also, never be rigid that your approach was the only way, try to take hints and respond accordingly.</li>
                        <li><span className="text-three">Questions to extend or implement on-spot </span> In such questions, you either need to extend your project during the interview for some usecase or feature provided by interviewer or implement a certain part. This can be through UML diagram of your project or an ER-diagram of your database schema. Then you might be asked to write sql queries for accomplishing a certain task. These kind of questions are the most generally asked. These questions test your creativity and actual skill during interview. You must prepare in advance for such questions. </li>
                    </ul>
                </div>
                <div className="md:text-md text-md text-white font-serif mt-6">
                    <h2 className="md:text-xxl text-lg text-three font-bold">
                        How to prepare for resume section
                    </h2>
                    <p className="my-2">
                        Preparing for resume section is not a one day task. You need to prepare in advance and keep your projects in mind. Also there might be questions which you would not be able to answer even after preparation. This is a vast domain and thus takes time to prepare even if you have made all projects on your own. Here are few things to prepare for project interview:
                    </p>
                    <ul className="flex flex-col list-disc ml-4 list-inside gap-2">
                        <li><span className="text-three">Understand all your projects </span>Understand all your projects in and out and write down in a crisp manner, what would you speak in front of interviewer if asked about the same </li>
                        <li><span className="text-three">Read about the technologies used </span>You must go in depth of the theoretical aspects of technologies used. If you are using React, you should know what are states and what is diffing. In case you have used C++, then you must know about virtual tables and memory management issues. These basic theoretical aspects are very much necessary from interview perspective.</li>
                        <li><span className="text-three"> Practice some key aspects. </span>There are some key algorithms involved in every project. You should practice them at fullest. Also, in case your project uses Database, then you must practice writing sql queries on your schema. Apart from this, you should practice about some low level implementations of abstractions used in high level languages like HashMap or Stack</li>
                    </ul>
                </div>
            </div>
            <p className="md:text-md text-md text-white font-serif mt-8">
                This is all about the resume section of interviews. We have discussed about how to explain your projects, how to approach the questions and how to prepare for the same. I hope this blog was helpful to you. If you have any queries or suggestions, please let me know. I would be happy to help you. Also share this blog among your friends who are preparing for interviews. Next blog would be on the DSA section of interviews. Stay tuned!
            </p>
            <p className="md:text-md text-md text-white font-serif mt-8">
                Also I am developing a comments section and analytics for my own use so next blog might get delayed. I hope you understand. Thank you for reading. Have a great day!
            </p>
        </div>
    )
}