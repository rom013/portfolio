import { twMerge } from "tailwind-merge"

export default function BtnDownload({title, file, className}){
    return(
        <a 
            className={twMerge("btn-style", className)}
            download={true}
            href={file}
        >
            { title }
        </a>
    )
}