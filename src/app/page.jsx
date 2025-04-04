import Image from "next/image";
import CadastroEquipes from '../components/CadastroDeEquipes/CadastroEquipes';
import Header from '../components/Navbar/Header'; 
import Inicio from "@/components/Inicio/Inicio";
import { Box } from "@mui/system";


export default function Home() {
  return (
    <Box /*sx={{
      width: "100%",
      minHeight: "100vh", // Mantém altura mínima para cobrir a tela
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#F5F5F5", // Cor de fundo suave para neutralidade
      padding: { xs: "8px", sm: "16px", md: "32px", lg: "48px" }, // Ajusta padding conforme resolução
    }}*/ >
      <Header />
      <Inicio/>
    </Box>
  
    
 
    
  );
}
