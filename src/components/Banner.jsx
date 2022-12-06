import BtnLinkSmall from "./Btn";

import {GithubLogo, InstagramLogo, LinkedinLogo, CaretDown } from "phosphor-react";
import { useEffect, useState } from "react";

export default function Banner(){
    const [scrollDown, setscrollDown] = useState()
    const [timer, setTimer] = useState()
    useEffect(()=>{
        setscrollDown(document.querySelector("#test"))
    })
    setInterval(()=>{
        setTimer(new Date().toGMTString())
    }, 1000)
    return (
        <div className="banner min-h-[600px] w-100 bg-stone-900 flex flex-col items-center justify-center relative bg-banner bg-cover bg-no-repeat bg-fixed">
            <span className="text-yellow-500 absolute top-7 right-9 font-mono">
                {
                    timer
                }
            </span>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-16">
                    <div className="w-32 h-32 rounded-full mb-10 bg-gradient-to-r p-[2px] from-blue-500 to-pink-600 shadow-shadow-1">
                        <img src="https://github.com/rom013.png" alt="rom013" className="w-full object-cover rounded-full"/>
                    </div>
                    <h1 className="text-white font-Orbitron font-black text-5xl">Rômullo Melo</h1>
                    <p className="text-white">Desenvolvedor front end</p>
                </div>
                
                <div className="flex justify-between px-6 mb-10 gap-6">
                    <BtnLinkSmall nome={InstagramLogo}/>
                    <BtnLinkSmall nome={LinkedinLogo}/>
                    <BtnLinkSmall nome={GithubLogo}/>
                </div>

                {/* <Btn text="PROJETOS"/> */}

                <button type="button" onClick={()=>{
                    scrollDown.scrollIntoView({behavior: "smooth"})
                }} className="btn-nav-down animate-bounce hover:animate-none">
                    <CaretDown/>
                </button>
            </div>
        </div>
    )
}