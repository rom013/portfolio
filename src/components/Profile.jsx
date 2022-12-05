import { BtnLevel } from "./Btn"
import { useState } from 'react';

export default function Profile() {
    const [level, setLevel] = useState(1)

    return (
        <div className="h-screen min-h-[600px] flex items-center py-10" id="test">
            <div className="flex justify-center items-center max-w-7xl mx-auto px-6 gap-8 w-full">
                <div className="flex flex-col items-center gap-8">
                    <div className="img-profile shadow-shadow-2">
                        <img src="https://github.com/rom013.png" alt=""/>
                    </div>
                    <div className="flex gap-5">
                        <button onClick={()=>{
                            setLevel(1)
                        }}>
                            <BtnLevel level={1}/>
                        </button>
                        <button onClick={()=>{
                            setLevel(2)
                        }}>
                            <BtnLevel level={2}/>
                        </button>
                        <button onClick={()=>{
                            setLevel(3)
                        }}>
                            <BtnLevel level={3}/>
                        </button>
                        
                    </div>
                </div>
                <div className="bio w-10 h-full flex-1 text-white p-2">
                    <Bio level={level}/>
                </div>
            </div>
        </div>
    )
}

function Bio(props){
    return(
        <>
            <h3 className="text-gradient">Olá! Eu sou</h3>
            <h2 className="text-4xl font-bold mb-11">Rômullo Melo</h2>
            
            { props.level==1?
                <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    Estudo front-end há mais de 1 ano e atualmente estou cursando técnico em desenvolvimento de sistemas. Comecei a gostar da área no início de 2021, quando eu participei da Imersão Dev da Alura.
                </p>

            : null }
            { props.level==2?
            <>
                <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    Estudo front-end há mais de 1 ano e atualmente estou cursando técnico em desenvolvimento de sistemas. Comecei a gostar da área no início de 2021, quando eu participei da Imersão Dev da Alura. 
                </p>
                <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    A minha primeira linguagem de programação foi Javascript e em seguida HTML e CSS. Gradualmente fui conhecendo e testando novas tecnologias como: ReactJS, SASS e NodeJS.
                </p>
                <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    Já trabalhei como Freelancer em uma cidade de GTA RP e também já desenvolvi um site de um jogo, todo do zero.    
                </p>
                <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    Atualmente estou no primeiro modulo de desenvolvimento de sistemas na ETEC DRª Ruth Cardoso.     
                </p>
            </>
            : null }
            { props.level==3?
                <>
                    <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    Estudo front-end há mais de 1 ano e atualmente estou cursando técnico em desenvolvimento de sistemas. Comecei a gostar da área no início de 2021, quando eu participei da Imersão Dev da Alura. 
                    </p>
                    <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                        A minha primeira linguagem de programação foi Javascript e em seguida HTML e CSS. Gradualmente fui conhecendo e testando novas tecnologias como: ReactJS, SASS e NodeJS.
                    </p>
                    <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                        Atualmente estou no primeiro modulo de desenvolvimento de sistemas na ETEC DRª Ruth Cardoso.     
                    </p>

                    <div className="flex bg-[#212121] border border-blue-500 p-6 justify-between gap-5 mt-6  flex-wrap lg:flex-nowrap">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <span className="font-bold">Idade:</span> {new Date().getFullYear() - 2003} anos
                            </li>
                            <li>
                                <span className="font-bold">Endereço:</span> Santos - SP, Brasil
                            </li>
                            <li>
                                <span className="font-bold">Experiência:</span> ~ 1 ano e 8 messes
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <span className="font-bold">Celular:</span> +55 (13) 99130-2403
                            </li>
                            <li>
                                <span className="font-bold">Email:</span> romullomelo0130@gmail.com
                            </li>
                            <li>
                                <span className="font-bold">Discord:</span> 
                            </li>
                        </ul>
                    </div>
                </>
            : null }
        </> 
    )
}