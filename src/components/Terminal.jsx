import { useState } from "react"
import { KeyReturn } from "phosphor-react"

export function TerminalConsole(props){
    const [statusTerminal, setStatusTerminal] = useState(true)
    const [index, setIndex] = useState(0)

    function command(valueConsole){
        if (valueConsole == '/comandos'){
            // setScreen(true)
            setStatusTerminal(true)
            setIndex(1)
        }
        else if(valueConsole == '/infected'){
            document.body.classList.add("infected")

            setInterval(()=>{
                document.body.classList.remove("infected")
            },10000)

            setScreen(true)
            setStatusTerminal(true)
        }
        else{
            console.log("Erro 404: não encontramos esse comando");
            setStatusTerminal(false)
        }
    }

	const [screen, setScreen] = useState(false)
    const components = [ <Terminal command={command} status={statusTerminal}/>,  <Commands/>]
    return(
		<>
			{
                screen ? null
                :
                <div 
                    className="h-screen w-full bg-black/70 fixed top-0 z-50 flex flex-col justify-center items-center text-white"
                >
                    {components[index]}
                </div>
            }
		</>
    )
}

function Terminal({command, status}){
    const [valueConsole, setValueConsole] = useState('')
    console.log(status);
    return(
        <>
            <div className="terminal relative max-w-[402px] flex justify-center w-full">
                <div className="flex flex-col justify-center w-full bg-blue-300 polygon-terminal">
                    <label htmlFor="terminal" className="cursor-text max-w-[400px] w-full py-4 px-12 bg-[#181818] polygon-terminal">
                        <input 
                            type="text" 
                            className="w-full bg-transparent focus:outline-none text-green-600 font-IBMMono placeholder:text-white/25"
                            id="terminal"
                            placeholder="/comandos"
                            onChange={(e)=>{setValueConsole(e.target.value)}}
                            onKeyUp={(e)=>{e.key === 'Enter' ? command(valueConsole) : null}}
                        />
                    </label>
                    <button 
                        className="absolute right-4 w-14 h-full flex justify-center items-center focus:outinele-none"
                        onClick={(e)=>{command(valueConsole)}}
                    >
                        <KeyReturn size={24}/>
                    </button>
                </div>
            </div>
            <span className={`text-[#f00] bg-black/80 mt-3 font-IBMMono`}>
                {
                    status ? "" : "Erro 404: não encontramos esse comando"
                }
            </span>
        </>
    )
}

export function Commands(){
    return(
        <div className="max-w-lg w-full bg-black/50 min-h-[150px] mx-auto border-y border-purple-600 px-8 py-6 frame-command relative">
            <span className="text-gradient font-Orbitron text-2xl font-bold">Comandos</span>

            <div className="mt-4 font-mono text-sm">
                <div className="grid grid-cols-2">
                    <span>Abrir console</span>
                    <span>/open-console</span>
                </div>
                <div className="grid grid-cols-2">
                    <span>Alterar cor dos textos</span>
                    <span>/text-#color</span>
                </div>
                <div className="grid grid-cols-2">
                    <span>Infectar</span>
                    <span>/infected</span>
                </div>
            </div>
        </div>
    )
}