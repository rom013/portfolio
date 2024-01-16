import { useState } from "react"
import { createPortal } from "react-dom"
import ModalWorks from "../modal/modalWorks"

const CardProjects = ({ image, name, time, description, auth, techs, urlSite }) => {
    const [showWork, setShowWork] = useState(false)

    showWork ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

    return (
        <>
            <button
                onClick={() => setShowWork(!showWork)}
                className={`px-3 py-6 max-w-96 max-h-60 bg-zinc-100 w-full ${showWork ? "opacity-0" : "opacity-100"} transition-all duration-75 group`}
                title=""
            >
                <img
                    src={image}
                    alt={name}
                    draggable={false}
                    className="object-cover h-full w-full md:w-auto group-hover:scale-105"
                />
            </button>
            {
                showWork && createPortal(
                    <ModalWorks
                        urlSite={urlSite}
                        auth={auth}
                        description={description}
                        image={image}
                        name={name}
                        setShowWork={setShowWork}
                        showWork={showWork}
                        time={time}
                        techs={techs}
                    />,
                    document.body
                )
            }
        </>
    )
}

export default CardProjects