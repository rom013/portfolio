import { useEffect, useState } from "react"
import { KeyReturn } from "phosphor-react"

export function TerminalConsole(props) {
    document.body.classList.add("overflow-hidden")
    const [statusTerminal, setStatusTerminal] = useState(true)
    const [index, setIndex] = useState(0)

    function command(valueConsole) {
        if (valueConsole == '/comandos') {
            setStatusTerminal(true)
            setIndex(1)
        }
        else if (valueConsole == '/infected') {
            setTimeout(()=>{
                document.body.classList.add('infected')
            }, 20000)
            setIndex(2)
            setStatusTerminal(true)
        }
        // else if (valueConsole == '/raid') {
        //     setIndex(3)
        //     setStatusTerminal(true)
        // }
        else if (valueConsole == '/clear'){
            setTimeout(()=>{window.location.reload()}, 18000)
            setIndex(2)
            setStatusTerminal(true)
        }
        else if (valueConsole.includes("/text-#") && (valueConsole.length == 10 || valueConsole.length == 13)) {
            const color = valueConsole.split("-", 2)[1]
            document.querySelectorAll("body #root div *").forEach((e) => { e.style.color = `${color}` })
            props.screenTerminal(false)
            setScreen(true)
            setStatusTerminal(true)
        }
        else {
            console.log("Erro 404: não encontramos esse comando");
            setStatusTerminal(false)
        }
    }

    const [screen, setScreen] = useState(false)
    const components = [<Terminal command={command} status={statusTerminal} />, <Commands />, <Loading screen={props.screenTerminal} />, <Raid />]
    return (
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

function Terminal({ command, status }) {
    const [valueConsole, setValueConsole] = useState('')
    return (
        <>
            <div className="terminal relative max-w-[402px] flex justify-center w-full">
                <div className="flex flex-col justify-center w-full bg-blue-300 polygon-terminal">
                    <label htmlFor="terminal" className="cursor-text max-w-[400px] w-full py-4 px-12 bg-[#181818] polygon-terminal">
                        <input
                            type="text"
                            className="w-full bg-transparent focus:outline-none text-green-600 font-IBMMono placeholder:text-white/25"
                            id="terminal"
                            placeholder="/comandos"
                            autoComplete="false"
                            onChange={(e) => { setValueConsole(e.target.value.toLowerCase())}}
                            onKeyUp={(e) => { e.key === 'Enter' ? command(valueConsole) : null }}
                        />
                    </label>
                    <button
                        className="absolute right-4 w-14 h-full flex justify-center items-center focus:outinele-none"
                        onClick={(e) => { command(valueConsole) }}
                    >
                        <KeyReturn size={24} />
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

export function Commands() {
    return (
        <div className="max-w-lg w-full bg-black/50 min-h-[150px] mx-auto border-y border-purple-600 px-8 py-6 frame-command relative">
            <span className="text-gradient font-Orbitron text-2xl font-bold">Comandos</span>

            <div className="mt-4 font-mono text-sm flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                    <span>Exibe todos comandos disponíveis</span>
                    <span>/comandos</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <span>Alterar cor dos textos</span>
                    <span>/text-#{"{hexadecimal}"}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <span>Efeito de glitch</span>
                    <span>/infected</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <span>Retorna o padrão da página</span>
                    <span>/clear</span>
                </div>
            </div>
        </div>
    )
}

export function Loading(screen) {
    const [textRandom, setTextRandom] = useState('Carregando ...')
    function randomText() {
        let texts = ["Baixando pacotes", "Você pode enviar uma mensagem para o Rômullo", "Carregando ...", "Fazendo café", "Resolvendo bugs"]
        useEffect(() => {

            let interval = setInterval(() => {
                setTextRandom(texts[parseInt(Math.random() * (texts.length - 1))])
            }, 2000)

            setTimeout(()=>{
                screen.screen()
            }, 20000)

            return () => clearInterval(interval)
        }, [])
    }
    randomText()
    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 w-80">
                <div className="spinner w-20 h-16"></div>
                <div className="w-full h-8 ">
                    <div className="w-full h-full bg-purple-900 loading"></div>
                </div>
            </div>
            <div className="mt-6">
                <span>
                    {
                        textRandom
                    }
                </span>
            </div>
        </div>
    )
}

export function WriteScreen(props){
    const [text, setText] = useState("")
    
    function write (text, i = 0){
        if(i < text.length){
            setText(text.slice(0, i + 1))
            setTimeout(()=> write(text, i + 1), 500)
        }   
    }
    useEffect(()=>{
        setTimeout(()=> write(props.text))
    },[])

    return <span>{text}</span>
}

export function Raid(){
    const [screen, setScreen] = useState(false)
    const [pass, setPass] = useState(false)
    setTimeout(()=>{
        setPass(true)
        setTimeout(()=>{
            setScreen(true)
        },5000)         
    }, 5000)
    return (
        <div className="w-full h-full bg-black/75 flex  justify-center items-center">
            {
                screen ? <Game/> 
                : (
                    <div className="flex flex-col gap-16">
                        <div className="w-52 p-2 border border-blue-500 relative flex items-center cursor">
                            <span className="absolute -top-8">Username</span>
                            <span className="tracking-widest text-green-500 font-IBMMono">
                                <WriteScreen text={"Koiote"}/> 
                            </span>
                        </div>
                        {
                            pass ? (
                                <div className={`w-52 p-2 border border-blue-500 relative flex items-center cursor`}>
                                    <span className="absolute -top-8">Password</span>
                                    <span className="tracking-widest text-green-500 font-IBMMono">
                                        <WriteScreen text={"**************"}/>
                                    </span>
                                </div>
                            ) : null
                        }
                        
                    </div>
                )
            }

            

        </div>
    )
}

export function Game(){
    const [position, setPosition] = useState()
    function move(){
        let x = parseInt(Math.random()*innerWidth)
        let y = parseInt(Math.random()*innerHeight)

        const style = {
            left: `${x}px`,
            top: `${y}px`,
        }
        setPosition(style)
    }
    function finish(){
        console.log("ok");
    }


    return(
        <>
            <h3 className="text-purple-600 font-Orbitron font-bold text-2xl top-10 absolute">Click no antivirus</h3>
        </>
    )
}