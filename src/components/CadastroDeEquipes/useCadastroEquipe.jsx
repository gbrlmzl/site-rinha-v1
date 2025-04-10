
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
        

        usePagamentoListener(dataPagamento.uuid, onPagamentoAprovado); // Chama o listener para o UUID gerado

      } else {
        console.error("Erro ao gerar QR Code:", dataPagamento);
      }
    } catch (err) {
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
  };


  const usePagamentoListener = (uuid, onPagamentoAprovado) => {
    const stompClientRef = useRef(null);
  
    useEffect(() => {
      if (!uuid) return;
  
      const socket = new SockJS("http://localhost:8080/ws"); // endpoint do STOMP configurado no seu back
      const client = new Client({
        webSocketFactory: () => socket,
        reconnectDelay: 5000,
        onConnect: () => {
          console.log("Conectado ao WebSocket");
  
          // Inscreve no canal específico do UUID
          client.subscribe(`/topic/pagamento/${uuid}`, (message) => {
            const body = JSON.parse(message.body);
            console.log("Mensagem recebida:", body);
  
            if (body.status === "PAGAMENTO REALIZADO") {
              console.log("Pagamento aprovado:", body);
              onPagamentoAprovado(); // Chama a função de callback passando o body
              
              
            }
          });
        },
        onDisconnect: () => console.log("Desconectado do WebSocket"),
        debug: (str) => console.log(str), // remover em produção
      });
  
      client.activate();
      stompClientRef.current = client;
  
      return () => {
        if (stompClientRef.current) {
          stompClientRef.current.deactivate();
        }
      };
    }, [uuid, onPagamentoAprovado]);
  };

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

  const handleImagePreviewChange = (file) => {
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
