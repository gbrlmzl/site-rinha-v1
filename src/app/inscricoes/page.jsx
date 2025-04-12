import { Box } from '@mui/system';
import CadastroEquipes from '../../components/CadastroDeEquipes/CadastroEquipes';
import Header from '../../components/Navbar/Header'; 


export default function Inscricoes() {
  return (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
    <Header />
    <CadastroEquipes />
    
  </Box>
 
    
  );
}
