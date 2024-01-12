import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

const myContact = [
    {
        name: "Email",
        link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=romullomelo0130@gmail.com&body=Ol%C3%A1+R%C3%B4mullo",
        title: "romullomelo0130@gmail.com",
        icon: <Envelope size={32}/>,
    },
    {
        name: "Github",
        link: "https://github.com/rom013",
        title: "@rom013",
        icon: <GithubLogo size={32} />,
    },
    {
        name: "Linkedin",
        link: "https://linkedin.com/in/romullomelo",
        title: "/in/romullomelo",
        icon: <LinkedinLogo size={32} />,
    },
    {
        name: "Instagram",
        link: "https://instagram.com/romu_013",
        title: "@romu_013",
        icon: <InstagramLogo size={32} />,
    }
]

export default myContact