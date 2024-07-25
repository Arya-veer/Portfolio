export default function DSA({blog}:any){
    return (
        <div className="bg-two h-full w-full p-4 text-justify">
            <div className="flex flex-row justify-between">

                <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">{blog.category}</p>
                <p className="md:text-lg text-md font-semibold font-mono text-[#ffba92] w-fit">{blog.date}</p>
            </div>
            <h1 className="md:text-3xl text-2xl w-full text-center text-three font-bold">
                {blog.title}
            </h1>
            <div className="mt-3 p-2">
                <p className="md:text-md text-md text-white font-serif">
                    This blog discusses in depth about the DSA section of any technical interview. This section is what most of the students prepare for the most and rightly so because the technical interviews at an early stage are very much decided by DSA. It is one of the very necessary sections to prepare for. In this blog, we will discuss about the importance of DSA, what kind of questions are asked in this section and how to prepare for the same. Let&apos;s get started!
                </p>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        Importance of DSA in technical interviews
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        This is not a less-known fact that DSA is very very important part of any technical interview. Through this section, interviewer judges the candidate on a number of parameters like problem-solving skills, coding skills and building upon ideas. Also, one is tested to twist around the solutions previously known. This section is not enough for anyone to ace an interview but very necessary one to clear any round. 
                    </p>
                </div>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        How to prepare for DSA
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        There are plenty of roadmaps available on the internet to prepare for DSA. Also there are many playlists on youtube to learn and apply. One thing which many people miss during their preparation is although they solve a lot of questions but they are not able to solve similar questions during their interview. This problem is caused by a simple factor of not revising the questions. There are some standard questions which either directly or indirectly are asked in the interviews. You should prepare them well. Also, you should practice on a whiteboard or paper as in the interview, you might not have the luxury of an IDE. The best way to start DSA preparation if you are comfortable with a programming language is to start with <a href="https://www.interviewbit.com/" target="_blank">Interview bit</a> and then once you have completed the DSA roadmap there, you can move to striver 450 DSA sheet. Meanwhile, one should solve as many questions as possible on leetcode. 
                    </p>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        Last week preparations
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        Most of you have followed some roadmap to prepare DSA. Now, since you are at the end of your preparation, one dangling question is whether the number of questions solved are enough or not. This is a very common doubt many students face. I have an interesting take on this. There are 3000+ questions on leetcode and one can never solve them all. But, since the season is approaching in next 20 days, one can start revising the concepts and questions already solved. This will help you in remembering the concepts and also the approach to solve the questions. Also, you can start solving the questions which you have marked as important or difficult. This will help you in gaining confidence and also in solving the questions which you were not able to solve earlier.
                    </p>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        How to answer DSA questions during interview
                    </h2>
                    <p className="md:text-md text-md text-white font-serif">
                        Interviewer asks you a question and you start solving it. This is a common mistake everyone makes. The simple process to solve question during interview involves few steps:
                    </p>
                    <ul className="flex flex-col list-disc ml-4 list-inside gap-2 font-serif">
                        <li><span className="font-bold">Understand the question: </span>You are not in a hurry, take your time to understand the question, clear any doubt you have however small. Solving the misunderstood question can lead to your straightaway faliure.  </li>
                        <li><span className="font-bold">Test cases and constraints formation: </span>Create your own test case to judge whether you have understood the question correctly. Ask the interviewer if you are unable. Also make sure to underline any constraints on input</li>
                        <li><span className="font-bold">Discuss the approach: </span>Start with the brute force solution for the problem. Discuss the brute force approach with the interviewer and also add the space and time complexity. Do not wait for interviewer to ask for optimization and take the lead that the approach can be optimised. Take your time for a better approach and explain it too. The interviewer might discuss few aspects of the algorithm with you and this leads to a healthy discussion. Only start writing once the interviewer is satisfied with the approach</li>
                        <li><span className="font-bold">Write good code: </span>Once you have discussed the approach, start coding. Do not forget to write the base cases and edge cases. Also the code should be readable and the variable names and function names must make sense. Practice for this part as most of us are not habitual for this</li>
                        <li><span className="font-bold">Discuss the code </span>Explain the interviewer about each step you write in the code i.e. what you are writing and what this would do.</li>
                        <li><span className="font-bold">Test the code: </span>Once you have written the code, test it on the test cases you have created. Also, you can dry run the code on a paper to check for any logical errors</li>
                    </ul>
                </div>
                <div>
                    <h2 className="md:text-xxl text-lg text-three font-bold mt-4">
                        Final tips and conclusion
                    </h2>
                    <p className="md:text-md text-md text-white font-serif flex flex-col gap-8">
                        DSA section is the most important aspect of any technical interview. You should be well prepared to appear in one. Do not underestimate the power of DSA sheets prepared by various people. They are very helpful in preparing for the interviews. Also, do not forget to revise the concepts and questions you have solved. Also solve the question during interview as I have explained. This will increase your chances of getting selected. All the best for your interviews!

                        So that was all about DSA section. I have joined Tata 1mg as an SDE 1 on 11th July and thus could not find time to write the blogs. I apologize for the delay and will try to be regular from now on. If you have any queries or suggestions, please let me know in comments. I would be happy to help you. Also share this blog among your friends who are preparing for interviews. Next blog onwards, I am thinking to start a computer science fundamentals series for technical interview. Stay tuned!
                    </p>
                    <p className="font-serif">
                        <span className="text-three mx-2">
                            Important! 
                        </span>
                        I am thinking to start a mock interview series for all the students. How you feel about the same please let me know in comments. I will start the series if I get a good response.
                    </p>
                </div>
            </div>
        </div>
    )
}