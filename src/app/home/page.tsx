import Image from "next/image";
import grupoFerroeste from "../../../public/logo-grupo-ferroeste.png";
import avb from "../../../public/avb_240x130.jpg";
import cbf from "../../../public/cbf_240x130.jpg";
import cvb from "../../../public/cvb_240x130.jpg";
import dv from "../../../public/dv_240x130.jpg";
import meca from "../../../public/imgpsh_fullsize_anim (1).png";
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <header 
            data-aos="fade-up"
            className="flex align-center items-center justify-between p-5">
                
                <Image 
                    src={grupoFerroeste} 
                    alt="Logo Grupo Ferroeste" 
                    width={200} 
                    height={100} 
                />
            </header>
            <section className="w-full  h-[500px] flex bg-blue-900 align-center justify-center p-5" >
                <h1 
                data-aos="fade-down"
                data-aos-duration="1000" // Duração da animação em milissegundos (1 segundo)
                data-aos-delay="300"
                className="text-3xl text-white font-bold uppercase">Lista de Ramais Grupo Ferroeste</h1>
            </section>
            <section 
            
            className="flex align-center justify-center mb-5">
                <section className="w-[80%] h-auto bg-white mt-[-400px] flex flex-col items-center rounded-xl text-center box-shadow p-5">
                    <h1 className="text-3xl text-blue-900 font-bold uppercase m-5">Selecione a filial</h1>
                    <section className="flex  grid grid-cols-2 gap-5">
                        <Link 
                        data-aos="fade-up"
                        data-aos-duration="1000" // Duração da animação em milissegundos (1 segundo)
                        data-aos-delay="300" // Atraso de 300 milissegundos (0.3 segundos) antes da animação iniciar    
                        href={'/avb'}>
                            <Image className="transition-all hover:scale-110" src={avb} alt="avb"/>
                        </Link>
                        
                        <Link 
                        data-aos="fade-up"
                        data-aos-duration="1500" // Duração da animação em milissegundos (1 segundo)
                        data-aos-delay="300" // Atraso de 300 milissegundos (0.3 segundos) antes da animação iniciar   
                        href={'/cbf'}>
                            <Image className="transition-all hover:scale-110" src={cbf} alt="cbf"/>
                        </Link>
                        
                        <Link
                        data-aos="fade-up"
                         data-aos-duration="2000" // Duração da animação em milissegundos (1 segundo)
                         data-aos-delay="300" // Atraso de 300 milissegundos (0.3 segundos) antes da animação iniciar   
                        href={'/cvb'}>
                            <Image className="transition-all hover:scale-110"src={cvb} alt="cvb"/>
                        </Link>
                        
                        <Link
                        data-aos="fade-up"
                         data-aos-duration="2500" // Duração da animação em milissegundos (1 segundo)
                         data-aos-delay="300" // Atraso de 300 milissegundos (0.3 segundos) antes da animação iniciar   
                        href={'/dv'}>
                            <Image className="transition-all hover:scale-110" src={dv} alt="dv"/>
                        </Link>
                        
                        <Link
                        data-aos="fade-up"
                         data-aos-duration="3000" // Duração da animação em milissegundos (1 segundo)
                         data-aos-delay="300" // Atraso de 300 milissegundos (0.3 segundos) antes da animação iniciar   
                        href={'/meca'}>
                            <Image className="transition-all hover:scale-110" src={meca} width={300} height={100} alt="dv"/>
                        </Link>
                        
                    </section>
                </section>
            </section>
        </>
    );
}
