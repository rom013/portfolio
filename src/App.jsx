import BtnNavigation from "./components/buttons/buttonNavigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import InitialSection from "./components/sections/initial"
import AboutSection from "./components/sections/about"
import SkillSection from "./components/sections/skill"
import CertificationSection from "./components/sections/certifications"
import CardProjects from "./components/box/cardProjects"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
	const refsInitialSection = {
		btnNavOne: useRef(),
		imageProfile: useRef()
	}
	const refsAboutSection = {
		imageAbout: useRef(),
		btnNavTwo: useRef(),
		contentAbout: useRef()
	}
	const refsSkillSection = {
		skillSection: useRef()
	}
	const refsCertificacionSection = {
		scroll: useRef()
	}
	
	const refsWorksSection = {
		projectsSection: useRef(),
		slideWorks: useRef(),
		title: useRef()
	}

	const scrollX = useRef()


	useEffect(() => {

		gsap.fromTo(
			refsInitialSection.imageProfile.current,
			{
				opacity: 1,
				scale: 1
			},
			{
				scrollTrigger: {
					trigger: refsInitialSection.imageProfile.current,
					start: "200px top",
					end: "2000px top",
					// markers: true,
					scrub: true,
					toggleActions: "play pause reverse reset",
				},
				opacity: 0,
				scale: 0
			}
		)

		const tlX = gsap.timeline({
			scrollTrigger: {
				trigger: "#main",
				start: "top top",
				end: "7800 top",
				scrub: true,
				pin: true,
				// markers: true,
				toggleActions: "play pause reverse reset",
			}
		})

		tlX
			.fromTo(
				scrollX.current,
				{
					xPercent: 0
				},
				{
					xPercent: -50,
					ease: "none"
				}
			)
			.fromTo(
				refsInitialSection.btnNavOne.current,
				{
					y: 0,
				},
				{
					scrollTrigger: {
						trigger: refsInitialSection.imageProfile.current,
						start: "200 top",
						end: "900 center",
						scrub: 2,
						// markers: true
					},
					y: 480,
				}
			)
			.fromTo(
				refsAboutSection.imageAbout.current,
				{
					opacity: 0,
					scale: 0
				},
				{
					scrollTrigger: {
						trigger: refsAboutSection.imageAbout.current,
						start: "200px top",
						end: "1500px top",
						// markers: true,
						scrub: true,
					},
					opacity: 1,
					scale: 1
				}
			)
			.fromTo(
				refsAboutSection.contentAbout.current,
				{
					x: 800,
					rotate: 180
				},
				{
					scrollTrigger: {
						trigger: refsAboutSection.imageAbout.current,
						start: "200px top",
						end: "1500px top",
						// markers: true,
						scrub: 2,
					},
					x: 0,
					rotate: 0
				}
			)
			.fromTo(
				refsAboutSection.btnNavTwo.current,
				{
					y: 500
				},
				{
					y: 0
				}
			)
			.to(
				refsSkillSection.skillSection.current,
				{
					yPercent: -100,
					ease: "none"
				}
			)
			.to(
				refsCertificacionSection.scroll.current,
				{
					yPercent: -200,
					ease: "none",
				}
			)
			.to(
				refsWorksSection.projectsSection.current,
				{
					yPercent: -300,
					ease: "none",
				}
			)
			.fromTo(
				refsWorksSection.slideWorks.current,
				{
					xPercent: 0
				},
				{
					scrollTrigger: {
						trigger: refsWorksSection.projectsSection.current,
						start: "5200 top",
						end: "6000 center",
						// markers: true,
						scrub: 2,
					},
					xPercent: -50
				}
			)
			.fromTo(
				refsWorksSection.title.current,
				{
					xPercent: -100
				},
				{
					scrollTrigger: {
						trigger: refsWorksSection.projectsSection.current,
						start: "5200 top",
						markers: true,
						scrub: 2,
					},
					xPercent: 0
				}
			)


		return (() => {
			tlX.kill()
		})
	}, [])

	return (
		<main
			id="main"
			className="!h-[100vh] overflow-hidden"
		>
			<div
				ref={scrollX}
				className="flex w-[200vw]"
			>
				<InitialSection
					refs={refsInitialSection}
				/>
				<AboutSection
					refs={refsAboutSection}
				/>
			</div>

			<SkillSection
				refs={refsSkillSection}
			/>

			<CertificationSection
				refs={refsCertificacionSection}
			/>

			<section
				className="w-screen h-screen bg-zinc-50 flex items-center"
				ref={refsWorksSection.projectsSection}
			>
				<main
					className="flex flex-col items-center gap-6"
				>
					<div
						className="w-full max-w-5xl border-x-2 overflow-hidden"
					>
						<h2
							ref={refsWorksSection.title}
							className="font-sora text-[6rem] font-bold text-zinc-800 uppercase text-center"
						>
							Projetos
						</h2>
					</div>

					<div
						className="flex gap-8 justify-center w-screen"
						ref={refsWorksSection.slideWorks}
					>
						<CardProjects/>
						<CardProjects/>
						<CardProjects/>
						<CardProjects/>
						<CardProjects/>
						<CardProjects/>
					</div>

					<button
						onMouseEnter={e=>console.log(e)}
						className="px-8 py-5 rounded-lg border-2 border-zinc-600 text-lg font-Lato w-fit hover:bg-zinc-900 hover:scale-95 hover:text-white transition-all duration-300"
					>
						Mais trabalhos
					</button>

				</main>
			</section>

		</main>
	)
}