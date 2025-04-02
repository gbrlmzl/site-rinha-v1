import { useState } from "react";
import { inicialEquipe, inicialJogadores } from "./teamData.js";
import { TopIcon, JungleIcon, MidIcon, ADCIcon, SupportIcon, DefaultIconPosition } from "./icons.js"; // Centralizar ícones

export const useCadastroEquipe = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [imagePreview, setImagePreview] = useState("Ideal: PNG 200x200");
  const [defaultPosicaoIcon, setDefaultPosicaoIcon] = useState(Array(6).fill(DefaultIconPosition));
  const [equipe, setEquipe] = useState(inicialEquipe);
  const [jogadores, setJogadores] = useState(inicialJogadores);

  const handleEquipeDataChange = (data) => {
    setEquipe((prev) => ({ ...prev, ...data }));
  };

  const handleJogadoresDataChange = (data) => {
    setJogadores((prev) => {
      const newJogadores = [...prev];
      newJogadores[data.id] = data;
      return newJogadores;
    });
  };

  const handleImagePreviewChange = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.onloadend = () => setImagePreview(<img src={reader.result} alt="Escudo da equipe" />);
      reader.readAsDataURL(file);
    }
  };

  const handlePosicaoIconChange = (value, jogadorIndex) => {
    const posicoesMap = { Top: TopIcon, Selva: JungleIcon, Meio: MidIcon, Atirador: ADCIcon, Suporte: SupportIcon };
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
    handleEquipeDataChange,
    handleJogadoresDataChange,
    handleImagePreviewChange,
    handlePosicaoIconChange,
  };
};
