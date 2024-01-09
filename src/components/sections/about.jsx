import BtnNavigation from "../buttons/buttonNavigation";

export default function AboutSection({ refs }) {
    return (
        <section
            className="flex gap-5 h-screen w-screen"
            id="sectionAbout"
        >
            <div
                className="max-w-2xl w-full h-full"
                ref={refs.imageAbout}
            >
                <img
                    className="w-full h-full object-cover grayscale"
                    src={"https://images.pexels.com/photos/5749818/pexels-photo-5749818.jpeg?auto=compress&cs=tinysrgb&w=600"}
                    alt="Rômullo Melo"
                    draggable={false}
                />
            </div>
            <div
                className="flex flex-col justify-center gap-14"
            >
                <div
                    className="max-w-2xl flex flex-col gap-6 "
                    ref={refs.contentAbout}
                >
                    <h2
                        className="font-sora font-bold text-[2rem] text-zinc-800"
                    >
                        Um pouco sobre eu
                    </h2>
                    <div
                        className="flex flex-col gap-2"
                    >
                        <p
                            className="font-lato text-zinc-700 leading-relaxed text-base"
                        >
                            Meu nome é Rômullo Melo Oliveira, tenho 20 anos e sou um programador especializado em front-end. Graduei-me em Desenvolvimento de Sistemas na ETEC Drª Ruth Cardoso, São Vicente, SP, e venho construindo minha carreira nessa área há dois anos.

                        </p>
                        <p
                            className="font-lato text-zinc-700 leading-relaxed text-base"
                        >
                            Participei ativamente do desenvolvimento do projeto PAWSY, uma experiência enriquecedora que contribuiu para meu crescimento profissional. Não tenho medo de errar, encaro cada desafio como uma oportunidade de aprendizado. Estou sempre disposto a aprender e também a compartilhar meu conhecimento.
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-col items-center"
                    ref={refs.btnNavTwo}
                >
                    <p className="pointer-events-none text-sm">Continuar</p>
                    <BtnNavigation
                        type="arrow"
                        position={2000}
                        className={"!p-0 border-none rotate-90"}
                    />
                </div>
            </div>
        </section>
    )
}