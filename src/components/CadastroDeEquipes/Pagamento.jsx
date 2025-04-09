"use client";
import { useEffect, useState } from "react";
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";

const Pagamento = ({ valor, qrCode, loading, data, onChange}) => {




  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };
  

  return (
    <Box  sx={{ maxWidth: 500, margin: "0 auto", p: 3 }}>
      <Typography variant="h6" mb={2}>
        Dados para o pagamento
      </Typography>
      
      <Box >
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

      <Box>
        <Typography sx={{ mt: 2 }} variant="h7">
          Taxa de inscrição : {valor} R$
        </Typography>
      </Box>
    </Box>
  );
};

export default Pagamento;
