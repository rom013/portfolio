import { useState } from "react"
import { createPortal } from "react-dom"

const CardProjects = () => {
    const [showWork, setShowWork] = useState(false)

    showWork ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

    return (
        <>
            <button
                onClick={() => setShowWork(!showWork)}
                className="px-3 py-6 bg-zinc-100"
                title=""
            >
                <img
                    src="https://placehold.co/600x400"
                    alt=""
                    draggable={false}
                    className="max-w-96 max-h-60"
                />
            </button>
            {
                showWork && createPortal(
                    <main
                        className="fixed inset-0 bg-zinc-600/30 backdrop-blur-sm flex justify-center items-center animate-[scale-up-br_0.4s_cubic-bezier(0.390,0.575,0.565,1.000)_both]"
                        onClick={(e) => e.target.tagName === "MAIN" && setShowWork(!showWork)}
                    >
                        <div
                            className="flex flex-col gap-6 max-w-4xl"
                        >
                            <div
                                className="w-full"
                            >
                                <img
                                    src="https://placehold.co/1000x450"
                                    alt=""
                                    draggable={false}
                                    className="w-full object-cover"
                                />
                            </div>

                            <div
                                className="flex justify-between items-center"
                            >
                                <div
                                    className="flex flex-col"
                                >
                                    <strong
                                        className="font-Lato font-bold text-2xl text-zinc-900"
                                    >
                                        SpotDev
                                    </strong>
                                    <span
                                        className="text-zinc-500"
                                    >
                                        2023
                                    </span>
                                </div>

                                <div
                                    className="flex gap-1"
                                >
                                    <span>@rom013</span>
                                </div>
                            </div>

                            <p
                                className="text-zinc-800 leading-relaxed"
                            >
                                A plataforma SpotDev é um chat de conversas entre devs online que permite aos profissionais da área de ti se comunicarem, trocarem experiências e compartilharem conhecimentos. A plataforma oferece a possibilidade de criar fóruns de conversas específicas e comunidades sobre temas relacionados à tecnologia, programação, desenvolvimento e inovação. A plataforma tem como objetivo conectar os devs, facilitar o aprendizado e estimular a colaboração entre eles.F
                            </p>

                            <div
                                className="flex gap-1 italic"
                            >
                                <span>#react</span>
                                <span>#react</span>
                                <span>#react</span>
                                <span>#react</span>
                            </div>

                        </div>
                    </main>,
                    document.body
                )
            }
        </>
    )
}

export default CardProjects