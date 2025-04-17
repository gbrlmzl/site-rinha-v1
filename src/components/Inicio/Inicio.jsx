import Image from 'next/image';
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import SegundaEdicaoInfo from './SegundaEdicaoInfo';
import "@fontsource/archivo-black"; // Import the font from @fontsource

import { Box } from '@mui/system';
import { Typography} from '@mui/material';


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
            A maior fonte de entretenimento do Campus IV 
            
          </Typography>
          
        
      </Box>
      
      <Box>
        <SegundaEdicaoInfo />
      </Box>

    </Box>

  );
}

export default Inicio;
