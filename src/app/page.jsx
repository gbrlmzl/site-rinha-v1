import Header from '../components/Navbar/Header'; 
import Inicio from "../components/Inicio/Inicio";
import { Box } from '@mui/system';





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
