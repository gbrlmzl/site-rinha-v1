import Image from 'next/image';
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import SegundaEdicaoInfo from './SegundaEdicaoInfo';

import programacaoTorneio from "../../assets/imgs/programacaoTorneio.svg"; 

import { Box } from '@mui/system';
import { Card, Typography} from '@mui/material';


function Inicio() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {xs: 'column', md: 'column'},
        justifyContent: 'center',
        alignItems: 'center',
        //bgcolor: '#000000',
        flexGrow: 1,
        width: '100%',
        minHeight: '100%',
        py: 3,
        px: {xs : 1, md: 5, lg: 10},
        gap:5
        
      }}
    >
      <Box sx={{display: 'flex', justifyContent:"center", alignItems: 'center', width:"100%", px: {xs: 1, md: 5, lg: 10},}}>
        
          <Typography  sx={{fontFamily:"Russo One", fontSize:"1.5rem", color:"white", textAlign:"center" }}>
            Bem-vindo ao site da maior fonte de entretenimento do Campus IV 
            
          </Typography>
          
        
      </Box>
      
      <Box>
        <SegundaEdicaoInfo />
      </Box>

      <Card sx={{display:"flex", alignContent:"center" ,p:{xs: 0.5, md: 1}, mt: 4, background: "#11B5E4",/*background:"linear-gradient(to right, #11B5E4,rgb(255, 252, 253))"*/ width: {xs: "100%", md: "80vw"}, maxWidth: "1000px", mx:"auto"}}>
        <Image src={programacaoTorneio} alt='Programação do torneio' style={{height: "auto", width: "100%"}}></Image>

      </Card>

    </Box>

  );
}

export default Inicio;
