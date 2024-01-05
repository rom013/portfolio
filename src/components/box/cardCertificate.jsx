import { ArrowSquareOut } from "@phosphor-icons/react";
import { twMerge } from "tailwind-merge";

export default function CardCertificate({ title, description, linkConfirm, nameLink, time }) {
    
    const classNameRandom = () => {
        const active = parseInt(Math.random()*2)
        return active && "after:w-[90%] after:h-[90%] after:rounded-full after:block after:bg-zinc-200 border-2 border-zinc-200 !bg-white"
    }

    return (
        <div 
            className="flex gap-6"    
        >
            <div 
                className={`${twMerge("min-w-16 min-h-16 h-16 rounded-full bg-zinc-200 flex justify-center items-center", classNameRandom())}`} 
            />
            <div
                className="flex flex-col gap-4"
            >
                <div  className="flex flex-col">
                    <strong
                        className="font-sora text-2xl font-bold text-zinc-900"
                    >
                        {title}
                    </strong>
                    <time className="text-sm text-zinc-400">
                        { time }
                    </time>
                </div>
                <p
                    className="text-zinc-600 text-base font-Lato"
                >
                    {description}
                </p>

                {
                    linkConfirm &&
                    <a target="_blank" href={linkConfirm} className="flex gap-2 items-center w-fit hover:underline">
                        {nameLink} <ArrowSquareOut />
                    </a>
                }
            </div>
        </div>
    )
}