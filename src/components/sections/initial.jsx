import Rom01 from "../../assets/img/photo_rom013.png"
import BtnDownload from "../buttons/buttonDownload";
import BtnNavigation from "../buttons/buttonNavigation";
import { LinksContainer } from "../links";
import cv from "../../assets/docs/RomulloMelo.pdf"

export default function InitialSection({refs}) {
    return (
        <section
            // ref={refs.initialSection}
            className="flex flex-col-reverse justify-center my-10 sm:my-0 sm:flex-row gap-5 h-svh w-full"
        >
            <section
                className="px-8 md:flex-1 md:h-full flex flex-col-reverse md:flex-row items-center gap"
            >

                <LinksContainer 
                    className={"md:ml-10 flex-row md:flex-col mt-10"}
                />

                <div
                    className="flex flex-col gap-20 sm:h-full relative justify-around flex-1 items-center"
                >
                    <div
                        className="flex md:block flex-col gap-3"
                    >
                        <p
                            className="font-Sora text-[2rem] text-zinc-950 translate-y-1"
                        >
                            Eu sou
                        </p>
                        <h1
                            className="font-Sora font-bold text-5xl md:text-[4rem] text-zinc-950"
                        >
                            Rômullo Melo
                        </h1>
                        <p
                            className="text-zinc-500 font-Lato text-2xl -translate-y-1"
                        >
                            Desenvolvedor front-end & design UI
                        </p>
                    </div>

                    <div
                        ref={refs.btnNavOne}
                        className={"absolute right-0"}
                    >
                        <BtnNavigation
                            position={window.innerHeight}
                            type="arrow"
                            className={"!p-0 border-none !rounded-full"}
                        />
                    </div>

                    <div
                        className="flex gap-10 flex-col md:flex-row md:justify-center w-full"
                    >
                        <BtnNavigation
                            title={"Conhecer meus trabalhos"}
                            position={window.innerHeight*4}
                            className={"w-full md:w-fit"}
                        />
                        <BtnDownload
                            file={cv}
                            title={"Baixar CV"}
                            className={"w-full md:w-fit"}
                        />
                    </div>

                </div>

            </section>
            <div
                className="w-40 h-40 sm:max-w-2xl sm:w-1/2 sm:h-full self-center rounded-full sm:rounded-none overflow-hidden"
            >
                <img
                    className="w-full h-full object-cover"
                    src={Rom01}
                    alt="Rômullo Melo"
                    draggable={false}
                    ref={refs.imageProfile}
                />
            </div>
        </section>
    )
}