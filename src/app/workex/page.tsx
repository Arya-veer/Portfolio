import { WorkExCard } from "./card";
import { WORKEXES } from "./data";

export default function WorkEx() {
  return (
    <div className="py-10 md:pr-3 px-7 md:pl-7 flex flex-col h-full gap-10">
      <div className="transparent md:pl-8 flex flex-col gap-2">
        <p className="text-4xl md:text-left text-center font-semibold font-mono text-three">
          WORK EXPERIENCE
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {WORKEXES.map((workex, index) => {
          return <WorkExCard key={index} {...workex} />;
        })}
      </div>
    </div>
  );
}
