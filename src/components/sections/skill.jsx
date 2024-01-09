import { useEffect } from "react"
import mySkills from "../../db/mySkills.jsx"
import FooterImage from "../footerImage.jsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SkillSection({ refs }) {

    useEffect(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#sectionSkill",
            start: "2800 center",
            toggleActions: "play pause reverse reset",
            // markers: true,
            scrub: 5,
            pin: true
          }
        });
      
        mySkills.forEach((_, i) => { // "_" é uma maneira de informar aos leitores do código que o valor não é relevante para a lógica da função
          const selector = `.skill-${i}`;
          tl.fromTo(
            selector,
            { duration: 1, y: 200, opacity: 0 },
            { duration: 1, y: 0, opacity: 1 }
          );
        });
      
        return () => tl.kill();
      }, []);
      

    return (
        <section
            ref={refs.skillSection}
            id="sectionSkill"
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
                        mySkills.map((skill, i) => (
                            <div
                                key={skill.name}
                                title={skill.name}
                                className={`px-4 py-2 rounded-lg border border-black grayscale flex items-center gap-2 skill-${i}`}
                            >
                                {skill.icon}
                                {skill.name}
                            </div>
                        ))
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