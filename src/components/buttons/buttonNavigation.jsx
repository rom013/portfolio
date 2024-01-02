export default function BtnNavigation({ title, position }){
    return(
        <button
            className="btn-style"
            onClick={()=>{
                window.scroll(
                    {
                        behavior:"smooth", 
                        top: position
                    }
                )
            }}
        >
            { title }
        </button>
    )
}