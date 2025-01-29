import Image from "next/image";
import grupoFerroeste from "../../../public/logo-grupo-ferroeste.png";

export default function Login() {
    return (
        <main className="w-full flex flex-col items-center justify-center h-screen gap-8">
            <Image 
                    src={grupoFerroeste} 
                    alt="Logo Grupo Ferroeste"
                />
            <form className="w-[350px] h-[250px] flex flex-col align-center items-center justify-center bg-[#B0B0B5;] p-2 rounded-lg box-shadow gap-5">
                
                
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-center" >Login</h1>
                    <input className=" w-[80%] h-[30px] border border-gray-300 p-3 rounded-lg outline-none" placeholder="nome.sobrenome"/>
                </div>
                
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 >Senha</h1>
                    <input  className="w-[80%] h-[30px] border border-gray-300 p-3 outline-none rounded-lg" />
                </div>

                <h2 className="ml-9 text-left self-start">Esqueci minha senha</h2>
            </form>

        </main>
    )
}