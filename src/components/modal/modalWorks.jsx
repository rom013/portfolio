import { ArrowSquareOut } from "@phosphor-icons/react"

const ModalWorks = ({ name, showWork, setShowWork, image, time, description, auth, techs, urlSite }) => {

    return (
        <main
            className="px-8 fixed inset-0 bg-zinc-300/80 backdrop-blur-sm flex justify-center items-center animate-[scale-in-center_0.5s_cubic-bezier(0.250,0.460,0.450,0.940)_both]"
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
                        <a 
                            href={urlSite}
                            title={name}
                            className="flex gap-2"
                            target="_blank"
                        >
                            <strong
                                className="font-Lato font-bold text-2xl text-zinc-900"
                            >
                                {name}
                            </strong>
                            <ArrowSquareOut/>
                        </a>
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
                    {
                        techs.map(t => {
                            return <span>#{t}</span>
                        })
                    }
                </div>

            </div>
        </main>
    )
}

export default ModalWorks