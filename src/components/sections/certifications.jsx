import myCertificates from "../../assets/db/myCertificates";
import CardCertificate from "../box/cardCertificate";

export default function CertificationSection({ refs }) {
    return (
        <section
            ref={refs.scroll}
            className="bg-white h-screen w-screen flex items-center"
        >
            <main
                className="max-w-5xl mx-auto w-full flex flex-col gap-8"
            >
                <div>
                    <h2
                        className="font-sora text-[2rem] font-bold text-zinc-900 uppercase"
                    >
                        Certificações
                    </h2>
                    <sub
                        className="text-zinc-700 text-base font-Lato -translate-y-3 block"
                    >
                        Conquistas e qualificações
                    </sub>
                </div>

                <div
                    className="w-full h-[600px] overflow-y-auto grid grid-cols-2 gap-6"
                >
                    {
                        myCertificates.map(certficate => <CardCertificate
                                title={certficate.title}
                                description={certficate.description}
                                time={certficate.time}
                                linkConfirm={certficate.linkConfirm}
                                nameLink={certficate.nameLink}
                            />
                        )
                    }
                </div>
            </main>
        </section>
    )
}