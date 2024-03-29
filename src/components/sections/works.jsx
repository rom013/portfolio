import gsap from "gsap"
import myWorks from "../../db/myWorks"
import CardProjects from "../box/cardProjects"
import BtnNavigation from "../buttons/buttonNavigation"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger)

const WorksSection = ({ refs }) => {
    const navigate = useNavigate()

    const projectsSection = useRef()
    const title = useRef()
    const slideWorks = useRef()
    const [heightSection, setHeightSection] = useState()
    useEffect(() => {
        setHeightSection(projectsSection.current.clientHeight);
        gsap.fromTo(
            title.current,
            {
                y: -500
            },
            {
                scrollTrigger: {
                    trigger: projectsSection.current,
                    // markers: true,
                    start: "top bottom",
                    end: "top top",
                    scrub: 1
                },
                y: 0
            }
        )
        gsap.fromTo(
            slideWorks.current,
            {
                x: -500
            },
            {
                scrollTrigger: {
                    trigger: projectsSection.current,
                    // markers: true,
                    start: "center bottom",
                    end: "top top",
                    scrub: 1
                },
                x: 0
            }
        )

        gsap.fromTo(
            projectsSection.current,
            {
                opacity: 1
            },
            {
                scrollTrigger: {
                    trigger: projectsSection.current,
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
            className="min-h-svh flex items-center md:overflow-x-hidden relative"
            ref={projectsSection}
        >
            <main
                className="flex flex-col items-center gap-6 px-8 md:px-0"
            >
                <div
                    className="w-full max-w-5xl md:border-x-2 overflow-hidden md:overflow-auto"
                >
                    <h2
                        ref={title}
                        className="text-[3rem] md:text-[6rem] subtitle uppercase text-center"
                    >
                        Projetos
                    </h2>
                </div>

                <div
                    className="flex flex-wrap md:flex-nowrap gap-8 justify-center md:w-screen w-full h-96 md:h-fit overflow-hidden blur-end relative"
                    ref={slideWorks}
                >
                    {
                        myWorks.slice(0, 4).map((works, key) => <CardProjects
                            auth={works.auth}
                            description={works.description}
                            image={works.image}
                            name={works.name}
                            time={works.time}
                            techs={works.techs}
                            urlSite={works.urlSite}
                            key={key}
                        />)
                    }
                </div>

                <button
                    className="btn-style"
                    onClick={() => navigate("/works")}
                >
                    Mais trabalhos
                </button>

                <BtnNavigation
                    height={heightSection * 5}
                    type="arrow"
                    className={"!p-0 border-none rotate-90 !rounded-full"}
                />
            </main>
        </section>
    )
}

export default WorksSection