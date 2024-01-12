import { useEffect } from "react"
import mySkills from "../../db/mySkills.jsx"
import FooterImage from "../footerImage.jsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import BtnNavigation from "../buttons/buttonNavigation.jsx"
import positionNextPage from "../../funcs/positionNextPage.jsx"

gsap.registerPlugin(ScrollTrigger)

export default function SkillSection({ refs }) {
    return (
        <section
            ref={refs.skillSection}
            id="sectionSkill"
            className="flex items-center min-h-svh w-full relative"
        >
            <div
                className="max-w-screen-lg mx-auto px-8 py-10 md:py-0 md:px-0 w-full flex flex-col gap-8"
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
                        mySkills.map((skill, i) => (
                            <div
                                key={skill.name}
                                title={skill.name}
                                className={`px-4 py-2 rounded-lg border border-black flex items-center gap-2 skill-${i}`}
                            >
                                {skill.icon}
                                {skill.name}
                            </div>
                        ))
                    }
                </div>
                <div
                    className="flex justify-center"
                >
                    <BtnNavigation
                        type="arrow"
                        position={positionNextPage()*3}
                        className={"!p-0 border-none rotate-90 !rounded-full"}
                    />
                </div>
            </div>

            <div
                className="absolute bottom-0 w-full"
            >
                <FooterImage
                    className={"w-full h-fit"}
                />
            </div>
        </section>
    )
}