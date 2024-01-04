import BtnNavigation from "./components/buttons/buttonNavigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import InitialSection from "./components/sections/initial"
import AboutSection from "./components/sections/about"

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

	const scrollX = useRef()
	const skillSection = useRef()
	const scrollYII = useRef()

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
				end: "4800 top",
				scrub: true,
				pin: true,
				markers: true,
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
				skillSection.current,
				{
					yPercent: -100,
					ease: "none"
				}
			)
			.to(
				scrollYII.current,
				{
					yPercent: -200,
					ease: "none",
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


			<section
				ref={skillSection}
				className="flex gap-5 h-screen w-screen bg-white"
			>
				slide 03
			</section>
			<section
				ref={scrollYII}
				className="bg-red-400 h-screen flex justify-center items-center w-screen"
			>
				slide 04
			</section>

		</main>
	)
}