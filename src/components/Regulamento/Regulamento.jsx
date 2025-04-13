import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Paper} from "@mui/material";
import Image from "next/image";
import rinhaLogo from "../../assets/imgs/rinhaTitleLogo.svg";

const Regulamento = () => {
  return (
    <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'column'},
            
            alignItems: 'center',
            bgcolor: '#000000',
            flexGrow: 1,
            width: '100%',
            minHeight: '100%',
            pt: 3,
            px: {xs : 2, md: 5, lg: 10},
            gap:5
            
          }}
        >
            <Box sx={{display: 'flex', flexDirection:"column",justifyContent:"center", alignItems: 'center', px: {xs: 1, md: 5, lg: 10},}}>
                <Image src={rinhaLogo} alt={"Logo da Rinha do Campus IV"} width={200} height={200}></Image>
                <Typography sx={{fontFamily:"Russo One", fontSize:"1.6rem", color:"white", textAlign:"center" }}>
                    Regulamento
                </Typography>
            </Box>
            <Paper elevation={3} sx={{ display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", p: 2, height: {xs: "auto", md: "auto" }, width: {xs: "100%", md: "auto"},}}>
                <Typography variant="title2" >
                    Jogadores
                </Typography>
                
                <Typography variant="text2">
                    Os jogadores devem sempre manter o espírito esportivo, seguindo as regras estabelecidas
                    pela Riot Games no Código do Invocador. Além disso, os participantes devem cumprir as
                    regras descritas abaixo:
                </Typography>

            </Paper>
           

          
    
        </Box>
  );
}

export default Regulamento;