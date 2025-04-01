import Image from "next/image";
import CadastroEquipes from '../components/CadastroDeEquipes/CadastroEquipes';
import Header from '../components/Navbar/Header'; 
import Inicio from "@/components/Inicio/Inicio";


export default function Home() {
  return (
  <div className='w-screen h-screen bg-customGray flex flex-col '>
    <Header />
    <Inicio/>
 </div>
    
  );
}
