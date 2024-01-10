import myWorks from "../../db/myWorks"
import CardProjects from "../box/cardProjects"
import BtnNavigation from "../buttons/buttonNavigation"

const WorksSection = ({ refs }) => {
    return (
        <section
            className="w-screen h-screen bg-zinc-50 flex items-center"
            ref={refs.projectsSection}
        >
            <main
                className="flex flex-col items-center gap-6"
            >
                <div
                    className="w-full max-w-5xl border-x-2 overflow-hidden"
                >
                    <h2
                        ref={refs.title}
                        className="font-sora text-[6rem] font-bold text-zinc-800 uppercase text-center"
                    >
                        Projetos
                    </h2>
                </div>

                <div
                    className="flex gap-8 justify-center w-screen"
                    ref={refs.slideWorks}
                >
                    {
                        myWorks.map(works => <CardProjects
                            auth={works.auth}
                            description={works.description}
                            image={works.image}
                            name={works.name}
                            time={works.time}
                        />)
                    }
                </div>

                <button
                    onMouseEnter={e => console.log(e)}
                    className="btn-style"
                >
                    Mais trabalhos
                </button>

                <BtnNavigation
                    type="arrow"
                    position={6000}
                    className={"!p-0 border-none rotate-90 !rounded-full"}
                />

            </main>
        </section>
    )
}

export default WorksSection