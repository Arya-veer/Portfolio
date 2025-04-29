"use client"

import { FaCopy } from "react-icons/fa";
import { useState } from "react";

export default function MultilineCodeSnippet({ code }: { code: string }) {
    "use client"
    return (
        <div className='bg-black border border-white p-4 rounded-lg m-2 flex flex-row justify-between'>
            <pre className='text-white font-mono text-sm whitespace-pre-wrap w-9/10'>
                {
                    code.split(";").map((line,idx)=>{
                        return (
                            <p key={idx}>{line}</p>
                        );
                    })
                }
            </pre>
            <FaCopy className="hover:cursor-pointer" onClick={()=>{navigator.clipboard.writeText(code)}}/>
        </div>
    );
}