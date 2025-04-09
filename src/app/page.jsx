import Header from '../components/Navbar/Header'; 
import Inicio from "../components/Inicio/Inicio";
import { Box } from '@mui/system';
import '@fontsource/pacifico';
import '@fontsource/archivo-black'; // Peso padrão (400)
import "@fontsource/rancho"; // Importa o estilo padrão (400)
import '@fontsource/russo-one';






export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{display: "flex", flexGrow: 1 }}>
        <Inicio />
      </Box>
    </Box>
  );
}
