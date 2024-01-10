import myContact from "../../db/myContact"
import BtnDownload from "../buttons/buttonDownload"
import CV from "../../assets/docs/RomulloMelo.pdf"
import { LinksContainer } from "../links"

const ContactSection = ({ refs }) => {
    return (
        <section
            className="w-screen h-screen bg-zinc-800 flex"
            ref={refs.contactSection}
        >
            <div
                className="max-w-2xl w-full h-full"
            >
                <img
                    className="w-full h-full object-cover grayscale"
                    src={"https://images.pexels.com/photos/5749818/pexels-photo-5749818.jpeg?auto=compress&cs=tinysrgb&w=600"}
                    alt="Rômullo Melo"
                    draggable={false}
                />
            </div>
            <div
                className="flex flex-col justify-center gap-14 w-full px-8"
            >
                <h2
                    className="text-white text-[2rem] font-Sora font-bold"
                >
                    Entre em contato comigo
                </h2>

                <ul
                    className="flex flex-col gap-8 text-white"
                >
                    <LinksContainer 
                        showName="true" 
                        classNameItem={""} 

                    />
                </ul>

                <BtnDownload
                    file={CV}
                    title={"Baixar CV"}
                    className={"w-full !border-white text-white hover:bg-white hover:text-black"}
                />
            </div>
        </section>
    )
}

export default ContactSection