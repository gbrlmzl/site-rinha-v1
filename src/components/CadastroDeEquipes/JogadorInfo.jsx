"use client"
import { useEffect, useState } from "react";
import { FormControlLabel,Checkbox, TextField, Typography,FormControl, FormGroup, Stack } from "@mui/material";
import EscolhaPosicao from "./EscolhaPosicao";
import { Box, Container } from "@mui/system";




function JogadorInfo({formTitle, data, posicaoIcon, onPosicaoChange, onSave, stepAtual}) {
    const [localData, setLocalData] = useState(data); // Estado local para armazenar os dados do jogador temporariamente

    const stepJogadorOpcional = 6; // Defina o número do passo do jogador opcional aqui 
    const isJogadorOpcional = stepAtual === stepJogadorOpcional; // Verifica se o passo atual é o do jogador opcional
    
      useEffect(() => {
        setLocalData(data);
      }, [data]);

      useEffect(() => {
        if (onSave) onSave(localData);
      }, [localData, onSave]);
      
      

    const handleChange = (e) => {
        const{name, value} = e.target;
        setLocalData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePosicaoChange = (value) => {  
        setLocalData((prev) => ({ ...prev, posicao: value }));
        onPosicaoChange(value, posicaoIcon); // Atualiza o estado global com a posição selecionada

    }
    
    const handleOptionalCheckboxChange = () => {
        const newDisabledPlayer = !localData.disabledPlayer;
        
        setLocalData((prev) => ({
            ...prev,
            disabledPlayer: newDisabledPlayer,
            matricula: newDisabledPlayer ? "" : prev.matricula, // Limpa a matrícula se o jogador for desabilitado
            nomeJogador: newDisabledPlayer ? "" : prev.nomeJogador, // Limpa o nome se o jogador for desabilitado
            nickname: newDisabledPlayer ? "" : prev.nickname, // Limpa o nickname se o jogador for desabilitado
            discordUser: newDisabledPlayer ? "" : prev.discordUser, // Limpa o Discord se o jogador for desabilitado
            isExternalPlayer: newDisabledPlayer ? false : prev.isExternalPlayer, // Reseta o jogador externo se o jogador for desabilitado
            posicao: newDisabledPlayer ? "" : prev.posicao, // Limpa a posição se o jogador for desabilitado
            
        }))
        onPosicaoChange("Default", posicaoIcon); // Reseta a posição para o ícone padrão
        
       

    }

    const handleCheckboxChange = () => {
        const newIsExternalPlayer = !localData.isExternalPlayer;
        setLocalData((prev) => ({
            ...prev,
            isExternalPlayer: newIsExternalPlayer,
            matricula: newIsExternalPlayer ? "Jogador Externo" : "",
          }));
        };
     // Exponha a função de salvar (opcional, se quiser dar um feedback interno)
    
    

    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Stack flexDirection={"row"}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", pb: 2, textAlign: "center"}}>
                    {formTitle}
                </Typography>

                {isJogadorOpcional && (
                    <FormControl component="fieldset">
                    <FormGroup row>
                        <FormControlLabel 
                            control={<Checkbox checked={localData.disabledPlayer}   onChange={handleOptionalCheckboxChange}  />}
                            label="Sem jogador reserva" 
                            sx={{flexGrow: 1, marginLeft: {xs: 0, md: 2}}}
                        />
                    </FormGroup>
                </FormControl>
                )}
            </Stack>
            <Container >
                <Stack spacing={2} p={2} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <TextField 
                        type="text" 
                        id="player-name" 
                        name="nomeJogador" 
                        label="Nome" 
                        value={localData.nomeJogador} 
                        onChange={handleChange} 
                        fullWidth 
                        variant="outlined"
                        margin="dense"
                        disabled={localData.disabledPlayer} // Desabilita o campo se o jogador for desabilitado
                    />
        
                    <Stack  /*direction="row" spacing={2}  justifyItems="space-between" alignItems="center"*/ sx={{width: "100%", display: "flex", flexDirection:{ xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }}}>
                        <TextField 
                            id="player-matricula" 
                            name="matricula" 
                            value={localData.matricula} 
                            onChange={handleChange} 
                            disabled={localData.isExternalPlayer || localData.disabledPlayer} // Desabilita o campo se o jogador for desabilitado ou se for um jogador externo
                            label={localData.isExternalPlayer ? "" : "Matrícula"} 
                            sx={{flexGrow: {xs: 0, md: 1}, marginRight: {xs: 0, md: 1}, fullWidth: {xs: 0, md: 1}}}
                            variant="outlined"
                            margin="dense"
                            
                            
                        />
                        <FormControl component="fieldset" sx={{marginLeft: {xs: 0, md: 2}}}>
                            <FormGroup row>
                                <FormControlLabel 
                                    control={<Checkbox checked={localData.isExternalPlayer} onChange={handleCheckboxChange} />} 
                                    label="Não possui matrícula" 
                                    sx={{flexGrow: 1, marginLeft: {xs: 0, md: 2}}}
                                    disabled={localData.disabledPlayer} // Desabilita o campo se o jogador for desabilitado
                                    

                                />
                            </FormGroup>
                        </FormControl>
                    </Stack>
        
                    <TextField 
                        type="text" 
                        id="player-nickname" 
                        name="nickname" 
                        label="Nickname + #" 
                        variant="outlined" 
                        value={localData.nickname} 
                        onChange={handleChange} 
                        fullWidth
                        margin="dense"
                        disabled={localData.disabledPlayer} // Desabilita o campo se o jogador for desabilitado
                    />
        
                    <TextField 
                        id="player-discord" 
                        name="discordUser" 
                        value={localData.discordUser} 
                        label="Usuário no Discord" 
                        onChange={handleChange} 
                        fullWidth
                        variant="outlined" 
                        margin="dense"
                        disabled={localData.disabledPlayer} // Desabilita o campo se o jogador for desabilitado
                    />
        
                    {!isJogadorOpcional && 
                    <EscolhaPosicao defaultIcon={posicaoIcon} onChange={handlePosicaoChange} />
                    }
                </Stack>
            </Container>
        </Box>
    );

    
    

    
}

export default JogadorInfo