{/*import Image from 'next/image';
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import rinhaLogo from '../../assets/imgs/rinhaLogo.svg';
import SegundaEdicaoInfo from './SegundaEdicaoInfo';


import { Box, height, margin, minHeight } from '@mui/system';

function Inicio() {
    return(
        <Box sx={{flexDirection:"column", display:"flex", justifyContent:"center", alignItems:"center", bgcolor:"#000000", minHeight:"100%"}} >
            
            
            <SegundaEdicaoInfo></SegundaEdicaoInfo>
        </Box>
    )

}

export default Inicio*/}

import Image from 'next/image';
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import SegundaEdicaoInfo from './SegundaEdicaoInfo';

import { Box } from '@mui/system';
import { Typography, Paper } from '@mui/material';

function Inicio() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column', md: 'column'},
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#000000',
        flexGrow: 1,
        width: '100%',
        minHeight: '100%',
        pt: 3,
        px: {xs : 1, md: 5, lg: 10},
        gap: 8, 
      }}
    >
      <Box sx={{display: 'flex', justifyContent:"center", alignItems: 'center', gap: 2, width:"100%", px: {xs: 1, md: 5, lg: 10},}}>
        
          <Typography  sx={{fontFamily:"Archivo Black", fontSize:"1.5rem", color:"white", textAlign:"center" }}>
            Reunindo as maiores doenças do Campus IV desde 2024 
          </Typography>
          
        
      </Box>
      <SegundaEdicaoInfo />
      <Box>
        <Typography>
            <Image src={rinhaLogoEdicao} width={150} alt="Logo da Rinha do Campus IV" />
        </Typography>
      </Box>

    </Box>

  );
}

export default Inicio;
