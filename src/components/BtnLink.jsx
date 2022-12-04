export default function BtnLink(props){
    return(
        <a 
            href="#" 
            className="max-w-[32px] max-h-8 border-blue-500 border p-1 flex items-center justify-center text-white hover:before:bg-blue-500/[.2] before:transition before:duration-500 before:min-w-[32px] before:min-h-[32px] before:border-cyan-500 before:border hover:before:rotate-45"
        >    
            <props.nome size={24} className="min-w-[32px] absolute"/>
        </a>
    )
}