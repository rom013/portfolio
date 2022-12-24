import { BtnLevel } from "./Btn"
import { useState } from 'react';

export default function Profile() {
    const [level, setLevel] = useState(1)

    return (
        <div className="lg:h-screen min-h-[600px] flex items-center py-10" id="test">
            <div className="flex-col lg:flex-row flex justify-center items-center max-w-7xl mx-auto px-6  gap-8 w-full lg:h-auto">
                <div className="flex flex-col items-center gap-8">
                    <div className="hidden lg:block img-profile shadow-shadow-2">
                        <img src="https://github.com/rom013.png" alt=""/>
                    </div>
                    <div className="flex gap-5 flex-wrap justify-center">
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
                <div className="bio lg:w-10 h-full flex-1 text-white p-2 w-full my-6">
                    <Bio level={level}/>
                </div>
            </div>
        </div>
    )
}

function Bio(props){
    return(
        <>
            <h3 className="text-gradient text-gradient">Olá! Eu sou</h3>
            <h2 className="text-4xl font-bold mb-11">Rômullo Melo</h2>
            
            { props.level==1?
                <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    Sou desenvolvedor FrontEnd há mais de 1 ano e atualmente estou no 1º módulo do curso de desenvolvimento de sistemas na ETEC Drª Ruth Cardoso. Tenho boas skills para construir um belo projeto de website.
                </p>

            : null }
            { props.level==2?
            <>
                <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    Sou desenvolvedor FrontEnd há mais de 1 ano, comecei os meus estudos em programação de forma voluntaria e sozinho. Hoje, eu consigo criar e desenvolver projetos do zero utilizando todos os meus conhecimentos em HTML, CSS e JavaScript. E pela primeira vez estou cursando um técnico focado na área de TI, atualmente estou no 1º módulo do curso técnico em desenvolvimento de sistemas na escola técnica Dra. Ruth Cardoso. 
                </p>
                <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                    Já desenvolvi vários projetos ao longo desse tempo como, caderno virtual, gtaRP, websites e outros projetos.
                </p>
            </>
            : null }
            { props.level==3?
                <>
                    <p className="font-RobotoCondensed leading-relaxed text-base my-2">
                        Sou desenvolvedor FrontEnd há mais de 1 ano, comecei os meus estudos em programação de forma voluntaria e sozinho. Hoje, estou cursando técnico em desenvolvimento em sistemas na escola técnica Dra. Ruth Cardoso. Gosto muito do que faço e pretendo melhorar mais ainda os meus conhecimentos na área. 
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
                                <span className="font-bold">Experiência:</span> <span>1 ano e 9 meses</span>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <span className="font-bold">Celular:</span><a href="https://api.whatsapp.com/send?phone=5513991302403&text=Ol%C3%A1%F0%9F%91%8B!!%20Estou%20vendo%20o%20seu%20portf%C3%B3lio." target="_blank" className="hover:text-purple-300 hover:underline"> +55 (13) 99130-2403</a>
                            </li>
                            <li>
                                <span className="font-bold">Email:</span> romullomelo0130@gmail.com
                            </li>
                            <li>
                                <span className="font-bold">Linkdin:</span> <a href="https://www.linkedin.com/in/r%C3%B4mullo-melo-124007227/" target="_blank" className="hover:text-purple-300 hover:underline">Rômullo Melo</a>
                            </li>
                        </ul>
                    </div>
                </>
            : null }
        </> 
    )
}

function date(){
    let year = 2021, month = 3
    const currentYear = new Date().getFullYear()
    let currentMonth = 0

    year = currentYear - year
    currentMonth = year * 12
    
    while(currentMonth > 12){
        year++
        currentMonth -= 12
    }

    // if(currentYear > year){
    //     if(currentMonth < month){
    //         month = month - currentMonth
    //         year--
    //     }
    // }
    return `${year} ano e ${currentMonth} messes`

}