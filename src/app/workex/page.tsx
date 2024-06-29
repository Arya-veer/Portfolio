import {WorkExCard} from "./card";
import {WORKEXES} from "./data";

export default function WorkEx(){
    return (
        <div className="py-10 pr-3 pl-7 flex flex-col h-full gap-10">
            <div className="transparent pl-8 flex flex-col gap-2">
                <p className="text-4xl font-semibold font-mono text-three">WORK EXPERIENCE</p>
            </div>
            <div className="flex flex-col gap-10">
                {
                    WORKEXES.map((workex,index) => {
                        return <WorkExCard key={index} {...workex} />
                    })
                }
            </div>
        </div>
    )
}