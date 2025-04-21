import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import gravesBackground from "../../assets/imgs/gravesSplashFHD.png";
import Link from "next/link";

function InfoBox() {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Imagem de fundo */}
      <Image
        src={gravesBackground}
        alt="Graves"
        
        style={{height: "100vh", width: "100vw"}}
        objectFit="cover"
        priority
      />

      {/* Texto por cima da imagem */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          px: { xs: 2, md: 8, lg: 10 },
          
          display: {xs: "none", md: "flex"},
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          p: 2,
        }}
      >
        <Box>
        <Typography fontFamily={"Rancho"} fontSize={"3rem"} sx={{ fontWeight: "bold", mb: 2 }}>
          A segunda edição vem aí...
        </Typography>
        </Box>
        <Box>
            <Link href="/regulamento" passHref>
            <Button variant="contained" color="primary" size="large">
                Confira a programação
            </Button>
            </Link>

        </Box>
        
        
      </Box>
    </Box>
  );
}

export default InfoBox;
