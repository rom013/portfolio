import { useEffect, useRef, useState } from "react";
import BtnNavigation from "../buttons/buttonNavigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rom013 from "../../assets/img/photo_rom013_02.webp"


gsap.registerPlugin(ScrollTrigger)

export default function AboutSection({ refs }) {
    const aboutSection = useRef()
    const contentAbout = useRef()

    const [ heightSection, setHeightSection ] = useState()

    useEffect(() => {
        setHeightSection(aboutSection.current.clientHeight * 2);

        const timeLine = gsap.timeline({
            scrollTrigger: {
                trigger: aboutSection.current,
                // markers: true,
                start: "+=100 bottom",
                end: "center center",
                scrub: .7,
                // pin: true
            }
        })

        timeLine
            .fromTo(
                aboutSection.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            )
            .fromTo(
                contentAbout.current,
                {
                    scale: 0
                },
                {
                    scale: 1
                }
            )

        gsap.fromTo(
            aboutSection.current,
            {
                opacity: 1
            },
            {
                scrollTrigger: {
                    trigger: aboutSection.current,
                    // markers: true,
                    start: "bottom center",
                    end: "+=10 center",
                    toggleActions: "play none reset none",
                },
                opacity: 0,
            }
        )


    }, [])

    return (
        <section
            ref={aboutSection}
            className="flex gap-5 h-screen w-full items-center relative"
            id="sectionAbout"
        >
            <div
                className="max-w-2xl w-full h-full glitch_img_rb relative hidden md:block"
                ref={refs.imageAbout}
            >
                <img
                    className="w-full h-full object-cover"
                    src={rom013}
                    alt="Rômullo Melo"
                    draggable={false}
                />
            </div>
            <div
                className="flex flex-col justify-center gap-14  dark:text-zinc-200 mx-10 md:mx-0"
            >
                <div
                    className="max-w-2xl flex flex-col gap-6 "
                    ref={contentAbout}
                >
                    <h2
                        className="subtitle"
                    >
                        Um pouco sobre eu
                    </h2>
                    <div
                        className="flex flex-col gap-2"
                    >
                        <p
                            className="font-lato text-zinc-700 dark:text-zinc-200 leading-relaxed text-base"
                        >
                            Meu nome é Rômullo Melo Oliveira, sou desenvolvedor de sistemas especializado em front-end, com uma trajetória marcada por grandes projetos.
                        </p>
                        <p
                            className="font-lato text-zinc-700 dark:text-zinc-200 leading-relaxed text-base"
                        >
                            Encaro cada desafio como uma oportunidade de aprendizado, sem medo de errar, e busco sempre superar as expectativas. Estou pronto para contribuir com minha expertise em projetos desafiadores.
                        </p>
                        <p
                            className="font-lato text-zinc-700 dark:text-zinc-200 leading-relaxed text-base"
                        >
                            Vamos juntos alcançar resultados excepcionais!
                        </p>

                    </div>
                </div>

                <div
                    className="flex flex-col items-center"
                    ref={refs.btnNavTwo}
                >
                    <p className="pointer-events-none text-sm">Continuar</p>
                    <BtnNavigation
                        height={heightSection}
                        type="arrow"
                        className={"!p-0 border-none rotate-90 !rounded-full"}
                    />
                </div>
            </div>
        </section>
    )
}