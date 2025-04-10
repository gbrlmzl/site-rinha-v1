import { Box, width } from "@mui/system";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Button} from "@mui/material";
import React from "react";
import rinhaLogo from "../../assets/imgs/rinhaLogo.svg";
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import Image from "next/image";
import { LinearScale } from "@mui/icons-material";
import Link from "next/link";
import "@fontsource/russo-one"

function InfoBox(){
    return(
        <Card sx={{maxWidth:{md:"35vw"},  mx:{xs: 3, md: 0}, p:{xs: 1, md: 2} /*background:"linear-gradient(to right, #0000FF,rgb(255, 252, 253))"*/ }}>
        {/*<CardMedia
          sx={{ height: 200 }}
          
          title="Rinha do Campus IV"
        />*/}
        <Box sx={{ display: 'flex', justifyContent: 'center', width:260, height:150, mx:"auto", bgcolor:"#D9D9D9", px:2 }}>
          <Typography  sx={{alignSelf:"center", color:"#000000", textAlign:"center"}}>
              Coletânea de clipes engraçados da edição passada 
          </Typography>
             
        </Box>
        <CardContent>
          <Typography variant="title" gutterBottom sx={{ fontSize:"1.3rem", textAlign:"center"}} component="div">
            A SEGUNDA EDIÇÃO VEM AÍ...
          </Typography>
          <Typography variant="text1" sx={{ color: 'text.secondary' }}>
            A Rinha do Campus IV está de volta! Prepare-se para mais uma edição cheia de diversão, competição e muitas risadas. 
            <br /> 
            <br />
            Em breve, mais informações sobre a data e as inscrições!

          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}} >
          <Button sx={{backgroundColor:"cyan", color:"#000000", fontSize: {xs: "1rem", md:"1rem"}}}>
          <Link href="/inscricoes" style={{ textDecoration: "none", color: "inherit" }}>
                Mais informações
          </Link>

          </Button>
          {/*<Button size="medium">Regulamento</Button>*/}
        </CardActions>
      </Card>
    )

}

export default InfoBox;