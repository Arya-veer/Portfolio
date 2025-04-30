export default function Introduction({ blog }: any) {
  return (
    <div className="bg-two h-full w-full p-4 text-justify">
      <div className="flex flex-row justify-between">
        <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">
          {blog.category}
        </p>
        <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">
          {blog.date}
        </p>
      </div>
      <h1 className="md:text-3xl text-2xl w-full text-center text-three font-bold">
        {blog.title}
      </h1>
      <div className="mt-3 p-2">
        <p className="md:text-md text-md text-white font-serif">
          In this blog, we will discuss the introduction segment in an SDE
          technical interview round. We will discuss the importance of an
          introduction, what to include in the introduction, how to introduce
          yourself, and some tips to make your introduction more effective.
          Also, I will provide you with a template that you can use for your
          introduction in a technical interview. Let&apos;s get started.
        </p>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            Importance of Introduction
          </h2>
          <p className="md:text-md text-md text-white font-serif">
            The introduction is the first impression that you make on the
            interviewer. Students with all the knowledge and skills many times
            fail in interviews because of lack of preparation for this segment.
            It establishes yourself and your technical capabilities in front of
            the interviewer. Remember, the interviewer also has skills and more
            importantly experience in the field. So, the interviewer can judge
            you based on your introduction. A good introduction can set the tone
            for the rest of the interview. Also, the introduction sets the tone
            for your complete interview, i.e. would it be more based upon your
            projects or your problem solving skills or your ability to learn and
            adapt. Thus it is very important to know how to introduce yourself
            in a technical interview.
          </p>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            What to include in the introduction
          </h2>
          <div className="md:text-md text-md text-white font-serif flex flex-col gap-8">
            <p>
              Your introduction should be a summary of your professional
              background, your technical skills, and your experience in relevant
              domains. You should also mention any programming languages or
              technologies that you are proficient in. The introduction only has
              relevant details otherwise you would be wasting the time of your
              interviewer. Also, a structured introduction always leads to
              fluency and more attention from the interviewer. Your introduction
              must start with a greeting i.e. Good morning sir/ma&apos;am or
              Hello [Name of the interviewer if already introduced]. Let&apos;s
              get started one by one with the sections:
            </p>
            <div className="w-full px-4 flex flex-col gap-6">
              <p>
                <span className="underline mx-1 text-three font-bold">
                  Personal Details:
                </span>
                Your introduction must start with your details like your name,
                your college name, your branch, and your year of study. You can
                also mention your GPA if it is good. You can also flaunt your
                academic achievements in college like your college rank or
                topper in any course etc.
              </p>
              <p>
                <span className="underline mx-1 text-three font-bold">
                  Work Experience:
                </span>
                If you have done internships, part-time or freelance, you should
                mention it in your introduction. You can mention the company
                name, your role, and the projects that you worked on. You can
                also mention the technologies that you used in your projects.
                Keep it short and don&apos;t include details of everything
                unless asked. Try to include only one or two internships which
                are relevant to the job profile you are applying for. To keep it
                short - last summer, I interned at [Company Name] as a [Role]
                and worked on [Project Name] using [Technologies used].
              </p>
              <p>
                <span className="underline mx-1 text-three font-bold">
                  Projects:
                </span>
                If you have worked on any projects(which you should have), then
                mention them in your introduction. You can give a brief
                introduction about any one project and the technologies that you
                used in that project. For other projects, you can just mention
                them. Impress the interviewer with the complexity of the project
                and the engineering mind applied to the project. For ex, if you
                used some advanced algorithm then mention it in the
                introduction.
              </p>
              <p>
                <span className="underline mx-1 text-three font-bold">
                  Skills:
                </span>
                You should mention the programming languages and technologies
                that you are proficient in. Also, mention about your specific
                profile like you are a backend developer or a frontend
                developer. Also, mention your competitive programming skills and
                your problem-solving skills. This would help the interviewer to
                decide what kind of questions to ask you for the rest of the
                interview.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            What to avoid in the introduction
          </h2>
          <p className="md:text-md text-md text-white font-serif flex flex-col gap-8">
            Do not unnecessarily talk about your hobbies or personal details.
            Don&apos;t be arrogant no matter how much you know or have achieved.
            Also, do not show hesitation while introducing yourself. Avoid
            projects and internships irrelevant to the job profile you are
            applying for. Keep it short and to the point.
          </p>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            A sample introduction based on above points
          </h2>
          <div className="p-2">
            <p className="md:text-md text-md text-white font-serif flex flex-col gap-8 p-3 text-justify border-[1px] border-three rounded-xl">
              Good morning, Sir, My name is Arya Veer Singh Chauhan and I am a
              4th Year student at BITS Pilani pursuing a B.E. in Computer
              Science. My CGPA is 8.64 and I was the class topper of the
              Object-oriented programming course. This summer, I interned as a
              Software Developer at Standard Chartered GBS where I was exposed
              to industry-level development. There I worked on a proof of
              concept application for internal use using React.js and Spring
              Boot. In college, I was exposed to software development early on
              and to apply myself, I created multiple projects. One of my
              projects was Studydeck which was a cross-platform application
              designed and developed to help students in their studies. I
              utilised Django Rest Framework for the backend and Next.js for the
              front end. I worked as the lead developer in the project.
              Interestingly, I engineered a backtracking-based algorithm to
              autofill timetables for students. This project currently has 1000+
              active users. My other influential projects are Project Onetap and
              InterBITS software systems. I have created some academic projects
              too like the ERPLAG Compiler in C, a School Management System in
              Java etc. I am proficient in Python, C++, Java, and JavaScript and
              have a good understanding of Data Structures and Algorithms. I
              love to solve problems using these skills and apply my theoretical
              knowledge to practical problems.
            </p>
          </div>
        </div>
        <div>
          <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
            Final tips and conclusion
          </h2>
          <p className="md:text-md text-md text-white font-serif flex flex-col gap-8">
            Remember to practice your introduction before the interview. You
            should be able to deliver your introduction confidently and
            fluently. You can practice in front of a mirror or with a friend
            Remember, the introduction is the first impression that you make on
            the interviewer. So, make sure that you make a good impression with
            your introduction. In the next blog, we will start with Interview
            questions related to your projects or internships. Feel free to
            comment about this blog on my email and do share it with your
            friends. Stay tuned for the next one!
          </p>
        </div>
      </div>
    </div>
  );
}
