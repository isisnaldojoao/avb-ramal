import Image from "next/image";
import Link from "next/link";
import grupoFerroeste from "../../../public/logo-grupo-ferroeste.png";
import { Pencil, Trash2,ArrowLeft  } from 'lucide-react';

export default function Painel() {
    return (
        <main className="w-full flex flex-col  items-center h-screen gap-8">
            <header className="w-full flex  items-center justify-between p-2 ">
                <Link className="flex items-center justify-center gap-5" href='/'>
                    <ArrowLeft className="text-2xl"/>
                    <h1 className="text-2xl">Sair</h1>

                </Link>
                <Image 
                        src={grupoFerroeste} 
                        alt="Logo Grupo Ferroeste"
                />
            </header>
            
            <form className="w-full  flex  align-center items-center justify-center  bg-black p-4 rounded-lg box-shadow text-white">
                
                
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-center" >Filial</h1>
                    <input className="p-3 h-[30px] border border-gray-300  rounded-lg outline-none" placeholder="nome.sobrenome"/>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-center" >Setor</h1>
                    <input className="p-3 h-[30px] border border-gray-300  rounded-lg outline-none" placeholder="nome.sobrenome"/>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-center" >Nome</h1>
                    <input className="p-3 h-[30px] border border-gray-300  rounded-lg outline-none" placeholder="nome.sobrenome"/>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-center" >Ramal</h1>
                    <input className="p-3 h-[30px] border border-gray-300  rounded-lg outline-none" placeholder="nome.sobrenome"/>
                </div>
                
                <div className="w-[50%] bg-green-500 text-center align-center justify-center mt-2 rounded-lg p-2 cursor-pointer">
                    <h2 className="">Adicionar</h2>
                </div>

                
            </form>

            <div className="w-full flex  items-center justify-center w-full gap-5">
                <h1 className="text-center" >Pesquisar:</h1>
                <input className="w-[80%] p-3 h-[30px] border border-gray-300  rounded-lg outline-none" placeholder="ex.:Filial ou Ramal"/>
            </div>

            <div className="w-full overflow-x-auto mt-5">
                        <table className="min-w-full table-auto text-left">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 border border-gray-300">Filial</th>
                                    <th className="px-4 py-2 border border-gray-300">Setor</th>
                                    <th className="px-4 py-2 border border-gray-300">Nome</th>
                                    <th className="px-4 py-2 border border-gray-300">Número</th>
                                    <th className="px-4 py-2 border border-gray-300">Editar</th>
                                    <th className="px-4 py-2 border border-gray-300">Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border border-gray-300">AVB</td>
                                    <td className="px-4 py-2 border border-gray-300">Aciaria</td>
                                    <td className="px-4 py-2 border border-gray-300">Ciclano</td>
                                    <td className="px-4 py-2 border border-gray-300">1234</td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <Pencil/>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <Trash2/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            </div>

        </main>
    )
}