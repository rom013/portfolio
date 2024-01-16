import { Moon, Sun } from "@phosphor-icons/react"
import { memo, useEffect, useState } from "react"

const ButtonThemeMode = () => {

    const [active, setActive] = useState(localStorage.getItem("dark") ? true : false)

    useEffect(() => {
        saveThemeMode()
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
            className="p-4 bg-white dark:bg-zinc-900 rounded-full fixed bottom-6 right-6 z-50 shadow-md border-2 border-zinc-900 dark:border-zinc-500"
            onClick={() => setActive(!active)}
        >
            {
                active
                    ? <Sun
                        size={24}
                        className="animate-[rotate-scale-down_0.65s_linear_both] text-white"
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