import Header from '../../../components/Navbar/Header';
import {Box} from '@mui/system';
import FaseFinalComponent from "../../../components/FaseFinal/FaseFinalCalendar";
import { Card } from '@mui/material';



export default function FaseFinalCalendario() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
      <Header />

      <FaseFinalComponent/>

      
      
        
      
    </Box>
  );
}