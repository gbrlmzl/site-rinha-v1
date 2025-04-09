"use client";
import React from "react";
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function TelaConfirmacao({ dataEquipe, dataJogadores, escudoPreview,aceita, onAceitaTermos  }) {
  return (
    <Box>
      <Container maxWidth="md">
        {/* Escudo e Nome da Equipe */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Card
            sx={{
              width: 200,
              height: 200,
              mx: "auto",
              boxShadow: 3,
              borderRadius: 3,
            }}
          >
            {escudoPreview ? (
              <CardMedia
                component="img"
                image={escudoPreview}
                alt="Escudo da equipe"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  Sem escudo
                </Typography>
              </Box>
            )}
          </Card>

          <Typography variant="h4" component="h1" gutterBottom mt={2}>
            {dataEquipe.nomeEquipe}
          </Typography>
        </Box>

        {/* Lista de Jogadores com Scroll */}
        <Box
          sx={{
            maxHeight: "30vh",
            overflowY: "auto",
            mb: 2,
            pr: 1, // espaço extra pra não esconder o scroll
          }}
        >
          <Stack spacing={1.5} alignItems={"center"}>
            {dataJogadores
              .filter(
                (jogador) =>
                  !jogador.disabledPlayer && jogador.nickname !== ""
              )
              .map((jogador, index) => (
                <Accordion
                  key={index}
                  sx={{
                    width: { xs: "100%", md: "65%" },
                    alignItems: "center",
                    boxShadow: 2,
                    borderRadius: "20px",
                    padding: 0,
                    "&:before": {
                      display: "none", // Remove a linha preta superior padrão
                    },
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography fontWeight={600} >
                      {jogador.nickname}
                    </Typography>
                    {index === 0 && (
                      <MilitaryTechOutlinedIcon
                        sx={{
                          color: "gold",
                          fontSize: 30,
                          marginLeft: { xs: 1, md: 2 },
                        }}
                      />
                    )}


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="textSecondary">
                      Discord: {jogador.discordUser}
                    </Typography>
                    {jogador.isExternalPlayer && (
                      <Typography variant="body1" color="warning.main">
                        Jogador externo
                      </Typography>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))}
          </Stack>
        </Box>

        {/* Checkbox de confirmação */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <FormControlLabel
            control={<Checkbox color="primary" />}
            checked={aceita}
            onChange={(e) => onAceitaTermos(e)}
            label={
              <Typography variant="body2" sx={{ fontSize: { xs: 12, sm: 14 } }}>
                Concordo com as diretrizes do regulamento deste torneio.
              </Typography>
            }
          />
        </Box>
      </Container>
    </Box>
  );
}

export default TelaConfirmacao;
