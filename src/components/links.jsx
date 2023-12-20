import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

const network = [
    {
        name: "/rom013",
        link: "https://github.com/rom013",
        icon: <GithubLogo size={24} color="#000" />
    },
    {
        name: "/in/romullomelo",
        link: "https://linkedin.com/in/romullomelo",
        icon: <LinkedinLogo size={24} color="#000" />
    },
    {
        name: "@romu_013",
        link: "https://instagram.com/romu_013",
        icon: <InstagramLogo size={24} color="#000" />
    },
]

export function LinksContainer({ showName = false }){
    return(
        <div
            className="flex flex-col gap-10 ml-10"
        >
            {
                network.map((e, i) => {
                    return <a 
                        href={e.link}
                        target="_blank"
                        className="flex gap-6"
                        key={i}
                    >
                        { e.icon }
                        { 
                            showName && e.name
                        }
                    </a>
                })
            }
        </div>
    )
}