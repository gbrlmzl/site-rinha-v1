
import { use, useState } from "react";
import { inicialEquipe, inicialJogadores, inicialFormPagamento } from "./teamData.js";
//import { TopIcon, JungleIcon, MidIcon, ADCIcon, SupportIcon, DefaultIconPosition } from "../../assets/icons/icons.js"; // Centralizar ícones
import TopIcon from "../../assets/icons/Position-Top.png";
import JungleIcon from "../../assets/icons/Position-Jungle.png";
import MidIcon from "../../assets/icons/Position-Mid.png";
import ADCIcon from "../../assets/icons/Position-Bot.png";
import SupportIcon from "../../assets/icons/Position-Support.png";
import DefaultIconPosition from "../../assets/icons/DefaultIcon.svg"; // Ícone padrão
import { useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { set } from "react-hook-form";



export const useCadastroEquipe = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [imagePreview, setImagePreview] = useState();
  const [defaultPosicaoIcon, setDefaultPosicaoIcon] = useState(Array(6).fill(DefaultIconPosition));
  const [equipe, setEquipe] = useState(inicialEquipe);
  const [jogadores, setJogadores] = useState(inicialJogadores);
  const [formPagamento, setFormPagamento] = useState(inicialFormPagamento);
  const [validationEquipe, setValidationEquipe] = useState(false);
  const [qrCode, setQrCode] = useState(null); // guarda o QR Code
  const [qrCodeBase64, setQrCodeBase64] = useState(null); // guarda o base64 do QR Code
  const [loading, setLoading] = useState(false); // estado de carregamento
  const [qrCodeGerado, setQrCodeGerado] = useState(false); // estado de QR Code gerado
  const [aceitaTermos, setAceitaTermos] = useState(false); // estado de aceitação dos termos
  const [pagamentoAprovado, setPagamentoAprovado] = useState(false); // estado de pagamento aprovado
  const [uuidPagamento, setUuidPagamento] = useState(null);

  

  
  
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  
  const atualizarEscudoEquipe = (escudoBase64) => {
    setEquipe((prev) => ({ ...prev, escudo: escudoBase64 })); // Atualiza o estado da equipe com o arquivo de imagem
  }

  const valorDaInscricao = () => {
    const valorBase = 1; // Valor base da inscrição
    const numeroJogadoresEquipe = jogadores.filter((jogador) => jogador.disabledPlayer === false).length; // Conta os jogadores que não estão desabilitados (disabledPlayer === false)
    
    return valorBase * numeroJogadoresEquipe; // Calcula o valor total da inscrição
  }

  const handleAceitaTermosChange = (event) => {
    const newAceitaTermos = event.target.checked;
    setAceitaTermos(newAceitaTermos); // Atualiza o estado de aceitação dos termos

  }
  
  
 
  

  const handleEquipeValidation = (value) => {
    setValidationEquipe(value);

  }
  const handleFormPagamentoChange = (data) => {
    setFormPagamento((prev) => ({ ...prev, ...data })); // Atualiza o estado com os dados do formulário de pagamento

  }

 




  const handlePagamento = async () => {
    if (loading) return; // Impede execução se já estiver carregando
    setLoading(true);
    setQrCodeBase64(null); // limpa QR antigo

    try {
      const response = await fetch("http://localhost:8080/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formPagamento.nome,
          sobrenome: formPagamento.sobrenome,
          email: formPagamento.email,
          cpf: formPagamento.cpf,
          valor: valorDaInscricao(),
          
        }),
      });

      const dataPagamento = await response.json();
   
      if (dataPagamento.qrCodeBase64 && dataPagamento.qrCode) {
        setQrCodeBase64(`data:image/png;base64,${dataPagamento.qrCodeBase64}`);
        setQrCode(dataPagamento.qrCode); // Atualiza o estado com o QR Code
        setQrCodeGerado(true); // Atualiza o estado indicando que o QR Code foi gerado
        setUuidPagamento(dataPagamento.uuid); // isso ativa o hook acima
        
        
        

        //usePagamentoListener(dataPagamento.uuid, onPagamentoAprovado); ==>> ERROU AQUI <<==

      } else {
        console.error("Erro ao gerar QR Code:", dataPagamento);
      }
    } catch (err) {
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    if (!uuidPagamento) return;
  
    const stompClientRef = { current: null }; // simples objeto ref local
  
    const socket = new SockJS("http://localhost:8080/ws");
    const client = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Conectado ao WebSocket");
  
        client.subscribe(`/topic/pagamentos/${uuidPagamento}`, (message) => {
          const body = JSON.parse(message.body);
          console.log("Mensagem recebida:", body);
  
          if (body.status === "PAGAMENTO REALIZADO") {
            console.log("Pagamento aprovado:", body);
            onPagamentoAprovado();
          }
        });
      },
      onDisconnect: () => console.log("Desconectado do WebSocket"),
      debug: (str) => console.log(str),
    });
  
    client.activate();
    stompClientRef.current = client;
  
    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
      }
    };
  }, [uuidPagamento]);
  

  

  const onPagamentoAprovado = () => {
    setQrCodeGerado(false); // Reseta o QR Code gerado
    setPagamentoAprovado(true); // Chama função que muda a tela, por exemplo

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

  const handleImagePreviewChange = async (file) => {
    try {
      const base64String = await convertToBase64(file);
      setImagePreview(URL.createObjectURL(file)); // Atualiza a pré-visualização
      atualizarEscudoEquipe(base64String); // Atualiza o estado com a string Base64
      console.log("Escudo atualizado:", base64String); // Log para verificar o valor
    } catch (error) {
      console.error("Erro ao converter a imagem para Base64:", error);
    }
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
    formPagamento,
    qrCodeBase64,
    qrCode,
    loading,
    qrCodeGerado,
    aceitaTermos,
    pagamentoAprovado,
    handleAceitaTermosChange,
    handleEquipeDataChange,
    handleJogadoresDataChange,
    handleImagePreviewChange,
    handlePosicaoIconChange,
    handleEquipeValidation,
    handlePagamento,
    handleFormPagamentoChange,
   
    
  };
};
