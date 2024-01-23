import { CaretLeft } from "@phosphor-icons/react"
import ButtonThemeMode from "../components/buttons/buttonThemeMode"
import myWorks from "../db/myWorks"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import ContactSection from "../components/sections/contact"

const Works = () => {
    const navigate = useNavigate()
    
    useEffect(()=>{
        window.scrollTo(0,0)    
    },[])
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
                        onClick={()=>navigate("/")}
                        className="flex items-center gap-2"
                    >
                        <CaretLeft/>
                        Voltar
                    </button>
                </div>

                <article
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-8"
                >
                    {
                        myWorks.map(work => {
                            return (
                                <div
                                    className="flex flex-col"
                                >
                                    <div
                                        className="w-full flex justify-center items-center bg-zinc-200 dark:bg-zinc-700 py-12 px-5 h-[20rem] max-w-[30rem] flex-1 mb-10"
                                    >
                                        <img
                                            className="aspect-video object-cover"
                                            src={work.image}
                                            alt=""
                                            draggable={false}
                                        />
                                    </div>

                                    <strong
                                        className="text-4xl font-Lato font-normal pb-6"
                                    >
                                        {work.name}
                                    </strong>

                                    <div
                                        className="flex justify-between gap-5 pt-8 border-t-2"
                                    >
                                        <div
                                            className="flex gap-1"
                                        >
                                            {
                                                work.techs.map(tech => {
                                                    return <i className="text-xs text-zinc-600" >{tech}</i>
                                                })
                                            }
                                        </div>
                                        <time>{work.time}</time>
                                    </div>

                                </div>
                            )
                        })
                    }
                </article>

            </section>

            <ContactSection/>
        </main>
    )
}

export default Works