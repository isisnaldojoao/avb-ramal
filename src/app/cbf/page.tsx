import Image from "next/image";
import Link from 'next/link';
import grupoFerroeste from "../../../public/logo-grupo-ferroeste.png";
import cbf from '../../../public/cbf_240x130.jpg';
import { ArrowLeft,Search } from 'lucide-react';


export default function Cbf() {
    return (
        <>
            <header className="flex  items-center justify-between p-5">
            <Link className="flex items-center justify-center gap-5" href='/'>
                    <ArrowLeft className="text-2xl"/>
                    <h1 className="text-2xl">Home</h1>

                </Link>

                <div className="w-full flex justify-center">
                <Image
                    data-aos="fade-down"
                    data-aos-duration="1000" // Duração da animação em milissegundos (1 segundo)
                    data-aos-delay="300"
                    src={cbf} 
                    alt="Logo Grupo Ferroeste" 
                    width={200} 
                    height={100} 
                />

                </div>
                
                

                
            </header>
            <section className="w-full  h-[500px] flex bg-blue-900 align-center justify-center p-5" >
                <h1
                data-aos="fade-out"
                data-aos-duration="1500" // Duração da animação em milissegundos (1 segundo)
                data-aos-delay="300"
                className="text-3xl text-white font-bold uppercase">Escolha um ramal</h1>
            </section>
            <section 
            data-aos="fade-up"
            data-aos-duration="1500" // Duração da animação em milissegundos (1 segundo)
            data-aos-delay="300"
            className="flex align-center justify-center">
                <div className="w-[80%] h-auto bg-white mt-[-400px] flex flex-col rounded-xl  box-shadow p-5 align-center ">
                <div className="flex items-center  gap-5 justify-center">
                        <input 
                        className="w-[50%] h-[30px] rounded-lg border border-gray-300 p-5 outline-none"
                        placeholder="ex.: Aciaria"
                        />
                        <Search/>
                    </div>
                    
                    
                    <div className="overflow-x-auto mt-5">
                        <table className="min-w-full table-auto text-left">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 border border-gray-300">Setor</th>
                                    <th className="px-4 py-2 border border-gray-300">Nome</th>
                                    <th className="px-4 py-2 border border-gray-300">Número</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border border-gray-300">Aciaria</td>
                                    <td className="px-4 py-2 border border-gray-300">Ciclano</td>
                                    <td className="px-4 py-2 border border-gray-300">1234</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
