"use client";

import { useEffect, useState } from "react";
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { Box, TextField, Button, Typography, CircularProgress } from "@mui/material";

const Pagamento = ({ valor }) => {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    cpf: "",
  });

  const [qrCode, setQrCode] = useState(null); // guarda o base64 da imagem
  const [loading, setLoading] = useState(false); // estado de carregamento

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    (async () => {
      await loadMercadoPago();
      new window.MercadoPago("PUBLIC_KEY");
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQrCode(null); // limpa QR antigo

    try {
      const response = await fetch("/api/pagamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          sobrenome: form.sobrenome,
          email: form.email,
          cpf: form.cpf,
          valor: valor,
        }),
      });

      const data = await response.json();

      if (data.qr_code_base64) {
        setQrCode(`data:image/png;base64,${data.qr_code_base64}`);
      } else {
        alert("Erro ao gerar QR Code.");
      }
    } catch (err) {
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, margin: "0 auto", p: 2 }}>
      <Typography variant="h5" mb={2}>
        Informações para pagamento via PIX
      </Typography>

      <TextField
        fullWidth
        label="Nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="Sobrenome"
        name="sobrenome"
        value={form.sobrenome}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="E-mail"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        margin="normal"
        required
      />

      <TextField
        fullWidth
        label="CPF"
        name="cpf"
        value={form.cpf}
        onChange={handleChange}
        margin="normal"
        required
      />

      <input type="hidden" name="valor" value={valor} />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} disabled={loading}>
        {loading ? <CircularProgress size={24} color="inherit" /> : "Gerar QR Code PIX"}
      </Button>

      {qrCode && (
        <Box mt={4} textAlign="center">
          <Typography variant="h6" gutterBottom>
            Escaneie o QR Code para pagar:
          </Typography>
          <img src={qrCode} alt="QR Code PIX" style={{ width: 250, height: 250 }} />
        </Box>
      )}
    </Box>
  );
};

export default Pagamento;
