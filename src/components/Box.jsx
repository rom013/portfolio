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
                        <li className="text-center mb-6">
                            <span className="text-3xl font-bold uppercase font-RobotoCondensed">{props.name}</span>
                        </li>
                        <li className="flex flex-col">
                            <span>Técnologias:</span>
                            <div className="flex gap-3">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
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
    return (
        <div className="h-80 w-52 fixed bottom-0 right-14 bg-purple-900/50 backdrop-blur-[1px] z-50 border border-blue-300 p-4">
            <div className="flex flex-col justify-center h-full gap-16">
                <div className="flex flex-col w-full justify-center items-center">
                    <div className="rounded-full w-20 h-20 overflow-hidden">
                        <img src="https://github.com/rom013.png" alt="" />
                    </div>
                    <span className="text-white font-bold font-Orbitron mt-4">rom013</span>
                </div>

                <div className="flex gap-5">
                    <span className="flex-1 bg-red-600 h-6 text-white flex justify-center">(1)</span>
                    <span className="flex-1 bg-green-600 h-6 text-white flex justify-center">(2)</span>
                </div>
            </div>
        </div>
    )
}