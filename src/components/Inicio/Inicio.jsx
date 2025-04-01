import Image from 'next/image';
import rinhaLogo from '../../assets/imgs/InfoLogo.png'

function Inicio() {
    return(
        <div className= "flex flex-row justify-between items-center p-10"> 
            <div className="bg-blue-700 text-4xl text-red-500 "><p>Informações sobre a rinha</p></div>
            <div>
                <Image src={rinhaLogo} alt="Logo Rinha do Campus IV" />
            </div>
            

        </div>
    )

}

export default Inicio