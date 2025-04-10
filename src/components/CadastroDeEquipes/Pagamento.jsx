"use client";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";
import "@fontsource/russo-one"
import "@fontsource/rancho"
import "@fontsource/roboto"
import Image from "next/image";

import siteSeguroBanner from "../../assets/imgs/siteSeguroBanner.svg"
import { height, width } from "@mui/system";

const Pagamento = ({ valor, data, onChange}) => {




  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };
  

  return (
    <Box  sx={{ maxWidth: 500, margin: "0 auto", p: 2, alignItems: "center", textAlign: "center" }}>
      <Typography variant="h4" fontFamily={"Russo One"} mb={1}>
        Pagamento
      </Typography>
      <Typography variant="h6" fontFamily={"Roboto"} mb={2}>
        Taxa de inscrição: R$ {valor} <br />
      </Typography>
      
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <TextField
          fullWidth
          label="Nome"
          name="nome"
          value={data.nome}
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          label="Sobrenome"
          name="sobrenome"
          value={data.sobrenome}
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          label="E-mail"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
        />

        <TextField
          fullWidth
          label="CPF (Apenas números)"
          name="cpf"
          value={data.cpf}
          onChange={handleChange}
          required
          
        />

      </Box>

      <Box sx={{width:"100%"}} >
        <Image src={siteSeguroBanner} style={{width:"100%", height:"auto"}} alt="Site seguro"></Image>
      </Box>


    </Box>
  );
};

export default Pagamento;
