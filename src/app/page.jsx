import Header from '../components/Navbar/Header'; 
import Inicio from "../components/Inicio/Inicio";
import { Box } from '@mui/system';



export const metadata = {
  title: 'Rinha do Campus IV',
  description: 'Bem-vindo ao site oficial da Rinha do Campus IV.',
  appleWebApp: {
    title: 'Rinha',
  },
};



export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowX:"hidden" }}>
      <Header />
      <Box sx={{display: "flex", flexGrow: 1 }}>
        <Inicio />
      </Box>
    </Box>
  );
}
