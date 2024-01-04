import mySkills from "../../assets/db/mySkills"
import FooterImage from "../footerImage.jsx"


export default function SkillSection({ refs }) {
    return (
        <section
            ref={refs.skillSection}
            className="flex items-center h-screen w-screen bg-white relative"
        >
            <div
                className="max-w-screen-lg mx-auto w-full flex flex-col gap-8"
            >
                <h2
                    className="font-sora text-[2rem] font-bold"
                >
                    SKILLS
                </h2>

                <div
                    className="flex gap-5 flex-wrap justify-center"
                >
                    {
                        mySkills.map(skill => {
                            return (
                                <div
                                    title={skill.name}
                                    className="px-4 py-2 rounded-lg border border-black grayscale flex items-center gap-2"
                                >
                                    {
                                        skill.icon
                                    }
                                    {
                                        skill.name
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div
                className="absolute bottom-0 w-full"
            >
                <FooterImage />
            </div>
        </section>
    )
}