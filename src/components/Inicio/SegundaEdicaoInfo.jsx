import { Box, width } from "@mui/system";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Button} from "@mui/material";
import React from "react";
import rinhaLogo from "../../assets/imgs/rinhaLogo.svg";
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import gravesImage from "../../assets/imgs/gravesSplash.svg"
import Image from "next/image";
import { LinearScale } from "@mui/icons-material";
import Link from "next/link";



function InfoBox(){
    return(
        <Card sx={{maxWidth:{md:"35vw"},  mx:{xs: 3, md: 0}, p:{xs: 1, md: 2}, boxShadow:0, /*background:"linear-gradient(to bottom,#215F5F,rgb(255, 252, 253))"*/ 
         backgroundColor: "#0E1241" }}>
          <Typography variant="title" gutterBottom sx={{ fontSize:{xs:"1.25rem", md: "1.5rem"}, textAlign:"center", py:1 }} component="div" color="#F0F7EE">
            A SEGUNDA EDIÇÃO VEM AÍ...
          </Typography>
        <CardMedia
          component="img"
          image={gravesImage.src}
          sx={{ height:{xs: 250, md: 400, lg: 500 }, borderRadius:4, px:1 }}
          alt="Graves"
          
        />
        
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          {/*<Typography variant="text1" textAlign={"center"} >
            VOCÊS PEDIRAM E NÓS ATENDEMOS!
          </Typography> */}
          <Typography fontFamily={"Poppins"} color="#ffffff">
            É isso mesmo, meus amigos.
          </Typography>
          <Typography variant="text2White">
            Formem suas equipes e se preparem, porque no dia 12 de maio começa a segunda edição da Rinha do Campus IV!
          </Typography>
          <Typography variant="text2White">
            E vocês receberam a missão de garantir o entretenimento desse recesso!
          </Typography>
          <Typography variant="text1" mt={1} color="#ffffff">
            Dessa vez com algumas novidades:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
            <Typography variant="text2White" ml={2}>
              ● Datas e horários bem definidos, com todos as partidas ocorrendo no período das 19h às 22h.
            </Typography>
            <Typography variant="text2White" ml={2}>
              ● Cada equipe pode ter até 2 jogadores de fora do campus. 
            </Typography>
            <Typography variant="text2White" ml={2}>
              ● Novo formato com chave superior, chave inferior e repescagem.
            </Typography>
          </Box>
          <Typography variant="text2White">


          </Typography>
          <Typography mt={2} textAlign={"center"} color="#ffffff">
            Mais informações na programação abaixo e no regulamento.
          </Typography>


          </Box>
          
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}} >
          <Button sx={{backgroundColor:"cyan", color:"#000000", fontSize: {xs: "1rem", md:"1rem"}}}>
          <Link href="/regulamento" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography fontFamily={"Poppins"} sx={{":hover":{color:"#ffffff"}}}>
                  CONFIRA O REGULAMENTO
                </Typography>
          </Link>

          </Button>
          {/*<Button size="medium">Regulamento</Button>*/}
        </CardActions>
      </Card>
    )

}

export default InfoBox;