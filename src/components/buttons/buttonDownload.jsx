export default function BtnDownload({title, file}){
    return(
        <a 
            className="btn-style"
            download={true}
            href={file}
        >
            { title }
        </a>
    )
}