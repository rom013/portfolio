import BtnDownload from "../buttons/buttonDownload"
import CV from "../../assets/docs/RomulloMelo.pdf"
import { LinksContainer } from "../links"
import BtnNavigation from "../buttons/buttonNavigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { FooterContact } from "../footerImage"

gsap.registerPlugin(ScrollTrigger)

const ContactSection = ({ refs }) => {

    const contactSection = useRef()
    const content = useRef()

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: contactSection.current,
                // markers: true,
                scrub: 2,
                start: "top bottom",
                end: "bottom bottom"
            }
        })

        tl
            .fromTo(
                contactSection.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                }
            )
        for (let i = 0; i < 4; i++) {
            // const element = array[i];

            tl.fromTo(
                `.content-${i + 1}`,
                {
                    xPercent: -100,
                },
                {
                    xPercent: 0,
                    ease: "none"
                }
            )
        }
    }, [])

    return (
        <section
            className="w-full h-[calc(100svh+80px)] bg-zinc-800 dark:bg-inherit flex relative"
            ref={contactSection}
        >
            <div
                className="absolute -top-28 w-full hidden md:block"
            >
                <FooterContact
                    className={"w-full h-fit"}
                    fill={"fill-zinc-800 dark:fill-zinc-950 transition-all duration-600"}
                />
            </div>
            <div
                className="max-w-2xl w-full h-full hidden md:block z-10"
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
                ref={content}
            >
                <h2
                    className="text-white text-[2rem] font-Sora font-bold content-1"
                >
                    Entre em contato comigo
                </h2>

                <LinksContainer
                    showName="true"
                    className={"content-2 !text-zinc-200"}
                />

                <BtnDownload
                    file={CV}
                    title={"Baixar CV"}
                    className={"!border-white !text-white content-3"}
                />

                <div
                    className="w-full flex justify-center content-4"
                >
                    <BtnNavigation
                        type="arrow"
                        position={0}
                        className={"!p-0 border-none !text-white -rotate-90 !rounded-full"}
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactSection