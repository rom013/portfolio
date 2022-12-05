import './styles/main.css'
import Banner from './components/Banner'
import Profile from './components/Profile'
import Progress from './components/Progress'

function App() {
  return (
    <>
      <Banner/>
      <Profile/>
      <div className='bar-energy'></div>

      <div className="bg-night-neon min-h-[600px] h-screen bg-cover bg-fixed bg-no-repeat flex items-center justify-center">
        <div className='mx-auto  w-full max-w-5xl p-6'>
          <div className='h-[500px] bg-black/[.5] rounded p-10 border-y-blue-500 border-y-4 backdrop-blur-sm'>
            <span className='text-yellow-400 font-Orbitron font-bold text-4xl'>SKILLS</span>

            <ul className='flex flex-col gap-3 mt-10 h-[300px] overflow-y-auto testff'>
              <Progress progress={90} name={"Design UI"}/>
              <Progress progress={90} name={"Tailwind CSS"}/>
              <Progress progress={85} name={"HTML & CSS"}/>
              <Progress progress={80} name={"Javascript"}/>
              <Progress progress={50} name={"React JS"}/>
              <Progress progress={30} name={"C#"}/>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
