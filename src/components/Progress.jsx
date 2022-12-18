export default function Progress(props){
    const progress = {
        width: `${props.progress}%` 
    }
    return(
        <>
            <span className="text-white max-w-[150px] w-28">{props.name}</span>
            <div className="flex-1 w-full h-10 bg-[#252525] mold-pol overflow-hidden col-span-3 sm:block hidden  group">
                <div className="h-full bg-gradient-blue-pink transition duration-300 relative" style={progress}>
                    <div className={`group-hover:block hidden absolute top-1 py-1 px-4 bg-gray-800 ${props.progress > 90 ? "right-8" : "-right-10"}`}>
                        <span className="text-white cursor-default">
                            {props.progress + "%"}
                        </span>
                    </div>
                </div>
            </div> 
            <div className="sm:hidden block text-end">
                <div className="text-white">
                    {
                        levelExperience(props.progress)
                    }
                </div>
            </div> 
        </>
    )
}

function levelExperience(level){
    if(level < 40){
        return "Básico"
    }
    else if(level >= 40 &&  level < 70){
        return "Intermediario"
    }
    else if(level >= 70){
        return "Avançado"
    }
}