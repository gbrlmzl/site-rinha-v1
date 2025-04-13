import Header from '../../components/Navbar/Header';
import {Box} from '@mui/system';

import RegulamentoComponent from '../../components/Regulamento/Regulamento';

export default function Regulamento() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
      <Header />
      <RegulamentoComponent/>

      
    </Box>
  );
}