import phone from "../assets/audio/phone.mp3"
import { useState } from "react"
import { Phone, PhoneX } from "phosphor-react"

export function BoxProject(props){
    const img = {"backgroundImage" : `url(/${props.img})`}
    return (
        <div className="w-80 h-80 border border-blue-500 overflow-hidden group relative bg-cover bg-no-repeat" style={img}>
            <div className="group-hover:-translate-y-80 relative transition duration-300">
                <div className="w-80 h-80 backdrop-blur-[2px] flex items-center justify-center p-5">
                    <span className="text-white font-RobotoCondensed text-2xl uppercase">{props.name}</span>
                </div>
                <div className="w-80 h-80 bg-black/50 backdrop-blur-[2px] py-8 px-6">
                    <ul className="text-white flex flex-col gap-4">
                        <li className="text-center">
                            <span className="text-2xl font-bold uppercase font-RobotoCondensed">{props.name}</span>
                        </li>
                        <li className="flex flex-col">
                            <span>Técnologias:</span>
                            <div className="flex gap-3 text-3xl py-2">
                                {
                                    props.icons.map((e)=>{
                                        return e
                                    })
                                }
                            </div>
                        </li>
                        <li className="flex flex-col">
                            <span>Responsividade:</span>
                            <span className={(props.responsive ? `text-green-500` : `text-red-500`) + ` flex flex-col`}>
                                {props.responsive ? "Disponível" : "Indisponível"}
                            </span>
                        </li>
                        <li className="flex flex-col">
                            <span>Repositório:</span>
                            <a href={`https://github.com/rom013/${props.git}`} target="_blank" className="text-sm underline hover:text-blue-500 transition">https://github.com/rom013/{props.git}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export function BoxCellphone(){
    let [te, setTe] = useState(true)

    let [outcall, setOutcall] = useState(false)

    function stop(){
        document.querySelector("#phone").pause();
    }

    return (
        <>
            {te ? 
                <div className="h-80 w-52 fixed bottom-0 right-14 bg-purple-900/50 backdrop-blur-[1px] z-50 border border-blue-300 p-4">
                    <div className="">
                        <audio src="phone.mp3" autoPlay loop id="phone"></audio>
                    </div>
                    <div className="flex flex-col justify-center h-full gap-16">
                        <div className="flex flex-col w-full justify-center items-center">
                            <div className="rounded-full w-20 h-20 overflow-hidden">
                                <img src="https://github.com/rom013.png" alt="" />
                            </div>
                            <span className="text-white font-bold font-Orbitron mt-4">rom013</span>
                            <span className={`text-purple-400 text-lg ${outcall ? "block" : "hidden"}`}>
                                00:00
                            </span>
                        </div>

                        <div className="flex justify-center gap-5">
                            <button
                                type="button"
                                className="flex-1 bg-red-600/25 text-white flex justify-center cursor-pointer p-1 items-center shadow-red-900 shadow-shadow-3 hover:bg-red-500 transition duration-500"
                                onClick={()=>{
                                    stop()
                                    setTe(false)
                                }}
                            >
                                <PhoneX size={24}/>
                            </button>
                            <button 
                                type="button"
                                className={`flex-1 bg-green-600/25 text-white flex justify-center cursor-pointer ${outcall ? "hidden" : "block"} p-1 items-center shadow-green-600 shadow-shadow-3 hover:bg-green-500 transition duration-500`}
                                onClick={()=>{
                                    stop()
                                    setOutcall(true)
                                }}
                            >
                                <Phone size={24}/>
                            </button>
                        </div>
                    </div>
                </div>
            : null
            }
        </>
    )
}


export function Console(){
    const [valueConsole, setValueConsole] = useState('')
	const [screen, setScreen] = useState(false)

    return(
		<>
			{
                screen ? null
        
                :<div 
                    className="h-screen w-full bg-black/70 fixed top-0 z-50 flex justify-center items-center text-white"
                    // onClick={()=>{setScreen(true)}}
                >
                    <input 
                        type="text" 
                        className="text-black"
                        // value={valueConsole}
                        onChange={(e)=>{setValueConsole(e.value)}}
                    />
                </div>
            }
				
			
		</>
    )
}