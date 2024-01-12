import myWorks from "../../db/myWorks"
import positionNextPage from "../../funcs/positionNextPage"
import CardProjects from "../box/cardProjects"
import BtnNavigation from "../buttons/buttonNavigation"

const WorksSection = ({ refs }) => {
    return (
        <section
            className=" h-screen flex items-center overflow-hidden"
            ref={refs.projectsSection}
        >
             <main
                className="flex flex-col items-center gap-6 "
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
                        myWorks.map((works, key) => <CardProjects
                            auth={works.auth}
                            description={works.description}
                            image={works.image}
                            name={works.name}
                            time={works.time}
                            key={key}
                        />)
                    }
                </div>

                <button
                    className="btn-style"
                >
                    Mais trabalhos
                </button>

                <BtnNavigation
                    type="arrow"
                    position={positionNextPage()*5}
                    className={"!p-0 border-none rotate-90 !rounded-full"}
                />

            </main> 
        </section>
    )
}

export default WorksSection