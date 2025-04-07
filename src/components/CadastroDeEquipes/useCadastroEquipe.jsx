import { useState } from "react";
import { inicialEquipe, inicialJogadores } from "./teamData.js";
//import { TopIcon, JungleIcon, MidIcon, ADCIcon, SupportIcon, DefaultIconPosition } from "../../assets/icons/icons.js"; // Centralizar ícones
import TopIcon from "../../assets/icons/Position-Top.png";
import JungleIcon from "../../assets/icons/Position-Jungle.png";
import MidIcon from "../../assets/icons/Position-Mid.png";
import ADCIcon from "../../assets/icons/Position-Bot.png";
import SupportIcon from "../../assets/icons/Position-Support.png";
import DefaultIconPosition from "../../assets/icons/DefaultIcon.svg"; // Ícone padrão

export const useCadastroEquipe = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [imagePreview, setImagePreview] = useState();
  const [defaultPosicaoIcon, setDefaultPosicaoIcon] = useState(Array(6).fill(DefaultIconPosition));
  const [equipe, setEquipe] = useState(inicialEquipe);
  const [jogadores, setJogadores] = useState(inicialJogadores);
  const [validationEquipe, setValidationEquipe] = useState(false);
  
 
  

  const handleEquipeValidation = (value) => {
    setValidationEquipe(value);

  }
 

  const handleEquipeDataChange = (data) => {
    setEquipe((prev) => ({ ...prev, ...data }));
  };

  const handleJogadoresDataChange = (data,index) => {
    setJogadores((prev) => {
      const newJogadores = [...prev];
      newJogadores[index] = data;
      return newJogadores;
    });
  };

  const handleImagePreviewChange = (file) => {
    /*const reader = new FileReader();
    if (file) {
      reader.onloadend = () => setImagePreview(<img src={reader.result} alt="Escudo da equipe" />);
      reader.readAsDataURL(file);
    }*/
   setImagePreview(URL.createObjectURL(file)); // Atualiza o estado com a URL do arquivo
  };

  const handlePosicaoIconChange = (value, jogadorIndex) => {
    const posicoesMap = { Top: TopIcon, Selva: JungleIcon, Meio: MidIcon, Atirador: ADCIcon, Suporte: SupportIcon, Default: DefaultIconPosition };
    if (posicoesMap[value]) {
      setDefaultPosicaoIcon((prevIcons) => {
        const newIcons = [...prevIcons];
        newIcons[jogadorIndex] = posicoesMap[value];
        return newIcons;
      });
    }
  };

  return {
    currentStep,
    setCurrentStep,
    imagePreview,
    defaultPosicaoIcon,
    equipe,
    jogadores,
    validationEquipe,
    handleEquipeDataChange,
    handleJogadoresDataChange,
    handleImagePreviewChange,
    handlePosicaoIconChange,
    handleEquipeValidation,
    
  };
};
