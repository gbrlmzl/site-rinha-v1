
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
  const [imagePreview, setImagePreview] = useState(); //Estado para armazenar a URL da imagem, de forma que seja visivel no navegador
  const [imagePreviewFile, setImagePreviewFile] = useState(null); // Estado para armazenar o arquivo de imagem, para que seja enviado ao Imgur
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
  const [valorPagamento, setValorPagamento] = useState(null); // estado do valor do pagamento

  

  const handleConfirmaEscudo = async () => {
    console.log("Confirmando escudo..."); // Log de confirmação do escudo
    if (!imagePreviewFile) {
      console.log("é isso")
      return; 
    }
    setLoading(true); // Inicia o carregamento
    try{
      const urlEscudoImgur = await uploadImagemParaImgur(imagePreviewFile); // Faz o upload da imagem para o Imgur
      console.log("URL do escudo:", urlEscudoImgur); // Log da URL do escudo
      atualizarEscudoEquipe(urlEscudoImgur); // Atualiza o estado da equipe com a URL do escudo
      

    }catch (err) {
      console.error("Erro:", err);
    } finally {
      setLoading(false);
    }
    

    

  }


  const uploadImagemParaImgur = async (file) => {
    console.log("Fazendo upload da imagem para o Imgur..."); // Log do início do upload
    const formData = new FormData();
    formData.append('image',file );
  
    try {
      const response = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer token ID', // Substitua pelo seu token de acesso do Imgur
        },
        body: formData,
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro HTTP:', response.status, errorText);
        return;
      }
  
      const data = await response.json();
      if (data.success) {
        const urlImagem = data.data.link;
        console.log('Imagem hospedada em:', urlImagem);
        return urlImagem; // aqui você pode enviar para seu back-end
      } else {
        console.error('Erro no upload do Imgur:', data);
      }
    } catch (error) {
      console.error('Erro geral no upload:', error);
    }
  };
  
  
  

  
  const atualizarEscudoEquipe = (urlEscudoImgur) => {
    setEquipe((prev) => ({ ...prev, escudo: urlEscudoImgur })); // Atualiza o estado da equipe com o arquivo de imagem
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

    const dadosEquipe = {
      ...equipe,
      jogadores, // jogadores já é um array de objetos
    };

    const dadosPagamento = {
      nome: formPagamento.nome,
      sobrenome: formPagamento.sobrenome,
      email: formPagamento.email,
      cpf: formPagamento.cpf,
    };

    try {
      const response = await fetch("http://localhost:8080/inscricoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dadosEquipe,
          dadosPagamento,
        }),
      });

      const dataPagamento = await response.json();
   
      if (dataPagamento.qrCodeBase64 && dataPagamento.qrCode) {
        setQrCodeBase64(`data:image/png;base64,${dataPagamento.qrCodeBase64}`);
        setQrCode(dataPagamento.qrCode); // Atualiza o estado com o QR Code
        setQrCodeGerado(true); // Atualiza o estado indicando que o QR Code foi gerado
        setUuidPagamento(dataPagamento.uuid); // isso ativa o hook acima
        setValorPagamento(dataPagamento.valor); // Atualiza o valor do pagamento
        
        
        

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

  const handleImagePreviewChange = (file) => {
    setImagePreview(URL.createObjectURL(file));  // Atualiza o estado com a URL do arquivo
    setImagePreviewFile(file); // Atualiza o estado com o arquivo de imagem
  };

  const handlePosicaoIconChange = (value, jogadorIndex) => {
    const posicoesMap = { TOP_LANER: TopIcon, JUNGLER: JungleIcon, MID_LANER: MidIcon, AD_CARRY: ADCIcon, SUPPORT: SupportIcon, Default: DefaultIconPosition };
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
    valorPagamento,
    handleAceitaTermosChange,
    handleEquipeDataChange,
    handleJogadoresDataChange,
    handleImagePreviewChange,
    handlePosicaoIconChange,
    handleEquipeValidation,
    handlePagamento,
    handleFormPagamentoChange,
    handleConfirmaEscudo,

   
    
  };
};
