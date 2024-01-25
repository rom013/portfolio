import { CaretLeft } from "@phosphor-icons/react"
import ButtonThemeMode from "../components/buttons/buttonThemeMode"
import myWorks from "../db/myWorks"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"
import ContactSection from "../components/sections/contact"
import CardWork from "../components/box/cardWorks"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Works = () => {
    const navigate = useNavigate()
    const mainWorks = useRef()

    useEffect(() => {
        window.scrollTo(0, 0)


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainWorks.current,
                scrub: 1,
                start: "top bottom",
                end: "bottom bottom",
                // markers: true
            }
        })

        myWorks.forEach((_,i)=>{
            const select = `#box-${i}`
            tl.fromTo(
                select,
                { duration: 1, y: 500, opacity: 0 },
                { duration: 1, y: 0, opacity: 1 }
            )
        })
    }, [])
    return (
        <main
            className="bg-zinc-50 dark:bg-zinc-950 min-h-screen dark:text-zinc-50 transition-all duration-700"
        >
            <ButtonThemeMode />
            <section
                className="px-8 max-w-5xl mx-auto w-full pt-20 pb-28 gap-6 flex flex-col"
            >
                <div
                    className="flex justify-between items-center border-b-2 border-zinc-600 pb-4"
                >
                    <h2
                        className="text-3xl md:text-5xl font-bold font-Sora"
                    >
                        Meus trabalhos
                    </h2>
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2"
                    >
                        <CaretLeft />
                        Voltar
                    </button>
                </div>

                <article
                    ref={mainWorks}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-8"
                >
                    {
                        myWorks
                            .sort(function (a, b) { return b.time - a.time })
                            .map((work, key) => {
                                return (
                                    <CardWork
                                        link={work.urlSite}
                                        name={work.name}
                                        techs={work.techs}
                                        time={work.time}
                                        urlImage={work.image}
                                        urlVideo={work.video}
                                        key={key}
                                        id={key}
                                    />
                                )
                            })
                    }
                </article>

            </section>

            <ContactSection />
        </main>
    )
}

export default Works