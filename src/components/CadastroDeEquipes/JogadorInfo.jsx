"use client"
import { useState } from "react";
import { FormControlLabel,Checkbox, TextField, Typography,FormControl, FormGroup, Stack } from "@mui/material";
import EscolhaPosicao from "./EscolhaPosicao";




function JogadorInfo({formTitle, data, onChange, posicaoIcon, onPosicaoChange }) {
    
    const handleChange = (e) => {
        const{name, value} = e.target;
        onChange({...data, [name]: value});
    };

    const handlePosicaoChange = (value) => {  
        handleChange({ target: { name: "posicao", value } });
        onPosicaoChange(value, posicaoIcon); // Atualiza o estado global com a posição selecionada

    }
    


    const handleCheckboxChange = () => {
        const newIsExternalPlayer = !data.isExternalPlayer; // Use o estado global do jogador
        onChange({
            ...data,
            isExternalPlayer: newIsExternalPlayer,
            matricula: newIsExternalPlayer ? "Jogador Externo" : "", // Define a matrícula como "Jogador Externo" ou limpa o campo
        });
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", pb: 2, textAlign: "center"}}>
                {formTitle}
            </Typography>
    
            <Stack spacing={2} p={2} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <TextField 
                    type="text" 
                    id="player-name" 
                    name="nome" 
                    label="Nome" 
                    value={data.nome} 
                    onChange={handleChange} 
                    fullWidth 
                    variant="outlined"
                    margin="dense"
                />
    
                <Stack direction="row" spacing={2} alignItems="center">
                    <TextField 
                        id="player-matricula" 
                        name="matricula" 
                        value={data.matricula} 
                        onChange={handleChange} 
                        disabled={data.isExternalPlayer} 
                        label={data.isExternalPlayer ? "" : "Matrícula"} 
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        
                    />
                    <FormControl component="fieldset">
                        <FormGroup row>
                            <FormControlLabel 
                                control={<Checkbox checked={data.isExternalPlayer} onChange={handleCheckboxChange} />} 
                                label="Jogador de fora da faculdade" 
                            />
                        </FormGroup>
                    </FormControl>
                </Stack>
    
                <TextField 
                    type="text" 
                    id="player-nickname" 
                    label="Nickname + #" 
                    variant="outlined" 
                    value={data.nickname} 
                    onChange={handleChange} 
                    fullWidth
                    margin="dense"
                />
    
                <TextField 
                    id="player-discord" 
                    name="discordUser" 
                    value={data.discordUser} 
                    label="Usuário no Discord" 
                    onChange={handleChange} 
                    fullWidth
                    variant="outlined" 
                    margin="dense"
                />
    
                <EscolhaPosicao onChange={handlePosicaoChange} defaultIcon={posicaoIcon}/>
            </Stack>
        </div>
    );

    
    

    
}

export default JogadorInfo