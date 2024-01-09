import { useState } from "react"
import { createPortal } from "react-dom"

const CardProjects = ({ image, name, time, description, auth }) => {
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
                    src={image}
                    alt={name}
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
                                    src={image}
                                    alt={name}
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
                                        {name}
                                    </strong>
                                    <span
                                        className="text-zinc-500"
                                    >
                                        {time}
                                    </span>
                                </div>

                                <div
                                    className="flex gap-1"
                                >
                                    <span>@{auth}</span>
                                </div>
                            </div>

                            <p
                                className="text-zinc-800 leading-relaxed"
                            >
                                {description}
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