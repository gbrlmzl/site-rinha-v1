import { Box, width } from "@mui/system";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import {Button} from "@mui/material";
import React from "react";
import rinhaLogo from "../../assets/imgs/rinhaLogo.svg";
import rinhaLogoEdicao from '../../assets/imgs/rinhaLogoEdicao.svg';
import Image from "next/image";
import { LinearScale } from "@mui/icons-material";
import Link from "next/link";

function InfoBox(){
    return(
        <Card sx={{maxWidth:{md:"35vw"},  mx:{xs: 3, md: 0}, p:{xs: 1, md: 2} /*background:"linear-gradient(to right, #0000FF,rgb(255, 252, 253))"*/ }}>
        {/*<CardMedia
          sx={{ height: 200 }}
          
          title="Rinha do Campus IV"
        />*/}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
             <Image src={rinhaLogoEdicao} width={150} alt="Logo da Rinha do Campus IV"></Image>
        </Box>
        <CardContent>
          <Typography gutterBottom sx={{fontFamily:"Arial", fontSize:"1.5rem"}} component="div">
            LÁ VEM A SEGUNDITA
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis autem quod quam perspiciatis voluptatem! Distinctio perferendis quibusdam dolorum, ea architecto ullam accusantium sunt voluptatum, officiis rerum sequi numquam fugiat?
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}} >
          <Button sx={{backgroundColor:"cyan", color:"#000000", fontSize: {xs: "1rem", md:"1rem"}}}>
          <Link href="/inscricoes" style={{ textDecoration: "none", color: "inherit" }}>
                Inscrições
          </Link>

          </Button>
          {/*<Button size="medium">Regulamento</Button>*/}
        </CardActions>
      </Card>
    )

}

export default InfoBox;