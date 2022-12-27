import BtnLinkSmall from "./Btn";

import {GithubLogo, InstagramLogo, LinkedinLogo, CaretDown, EnvelopeSimple } from "phosphor-react";
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
                    <BtnLinkSmall nome={InstagramLogo} title={"Instagram"} link={"http://instagram.com/romu_013"}/>
                    <BtnLinkSmall nome={LinkedinLogo} title={"Linkedin"} link={"https://www.linkedin.com/in/r%C3%B4mullo-melo-124007227"}/>
                    <BtnLinkSmall nome={GithubLogo} title={"Github"} link={"https://github.com/rom013"}/>
                    <BtnLinkSmall nome={EnvelopeSimple} title={"Email"} link={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=romullomelo0130@gmail.com&body=Ol%C3%A1+R%C3%B4mullo"}/>
                </div>

                <button type="button" onClick={()=>{
                    scrollDown.scrollIntoView({behavior: "smooth"})
                }} className="btn-nav-down animate-bounce hover:animate-none hidden md:flex">
                    <CaretDown/>
                </button>
            </div>
        </div>
    )
}