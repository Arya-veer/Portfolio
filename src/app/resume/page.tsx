export default function Resume() {
  return (
    <div className="w-full h-screen py-10">
      <div className="mx-auto bg-two rounded-xl h-full md:w-1/2 w-full">
        <iframe
          src="/resume/resume.pdf#toolbar=0&navpanes=0"
          className="md:w-full w-screen h-screen my-auto mx-auto"
        ></iframe>
      </div>
    </div>
  );
}
