import './styles/main.css'
import Banner from './components/Banner'
import Profile from './components/Profile'
import Progress from './components/Progress'
import { BoxProject, BoxCellphone, Console } from './components/Box'
import { BtnLink } from './components/Btn'
import { GithubLogo, CodepenLogo, InstagramLogo, LinkedinLogo, DiscordLogo } from 'phosphor-react'
import Form from './components/Form'
import { useState } from 'react'

const icons = {
	"html" : <i className="devicon-html5-plain colored" title="html5"/>,
	"css" : <i className="devicon-css3-plain colored" title='css'/>,
	"js" : <i className="devicon-javascript-plain colored" title='javascript'/>,
	"react" : <i className="devicon-react-original colored" title='reactJS'/>,
	"tailwind" : <i className="devicon-tailwindcss-plain colored" title='tailwindcss'/>,
	"node" : <i className="devicon-nodejs-plain colored" title='nodeJs'/>,
	"mysql" : <i className="devicon-mysql-plain colored" title='MySQL'/>,
	"bootstrap" : <i className="devicon-bootstrap-plain colored" title='Bootstrap'/>
}

function App() {
	const [openCell, setOpenCell] = useState(false)
	setTimeout(()=>{
		setOpenCell(true)
	}, 30000)


	return (
		<div>
			{openCell ? <BoxCellphone/> : null}
			{/* { openConsole ? <Console/> : null } */}
			<Banner />
			<Profile />
			<div className='bar-energy'></div>

			<div className="bg-night-neon min-h-[600px] h-screen bg-cover bg-fixed bg-no-repeat flex items-center justify-center">
				<div className='mx-auto  w-full max-w-5xl p-6'>
					<div className='h-[500px] bg-black/[.5] rounded p-10 border-y-blue-500 border-y-4 backdrop-blur-sm'>
						<span className='text-yellow-400 font-Orbitron font-bold text-4xl'>SKILLS</span>

						<ul className='flex flex-col gap-3 mt-10 h-[300px] overflow-y-auto testff'>
							<Progress progress={90} name={"Design UI"} />
							<Progress progress={90} name={"Tailwind CSS"} />
							<Progress progress={85} name={"HTML & CSS"} />
							<Progress progress={80} name={"Javascript"} />
							<Progress progress={50} name={"React JS"} />
							<Progress progress={40} name={"Bootstap"} />
							<Progress progress={30} name={"MySQL"} />
							<Progress progress={30} name={"C#"} />
						</ul>
					</div>
				</div>
			</div>

			<div className='min-h-[600px]'>
				<div className='p-6 mx-auto w-full max-w-6xl'>
					<p className='text-white font-Orbitron text-4xl text-gradient mb-16  mt-4'>Projetos</p>

					<div className='w-full flex gap-5 flex-wrap justify-center'>
						<BoxProject 
							name={"Site - praia grande"} 
							responsive={true} 
							img={"banner.png"} 
							git={"praia-grande"} 
							icons={
								[
									icons.html,
									icons.css,
									icons.js,
									icons.bootstrap
								]
							}
						/>
						<BoxProject 
							name={"Supertrunfo"}
							responsive={false} 
							img={"greenNeonNight.jpg"} 
							git={"supertrunfo"} 
							icons={
								[
									icons.html,
									icons.css,
									icons.js
								]
							}
						/>
						<BoxProject 
							name={"melo-burgers"}
							responsive={true} 
							img={"night.jpg"} 
							git={"melo-burgers"} 
							icons={
								[
									icons.html,
									icons.css,
									icons.js,
									icons.tailwind
								]
							}
						/>
					</div>


					<p className='w-full text-center text-white mt-8 mb-6 text-xl'>Ver mais projetos</p>
					<div className='w-full flex gap-5 flex-wrap justify-center'>
						<BtnLink link={"https://codepen.io/rom013"} name={"codepen"} icon={CodepenLogo} />
						<BtnLink link={"https://replit.com/@rom013"} name={"replit"} icon={"replit_logo.svg"} />
						<BtnLink link={"https://github.com/rom013"} name={"github"} icon={GithubLogo} />
					</div>
				</div>

			</div>

			<div className='min-h-[600px] mt-16'>
				<div className='p-6 mx-auto w-full max-w-6xl flex gap-5 flex-wrap'>
					<div className='flex-1'>
						<h3 className='text-gradient font-Orbitron text-2xl font-bold'>Entre em contato comigo</h3>
						<Form/>
					</div>
					<div className='flex-1 flex flex-col justify-center items-center gap-4'>
						<Container icon={InstagramLogo} nick={"@romu_013"} link={"#"}/>
						<Container icon={LinkedinLogo} nick={"rômullo melo"} link={"#"}/>
						<Container icon={GithubLogo} nick={"@rom013"} link={"#"}/>
						<Container icon={DiscordLogo} nick={"<rom013/>"} link={"#"}/>
					</div>
				</div>
			</div>
		</div>
	)
}

function Container(props){
	return(
		<a href={props.link} className='flex hover:translate-x-2 transition'>
			<div className='polygon-3 w-12 h-12 bg-gradient-2 flex items-center justify-center text-white'>
				<props.icon size={32}/>
			</div>
			<div className='px-6 py-1 border-t border-r border-b border-blue-800 flex items-center justify-center text-white w-56'>
				<span className='font-Orbitron'>{props.nick}</span>
			</div>
		</a>
	)
}

export default App
