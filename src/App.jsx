import Rom01 from "./assets/img/photo_rom013.png"
import BtnDownload from "./components/buttons/buttonDownload"
import { LinksContainer } from "./components/links"
import cv from "./assets/docs/RomulloMelo.pdf"
import BtnNavigation from "./components/buttons/buttonNavigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
	const scrollX = useRef()
	const imageProfile = useRef()
	const test = useRef()

	useEffect(() => {

		gsap.fromTo(
			imageProfile.current,
			{
				opacity: 1
			},
			{
				scrollTrigger: {
					trigger: imageProfile.current,
					start: "200px top",
					end: "2000px top",
					markers: true,
					scrub: true,
					toggleActions: "play pause reverse reset", /*
						String - Determina como a animação vinculada é controlada nos 4 locais de 
						alternância distintos - onEnter, onLeave, onEnterBack e onLeaveBack, nessa 
						ordem. O padrão é reproduzir nenhum, nenhum, nenhum. Portanto, 
						toggleActions: "play pause resume reset" reproduzirá a animação ao entrar, 
						pausará ao sair, retomará ao entrar novamente para trás e redefinirá (retrocederá 
						ao início) ao rolar todo o caminho de volta, além do início. Você pode usar qualquer
						uma das seguintes palavras-chave para cada ação: 
						"play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".
					*/
				},
				opacity: 0
			}
		)

		const tlX = gsap.timeline({
			scrollTrigger: {
				trigger: "#main",
				start: "top top",
				end: "2000 top",
				scrub: true,
				pin: true
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
		return (() => tlX.kill())
	}, [])



	return (
		<main
			id="main"
		>
			<div
				ref={scrollX}
				className="flex w-[200vw]"
			>
				<section
					className="flex gap-5 h-screen w-screen"
				>
					<section
						className="flex-1 h-full flex items-center gap"
					>

						<LinksContainer />

						<div
							className="flex flex-col gap-20 h-full justify-around flex-1 items-center"
						>
							<div>
								<p
									className="font-Sora text-[2rem] text-zinc-950 translate-y-3"
								>
									Eu sou
								</p>
								<h1
									className="font-Sora font-bold text-[4rem] text-zinc-950"
								>
									Rômullo Melo
								</h1>
								<p
									className="text-zinc-500 font-Lato text-2xl -translate-y-3"
								>
									Desenvolvedor front-end & design UI
								</p>
							</div>

							<div
								className="flex gap-10"
							>
								<BtnNavigation
									title={"Conhecer meus trabalhos"}
									position={2000}
								/>
								<BtnDownload
									file={cv}
									title={"Baixar CV"}
								/>
							</div>

						</div>

					</section>
					<div
						className="max-w-2xl w-1/2 h-full"
					>
						<img
							className="w-full h-full object-cover"
							src={Rom01}
							alt="Rômullo Melo"
							draggable={false}
							ref={imageProfile}
						/>
					</div>
				</section>
				<section
					className="flex gap-5 h-screen bg-violet-600 w-screen"
					ref={test}
				>
					
				</section>
			</div>
		</main>
	)
}