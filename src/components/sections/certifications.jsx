import { useEffect, useRef, useState } from "react";
import myCertificates from "../../db/myCertificates";
import CardCertificate from "../box/cardCertificate";
import BtnNavigation from "../buttons/buttonNavigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function CertificationSection({ refs }) {
    const boxCertificate = useRef()
    const certificateSection = useRef()

    const [heightSection, setHeightSection] = useState()

    useEffect(() => {
        setHeightSection(certificateSection.current.clientHeight);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: certificateSection.current,
                // markers: true,
                start: "top center",
                end: "center center",
                scrub: 2
            }
        })

        myCertificates.map((_, i) => {
            const selector = `.cert-${i}`
            tl.fromTo(
                selector,
                {
                    xPercent: 200,
                    scale: 0
                },
                {
                    xPercent: 0,
                    scale: 1
                }
            )
        })


        return () => tl.kill()
    }, [])

    return (
        <section
            ref={certificateSection}
            className=" h-svh w-full flex items-center"
        >
            <main
                className="max-w-5xl mx-auto px-8 w-full flex flex-col gap-8"
            >
                <div>
                    <h2
                        className="subtitle"
                    >
                        Certificações
                    </h2>
                    <sub
                        className="text-zinc-700 dark:text-zinc-200 text-base font-Lato -translate-y-3 block"
                    >
                        Conquistas e qualificações
                    </sub>
                </div>

                <div
                    className="w-full max-h-[600px] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden"
                >
                    {
                        myCertificates.map((certficate, key) => <CardCertificate
                            title={certficate.title}
                            description={certficate.description}
                            time={certficate.time}
                            linkConfirm={certficate.linkConfirm}
                            nameLink={certficate.nameLink}
                            key={key}
                            boxCertificate={boxCertificate}
                            index={key}
                        />
                        )
                    }
                </div>

                <div
                    className="flex justify-center"
                >
                    <BtnNavigation
                        height={heightSection * 4}
                        type="arrow"
                        className={"!p-0 border-none rotate-90 !rounded-full"}
                    />
                </div>
            </main>
        </section>
    )
}