import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import myContact from "../db/myContact"
import { twMerge } from "tailwind-merge"

export function LinksContainer({ showName = false, className, classNameItem }){
    return(
        <ul
            className={twMerge("flex flex-col gap-10", className)}
        >
            {
                myContact.map((contact, i) => {
                    return <li className={twMerge("flex",classNameItem)}>
                        <a 
                            href={contact.link}
                            target="_blank"
                            title={contact.name}
                            className="flex gap-6"
                            key={i}
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