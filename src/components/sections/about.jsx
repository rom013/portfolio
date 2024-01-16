import { useEffect, useRef } from "react";
import positionNextPage from "../../funcs/positionNextPage";
import BtnNavigation from "../buttons/buttonNavigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection({ refs }) {
    const aboutSection = useRef()
    const contentAbout = useRef()

    useEffect(() => {

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
                className="max-w-2xl w-full h-full  glitch_img_rb relative"
                ref={refs.imageAbout}
            >
                <img
                    className="w-full h-full object-cover grayscale"
                    src={"https://images.pexels.com/photos/5749818/pexels-photo-5749818.jpeg?auto=compress&cs=tinysrgb&w=600"}
                    alt="Rômullo Melo"
                    draggable={false}
                />
            </div>
            <div
                className="flex flex-col justify-center gap-14 absolute md:relative bg-white dark:bg-zinc-950 dark:text-zinc-200 md:bg-inherit mx-10 md:mx-0 p-6 md:p-0"
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
                            Meu nome é Rômullo Melo Oliveira, sou um programador especializado em front-end, com uma trajetória marcada por grandes projetos. Obtive minha formação em Desenvolvimento de Sistemas na ETEC Drª Ruth Cardoso, São Vicente, SP, e venho construindo minha carreira nessa área há dois anos.

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
                        type="arrow"
                        position={positionNextPage() * 2}
                        className={"!p-0 border-none rotate-90 !rounded-full"}
                    />
                </div>
            </div>
        </section>
    )
}