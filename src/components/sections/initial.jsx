import Rom01 from "../../assets/img/photo_rom013.jpg"
import BtnDownload from "../buttons/buttonDownload";
import BtnNavigation from "../buttons/buttonNavigation";
import { LinksContainer } from "../links";
import cv from "../../assets/docs/RomulloMelo.pdf"
import positionNextPage from "../../funcs/positionNextPage";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

export default function InitialSection({ refs }) {

    const section = useRef()
    const about = useRef()
    const imgProfile = useRef()

    useEffect(() => {
        const animateSection = gsap.to(
            section.current,
            {
                scrollTrigger: {
                    trigger: section.current,
                    start: "top top",
                    scrub: .7,
                },
                opacity: 0,
            }
        )

        return () => { animateSection.kill() }
    }, [])

    return (
        <section
            ref={section}
            className="flex flex-col-reverse justify-center py-10 sm:py-0 sm:flex-row gap-5 h-svh w-full"
        >
            <section
                className="px-8 md:flex-1 md:h-full flex flex-col-reverse md:flex-row items-center gap"
                ref={about}
            >

                <LinksContainer
                    className={"md:ml-10 flex-row md:flex-col mt-10"}
                />

                <div
                    className="flex flex-col gap-5 sm:h-full relative justify-around flex-1 items-center"
                >
                    <div
                        className="flex md:block flex-col gap-3"
                    >
                        <strong
                            className="font-Sora text-[1.5rem] text-zinc-950 font-normal dark:text-zinc-50"
                        >
                            Eu sou
                        </strong>
                        <h1
                            className="font-Sora font-bold text-4xl md:text-[4rem] text-zinc-950 dark:text-zinc-50"
                        >
                            Rômullo Melo
                        </h1>
                        <p
                            className="text-zinc-500 font-Lato text-xl"
                        >
                            Desenvolvedor front-end & design UI
                        </p>
                    </div>

                    <div
                        className="flex flex-col items-center gap-8"
                    >
                        <div
                            className="flex gap-10 flex-col md:flex-row md:justify-center w-full"
                        >
                            <BtnNavigation
                                title={"Conhecer meus trabalhos"}
                                position={window.innerHeight * 4}
                                className={"w-full md:w-fit"}
                            />
                            <BtnDownload
                                file={cv}
                                title={"Baixar CV"}
                                className={"w-full md:w-fit"}
                            />
                        </div>
                        <BtnNavigation
                            position={positionNextPage()}
                            type="arrow"
                            className={"!p-0 border-none !rounded-full rotate-90"}
                        />

                    </div>
                </div>

            </section>
            <div
                className="w-40 min-h-40 h-40 border-2 border-black md:border-none dark:border-white sm:max-w-2xl sm:w-1/2 sm:h-full self-center rounded-full sm:rounded-none overflow-hidden relative glitch_img_tl"
                ref={imgProfile}
            >
                <img
                    className="w-full h-full object-cover"
                    src={Rom01}
                    alt="Rômullo Melo"
                    draggable={false}
                />
            </div>
        </section>
    )
}