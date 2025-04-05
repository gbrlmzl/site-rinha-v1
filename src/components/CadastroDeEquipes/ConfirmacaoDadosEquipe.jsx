"use client";
import { Box, Container, Grid} from '@mui/system';
import { Typography, Stack, Card, CardMedia} from '@mui/material';
import React from 'react';
import Image from 'next/image';


function TelaConfirmacao({dataEquipe, dataJogadores, escudoPreview}) {
    /*Container com Nome e foto da equipe, nick dos jogadores, valor da taxa de inscriçao*/ 
    return(
        <Box>
            <Container>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                    {/* Escudo da equipe */}
                    <Card sx={{ width: 200, height: 200, mx: 'auto', boxShadow: 3 }}>
                    {escudoPreview ? (
                        <CardMedia
                        component="img"
                        image={escudoPreview}
                        alt="Escudo da equipe"
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    ) : (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography variant="body2" color="textSecondary">Sem escudo</Typography>
                        </Box>
                    )}
                    </Card>

                    {/* Nome da equipe */}
                    <Typography variant="h4" component="h1" gutterBottom mt={2}>
                    {dataEquipe.nomeEquipe}
                    </Typography>
            </Box>

                

                <Box sx={{alignContent:"center"}}>
                    <Stack spacing={2} sx={{alignItems:"center", flexDirection: { xs: 'column', md: 'row' }, justifyContent: "center"}}>
                    {dataJogadores
                        .filter((jogador) => !jogador.disabledPlayer && jogador.nickname !== "")
                        .map((jogador, index) => (
                        <Card key={index} variant="outlined" sx={{ p: 1 , boxShadow: 2, display:'flex', flexDirection: "column", alignItems: "center", width: "75%" }}  >
                            <Box sx={{ display: "flex", gap: 1 , alignItems: "center"}}>
                                <Typography variant="subtitle1">
                                {jogador.nickname}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                {jogador.discordUser} {jogador.isExternalPlayer && "(Jogador externo)"}
                                </Typography>
                            </Box>
                            
                        </Card>
                        ))}
                    </Stack>
                </Box>

            </Container>


        </Box>
    );

    
}


export default TelaConfirmacao;