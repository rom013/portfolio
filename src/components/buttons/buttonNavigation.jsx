import { CaretCircleRight } from "@phosphor-icons/react"
import { twMerge } from "tailwind-merge"

export default function BtnNavigation({ title, position, type="default", className }){
    function typeBtn(){
        switch (type) {
            case "default":
                return title
            case "arrow":
                return <CaretCircleRight size={32} />
        }
    }
    
    return(
        <button
            className={twMerge("btn-style", className)}
            title="Navegar para a próxima seção"
            onClick={()=>{
                window.scroll(
                    {
                        behavior:"smooth", 
                        top: position
                    }
                )
            }}
        >
            {
                typeBtn()
            }
        </button>
    )
}