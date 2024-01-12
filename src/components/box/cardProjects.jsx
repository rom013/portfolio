import { useState } from "react"
import { createPortal } from "react-dom"
import ModalWorks from "../modal/modalWorks"

const CardProjects = ({ image, name, time, description, auth, techs }) => {
    const [showWork, setShowWork] = useState(false)

    showWork ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

    return (
        <>
            <button
                onClick={() => setShowWork(!showWork)}
                className="px-3 py-6 bg-zinc-100 w-full"
                title=""
            >
                <img
                    src={image}
                    alt={name}
                    draggable={false}
                    className="max-w-96 max-h-60 object-cover w-full md:w-auto"
                />
            </button>
            {
                showWork && createPortal(
                    <ModalWorks
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