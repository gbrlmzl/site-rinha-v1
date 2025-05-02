import { Box } from "@mui/system";
import Header from "../../components/Navbar/Header";
import ProgramacaoComponent from "../../components/Programacao/ProgramacaoComponent";

export const metadata = {
  title: 'Rinha do Campus IV',
  description: 'Confira a programação do torneio!',
};

function Programacao() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
          <Header />
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ProgramacaoComponent/> 

          </Box>
                   
        </Box>
    );
}

export default Programacao;