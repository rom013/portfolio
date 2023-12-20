import Rom01 from "./assets/img/photo_rom013.png"
import BtnDownload from "./components/buttons/buttonDownload"
import { LinksContainer } from "./components/links"
import cv from "./assets/docs/RomulloMelo.pdf"
import BtnNavigation from "./components/buttons/buttonNavigation"

export default function App() {
	return (
		<main>
			<section
				className="flex gap-5 h-screen"
			>
				<section
					className="flex-1 h-full flex items-center gap"
				>

					<LinksContainer/>

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
					/>
				</div>
			</section>
		</main>
	)
}