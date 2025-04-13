"use client";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";
import "@fontsource/russo-one"
import "@fontsource/rancho"
import "@fontsource/roboto"
import Image from "next/image";

import siteSeguroBanner from "../../assets/imgs/siteSeguroBanner.svg"


const Pagamento = ({ valor, data, onChange, loading, qrCodeGerado, qrCode, qrCodeBase64, pagamentoAprovado}) => {




  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };
  

  return (
    <Box sx={{ minHeight: 300, display: "flex", justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <CircularProgress size={60}/>
      ): pagamentoAprovado ? (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h4" fontFamily={"Russo One"} mb={1}>
            Pagamento Aprovado!
          </Typography>
          <Typography variant="h6" fontFamily={"Roboto"} mb={2}>
            Você receberá um e-mail confirmando sua inscrição.
          </Typography>
        </Box>
        ): qrCodeGerado ? (
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", gap:1, paddingTop: 1}}>
                <Image src={pixLogo} width={125} height={"auto"} alt="Logo do Pix"></Image>
                <Card sx={{width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center", }}>
                  <Image src={qrCodeBase64} width={200} height={200} alt="QR Code"></Image>
                </Card>
                <Typography variant="h5" sx={{fontFamily: "Russo One", color: "#333"}}>Valor: R$ {valorDaInscricao()}</Typography>
                <Typography variant="body2" sx={{fontFamily:"Roboto", textAlign:"center"}}>Após o pagamento, você receberá um email confirmando sua inscrição.</Typography>
                <Button variant="contained" color="primary" sx={{borderRadius: 4, mt:2}}
                onClick={() => {navigator.clipboard.writeText(qrCode), setSnackbarOpen(true)}}>
                      Copiar PIX
                </Button>
            </Box>
        

          ) : (
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
          </Box>)}
    </Box>
  );
};

export default Pagamento;
