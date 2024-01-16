import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useLayoutEffect, useRef } from "react"
import InitialSection from "./components/sections/initial"
import AboutSection from "./components/sections/about"
import SkillSection from "./components/sections/skill"
import CertificationSection from "./components/sections/certifications"
import WorksSection from "./components/sections/works"
import ContactSection from "./components/sections/contact"
import ButtonThemeMode from "./components/buttons/buttonThemeMode"

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
	const refsContactSection = {
		contactSection: useRef()
	}

	return (
		<main
			id="main"
			className="bg-zinc-50 dark:bg-zinc-950 transition-all duration-700"
		>
			<ButtonThemeMode/>
			<InitialSection
				refs={refsInitialSection}
			/>
			<AboutSection
				refs={refsAboutSection}
			/>

			<SkillSection
				refs={refsSkillSection}
			/>

			<CertificationSection
				refs={refsCertificacionSection}
			/>

			<WorksSection
				refs={refsWorksSection}
			/>

			<ContactSection
				refs={refsContactSection}
			/>

		</main>
	)
}