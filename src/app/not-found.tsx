'use client';

import  Link  from 'next/link';
import  Image  from 'next/image';
import grupoFerroeste from "../../public/logo-grupo-ferroeste.png";

export default function NotFound() {
    return (
        <main>
            <header className="flex align-center items-center justify-between p-5">
                
                <Image 
                    src={grupoFerroeste} 
                    alt="Logo Grupo Ferroeste" 
                    width={200} 
                    height={100} 
                />
            </header>
            <section className="w-full  h-[500px] flex bg-blue-900 align-center justify-center p-5" >
                <h1 className="text-3xl text-white font-bold uppercase">Lista de Ramais Grupo Ferroeste</h1>
            </section>
            <section className="flex align-center justify-center">
                <section className="w-[80%] h-auto bg-white mt-[-400px] flex flex-col items-center rounded-xl text-center box-shadow p-5">
                    <h1 className="text-3xl text-blue-900 font-bold uppercase m-5">Ops! Houve um erro</h1>
                    <p>Essa pagina não existe!</p>
                    <Link className='hover:text-blue-900' href={'/'}>
                        Volta para a home
                    </Link>
                </section>
            </section>
        </main>
    )
}