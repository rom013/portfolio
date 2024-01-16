import { Moon, Sun } from "@phosphor-icons/react"
import { memo, useEffect, useState } from "react"

const ButtonThemeMode = () => {

    const [active, setActive] = useState(localStorage.getItem("dark") ? true : false)

    useEffect(() => {
        saveThemeMode()
        console.log(active);
        active
            ? document.body.classList.add("dark")
            : document.body.classList.remove("dark") 
    }, [active])

    function saveThemeMode() {
        active
            ? localStorage.setItem("dark", true)
            : localStorage.removeItem("dark")
    }

    return (
        <button
            className="p-4 bg-white rounded-full fixed bottom-6 right-6 z-50 shadow-md"
            onClick={() => setActive(!active)}
        >
            {
                active
                    ? <Sun
                        size={24}
                        className="animate-[rotate-scale-down_0.65s_linear_both]"
                        weight="fill"
                    />
                    : <Moon
                        size={24}
                        className="animate-[rotate-scale-down_0.65s_linear_both]"
                        weight="fill"
                    />
            }
        </button>
    )
}

export default memo(ButtonThemeMode)