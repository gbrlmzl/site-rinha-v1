import React, { useState } from "react";
import { Menu, MenuItem, Backdrop, IconButton } from "@mui/material";
import Image from "next/image"; // Importando o componente Image
import TopIcon from "../../assets/icons/Position-Top.png";
import JungleIcon from "../../assets/icons/Position-Jungle.png";
import MidIcon from "../../assets/icons/Position-Mid.png";
import ADCIcon from "../../assets/icons/Position-Bot.png";
import SupportIcon from "../../assets/icons/Position-Support.png";
import ControlCameraIcon from "@mui/icons-material/ControlCamera"; // Ícone padrão para abrir o menu
import Grow from "@mui/material/Grow";

function EscolhaPosicao({onChange, defaultIcon}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
   // Estado local para a posição padrão
  
   // Mapeamento de posições para os caminhos das imagens
   

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleSelectPosicao = (value) => {
    onChange(value); // Atualiza o estado global com a posição selecionada
    handleCloseMenu();
  };



  



  return (
    <div>
      {/* Ícone para abrir o menu */}
      <IconButton onClick={handleOpenMenu} color="primary" size="large"
      sx={{
        backgroundColor: "#E3E3E3", // Cor de fundo
        borderRadius: "50%", // Torna o fundo circular
        padding: "10px", // Espaçamento interno
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Sombra para destaque
        "&:hover": {
          backgroundColor: "#e0e0e0", // Cor de fundo ao passar o mouse
        },
      }}>
      
      
    <Image src={defaultIcon} alt="Selecionar posição" width={60} height={60}  />
  
        {/* Ícone de exemplo */}
      </IconButton>

      {/* Backdrop para escurecer o fundo */}
      <Backdrop open={menuOpen} onClick={handleCloseMenu} style={{ zIndex: 1 }} />

      {/* Menu de seleção */}

      <Menu
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        
        slotProps={{
            paper: {
              sx: {
                display: "flex", // Torna o contêiner flexível
                
                flexDirection: "row", // Alinha os itens em linha
                gap: 1, // Espaçamento entre os itens
                padding: 1, // Espaçamento interno do menu
                backgroundColor: "#FFFFFF", // Cor de fundo personalizada
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Sombra para destaque
                
              },
              
            },
            
           
          }}
       

        // Estilizando o Menu para exibir os itens horizontalmente
        
      >
        

        <MenuItem onClick={() => handleSelectPosicao("Top")}>
          <Image src={TopIcon} alt="Top" width={40} height={40} /> {/* Ícone para Top */}
        </MenuItem>
        <MenuItem onClick={() => handleSelectPosicao("Selva")} >
          <Image src={JungleIcon} alt="Selva" width={40} height={40} /> {/* Ícone para Selva */}
        </MenuItem>
        <MenuItem onClick={() => handleSelectPosicao("Meio")}>
          <Image src={MidIcon} alt="Meio" width={40} height={40} /> {/* Ícone para Meio */}
        </MenuItem>
        <MenuItem onClick={() => handleSelectPosicao("Atirador")}>
          <Image src={ADCIcon} alt="Atirador" width={40} height={40} /> {/* Ícone para Atirador */}
        </MenuItem>
        <MenuItem onClick={() => handleSelectPosicao("Suporte")}>
          <Image src={SupportIcon} alt="Suporte" width={40} height={40} /> {/* Ícone para Suporte */}
        </MenuItem>
      </Menu>



      
      
    </div>
  );
}

export default EscolhaPosicao;