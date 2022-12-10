export function BtnDefault(props){
    return(
        <div className="border-2 border-blue-300 hover:bg-blue-300/[.2] py-4 px-16 cursor-pointer rounded duration-500">
            <span className="text-white font-RobotoCondensed font-bold tracking-[.1em]">{props.text}</span>
        </div>
    )
}

export function BtnLevel(props){
    return(
        <>
            <input type="radio" name="level" id={"level"+props.level} checked={props.status}/>
            <label htmlFor={"level"+props.level}>
                <div className="polygon bg-blue-300  w-[146px] h-[50px] flex justify-center items-center cursor-pointer">
                    <div className="hover:bg-gradient-2 bg-[#020a21] w-36 h-12 polygon flex justify-center items-center text-white transition duration-200">
                        <span>Nível {props.level}</span>
                    </div>
                </div>
            </label> 
        </>

    )
}

export function BtnLink(props){
    return(
        <a href={props.link} target="_blank" className="border border-blue-300 hover:bg-blue-300/[.2] py-4 px-16 cursor-pointer rounded duration-500 flex justify-center gap-3 items-center">
            <span 
                className="text-white font-RobotoCondensed font-bold"
            >
                {   
                    (typeof props.icon == "string") 
                    ? props.icon.endsWith("svg") ? <img className="w-6 h-6" src={`/${props.icon}`}/> : null
                    : <props.icon size={24}/>
                }
            </span>
            <span className="text-white font-RobotoCondensed font-bold tracking-[.1em]">{props.name}</span>
        </a>
    )
}

export default function BtnLinkSmall(props){
    return(
        <a 
            href={props.link} 
            target="_blank"
            className="max-w-[32px] max-h-8 border-blue-500 border p-1 flex items-center justify-center text-white hover:before:bg-blue-500/[.2] before:transition before:duration-500 before:min-w-[32px] before:min-h-[32px] before:border-cyan-500 before:border hover:before:rotate-45"
        >    
            <props.nome size={24} className="min-w-[32px] absolute"/>
        </a>
    )
}