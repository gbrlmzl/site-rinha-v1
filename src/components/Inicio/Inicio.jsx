import Image from 'next/image';
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import rinhaLogo from '../../assets/imgs/rinhaLogo.svg';


import { Box } from '@mui/system';

function Inicio() {
    return(
        
        <Box flexDirection={"column"} display="flex" justifyContent="center" alignItems="center" bgcolor={"#000000"} >

            
            <Image src={rinhaLogoEdicao} alt="Logo da Rinha do Campus IV" width={400}></Image>
        </Box>

        /*<div className= "flex flex-row justify-between items-center p-10"> 
            <div className="bg-blue-700 text-4xl text-red-500 "><p>Informações sobre a rinha</p></div>
            <div>
                <Image src={rinhaLogo} alt="Logo Rinha do Campus IV" />
            </div>
            

        </div>*/
    )

}

export default Inicio