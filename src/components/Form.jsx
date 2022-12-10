import { useState } from "react"
import { PaperPlane } from "phosphor-react"


export default function Form(){
    const [email, setEmail] = useState({})
    const [message, setMessage] = useState({
        message: ''
    })
    const [errorEmail, setErrorEmail] = useState(false)    
    const [errorMessage, setErrorMessage] = useState(false)

    function validate(values){
        if(values.message != undefined){
            if(values.message.length < 100){
                setErrorMessage(true)
            }
            else {
                if(values.message.includes('     ')){
                    setErrorMessage(true)
                }
                else{
                    setErrorMessage(false)
                }
            }
        }
        if(values.email != undefined){
            if(!values.email.includes("@") || values.email.includes(" ") || values.email.split("@")[1] == '' || values.email.split("@")[1].length < 5){
                setErrorEmail(true)
            }
            else {
                setErrorEmail(false)
            }
        }
    }
    return(
        <form 
            action='https://api.staticforms.xyz/submit'
            method='POST'
            className='flex flex-col gap-4 max-w-lg mt-8 text-white'
            // onSubmit={(e)=>{
            //     e.preventDefault()
            // }}
        >
            <input type="hidden" name="accessKey" value="a774308e-744c-4f58-aff5-f3f5c45fd670"/>
            <input type="hidden" name="redirectTo" value="https://portifolio-rom013.vercel.app/"/>
            
            <input 
                type="text" 
                name="email"
                placeholder='Email' 
                id="email" 
                required
                className={`py-3 px-6 bg-blue-900/[.25] focus:outline-none border border-transparent focus:border-blue-400 transition duration-500 focus:shadow-shadow-3 ${errorEmail ? `border-red-500`: `border-transparent`}`} 
                autoComplete='true'
                value={email.value}
                onChange={(e)=>{
                    setEmail({email: e.target.value})
                }}
                onBlur={(e)=>{
                    validate(email)
                }}
            />
            <div className="relative">
                <textarea 
                    name="message" 
                    id="areaText" 
                    required 
                    placeholder='Mensagem' 
                    maxLength={300} 
                    className={`py-3 px-6 w-full bg-blue-900/[.25] h-[220px] resize-none focus:outline-none border border-transparent focus:border-blue-400 transition duration-500 focus:shadow-shadow-3 ${errorMessage ? `border-red-500`: `border-transparent`}`} 
                    autoComplete='true' 
                    onChange={(e)=>{
                        setMessage({message: e.target.value})
                    }}
                    onInput={(e)=>{
                        validate(message)
                    }}
                >
                    
                </textarea>
                <span className={`absolute bottom-3 right-3 text-gray-600 font-Orbitron text-xs ${message.message.length >= 100 ? "text-green-400 text-shadow": null}`}>
                    {message.message.length}/300
                </span>  

            </div>

            <button type="submit" disabled={!errorEmail && !errorMessage ? false : true} className={`disabled:bg-cyan-700 disabled:cursor-not-allowed  hover:bg-gradient-2 text-2xl flex items-center bg-blue-700 gap-3 px-6 py-1 w-fit shadow-shadow-3 polygon-2 btn-send transition duration-500 focus:shadow-shadow-3 `}>
                Enviar<PaperPlane size={24} className="rotate-90" />
            </button>
        </form>
    )
}

/*
    
    -- usar o blur para validar o campo
    -- alterar cor da borda caso a validação error
    -- ativar o botão quando todos os campos estiverem true


*/
