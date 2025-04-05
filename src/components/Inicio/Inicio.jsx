import Image from 'next/image';
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import rinhaLogo from '../../assets/imgs/rinhaLogo.svg';


import { Box, height, margin, minHeight } from '@mui/system';

function Inicio() {
    return(
        <Box flexDirection={"column"} display="flex" justifyContent="center" alignItems="center" bgcolor={"#000000"} minHeight="100vh" >
            <Image src={rinhaLogoEdicao} alt="Logo da Rinha do Campus IV" width={400}></Image>
        </Box>
    )

}

export default Inicio