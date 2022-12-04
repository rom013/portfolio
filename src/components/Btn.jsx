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
            <input type="radio" name="level" id={"level"+props.level} />
            <label htmlFor={"level"+props.level}>
                <div className="polygon bg-blue-300  w-[146px] h-[50px] flex justify-center items-center cursor-pointer">
                    <div className="hover:bg-blue-500/90 bg-[#020a21] w-36 h-12 polygon flex justify-center items-center text-white transition duration-200">
                        <span>Nível {props.level}</span>
                    </div>
                </div>
            </label> 
        </>

    )
}

