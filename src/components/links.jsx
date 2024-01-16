import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import myContact from "../db/myContact"
import { twMerge } from "tailwind-merge"

export function LinksContainer({ showName = false, className, classNameItem }){
    return(
        <ul
            className={twMerge("flex flex-col gap-10 text-zinc-950 dark:text-zinc-200", className)}
        >
            {
                myContact.map((contact, i) => {
                    return <li key={`key_${i}`} className={twMerge("flex",classNameItem)}>
                        <a 
                            href={contact.link}
                            target="_blank"
                            title={contact.name}
                            className="flex gap-6 "
                        >
                            { contact.icon }
                            { 
                                showName && contact.title
                            }
                        </a>
                    </li> 
                })
            }
        </ul>
    )
}