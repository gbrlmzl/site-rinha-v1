"use client";
import { useState } from "react";
import { Box, Button, TextField, Typography, Grid, Card, CardMedia } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { styled } from "@mui/system";

function EquipeInfo({ formTitle, data, onChange, onImageChange, escudoPreview }) {
  

  const handleImageUpload = (event) => {
    if (!event?.target?.files) return;

    const file = event.target.files[0];
    if (file) {
    onImageChange(file); // Chama a função para lidar com a mudança de imagem
  };
}

  const handleEquipeChange = (event) => {
    const { name, value } = event.target;
    onChange({ ...data, [name]: value });

  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box sx={{ maxWidth: 500, p: {xs: 1.5, md: 2}, mx: "auto"}}>
      <Typography fontFamily={"Roboto"} fontSize={30} gutterBottom align="center">
        {formTitle}
      </Typography>

      <Grid container spacing={2} justifyContent="center" flexDirection={"column"}>
        {/* Escudo da equipe */}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Card sx={{ width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center", boxShadow: 3 }}>
            {escudoPreview ? (
              <CardMedia component="img" image={escudoPreview} alt="Escudo da equipe" sx={{ width: "100%", height: "100%", objectFit: "contain" }} />
            ) : (
              <Typography variant="body2" color="textSecondary" align="center" >
                Ideal: PNG 200x200
              </Typography>
            )}
          </Card>
        </Grid>

        {/* Botão de Upload */}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Button component="label" variant="contained" /*startIcon={<CloudUpload />}*/color="primary" >
            Carregar Escudo
            <VisuallyHiddenInput type="file" accept="image/*" onChange={handleImageUpload} />
          </Button>
        </Grid>

        {/* Input do Nome da Equipe */}
        <Grid autoComplete="off" item xs={12}>
          <TextField
            fullWidth
            label="Nome da Equipe"
            variant="outlined"
            name="nomeEquipe"
            value={data.nomeEquipe}
            onChange={handleEquipeChange}
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default EquipeInfo;

