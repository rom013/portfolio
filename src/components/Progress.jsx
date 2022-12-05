export default function Progress(props){
    const progress = {
        width: `${props.progress}%` 
    }
    return(
        <li className="flex gap-6 items-center">
            <span className="text-white max-w-[150px] w-28">{props.name}</span>
            <div className="flex-1 w-full h-10 bg-[#252525] mold-pol overflow-hidden">
                <div className="h-full bg-gradient-blue-pink transition duration-300" style={progress}></div>
            </div> 
        </li>
    )
}