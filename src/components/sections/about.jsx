import BtnNavigation from "../buttons/buttonNavigation";

export default function AboutSection({ refs }) {
    return (
        <section
            // ref={refs.aboutSection}
            className="flex gap-5 h-screen w-full items-center relative"
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
                className="flex flex-col justify-center gap-14 absolute md:relative bg-white md:bg-inherit mx-10 md:mx-0 p-6 md:p-0"
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
                            Meu nome é Rômullo Melo Oliveira, sou um programador especializado em front-end, com uma trajetória marcada por grandes projetos. Obtive minha formação em Desenvolvimento de Sistemas na ETEC Drª Ruth Cardoso, São Vicente, SP, e venho construindo minha carreira nessa área há dois anos.

                        </p>
                        <p
                            className="font-lato text-zinc-700 leading-relaxed text-base"
                        >
                            Encaro cada desafio como uma oportunidade de aprendizado, sem medo de errar, e busco sempre superar as expectativas. Estou pronto para contribuir com minha expertise em projetos desafiadores.
                        </p>
                        <p
                            className="font-lato text-zinc-700 leading-relaxed text-base"
                        >
                            Vamos juntos alcançar resultados excepcionais!
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
                        position={window.innerHeight*2}
                        className={"!p-0 border-none rotate-90 !rounded-full"}
                    />
                </div>
            </div>
        </section>
    )
}