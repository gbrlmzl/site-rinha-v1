"use client";
import { Box, Button, Container, Paper, Stepper, Step, StepLabel, Typography, Snackbar, Card, Alert, CircularProgress } from "@mui/material";
import EquipeInfo from "./EquipeInfo";
import JogadorInfo from "./JogadorInfo";
import ConfirmacaoDadosEquipe from "./ConfirmacaoDadosEquipe";
import { useCadastroEquipe } from "./useCadastroEquipe";
import { useState } from "react";
import { useRef } from "react";
import Pagamento from "./Pagamento";
import Image from "next/image";
import pixLogo from "../../assets/imgs/pixLogo.svg"


import '@fontsource/russo-one';
import "@fontsource/roboto";
import { set } from "react-hook-form";


const formTitles = ["Informações da equipe", "Jogador 1 (Capitão)", "Jogador 2", "Jogador 3", "Jogador 4", "Jogador 5", "Jogador 6 (Opcional)", "Confirmação","Pagamento"];
const steps = ["Informações da equipe", "Jogadores", "Confirmação", "Pagamento"];



function CadastroEquipes() {
  const {
    currentStep,
    setCurrentStep,
    imagePreview,
    defaultPosicaoIcon,
    equipe,
    jogadores,
    formPagamento,  
    qrCode,
    qrCodeBase64,
    qrCodeGerado,
    loading,
    aceitaTermos,
    pagamentoAprovado,

    handleAceitaTermosChange,
    handleEquipeDataChange,
    handleJogadoresDataChange,
    handleImagePreviewChange,
    handlePosicaoIconChange,
    handlePagamento,
    handleFormPagamentoChange,

  } = useCadastroEquipe();

  const jogadorTemporario = useRef(jogadores[currentStep - 1]);
  const stepperRef = useRef(null); // Referência para o contêiner do Stepper

  const valorDaInscricao = () => {
    const valorBase = 10; // Valor base da inscrição
    const numeroJogadoresEquipe = jogadores.filter((jogador) => jogador.disabledPlayer === false).length; // Conta os jogadores que não estão desabilitados (disabledPlayer === false)
    
    return valorBase * numeroJogadoresEquipe; // Calcula o valor total da inscrição
  }

  const validarForm = () => {
    const { cpf } = formPagamento;
    const cpfRegex = /^\d{11}$/; // Apenas números, exatamente 11 dígitos 
    if (!cpfRegex.test(cpf)) {
      return false;
    }
    return true;
  };

  const convertStep = () => {
    if(currentStep === 0) return 0; // Equipe
    if(currentStep >= 1 && currentStep <= 6) return 1; // Jogadores
    if(currentStep === 7) return 2; // Confirmação
    if(currentStep === 8) return 3; // Pagamento
    return -1; // Valor padrão, caso não corresponda a nenhum passo

  }


  
  

 
  const handleNextConfirmation = () => {
    setCurrentStep((prev) => {
      const nextStep = prev + 1;
      scrollToStep(nextStep); // Rola para o próximo passo
      return nextStep;
    });
  }

  const handleNext = (event) => {
    if(event) event.preventDefault(); // Impede o recarregamento da página
    if(currentStep >= 1 && currentStep <= 5){ //Verifica apenas os jogadores titulares
      if(jogadorTemporario.current.posicao === ""){ //verifica se a posição foi selecionada 
        return; // Se não foi selecionada, não avança para o próximo passo
      }
    }
    currentStep !== 0 && currentStep <= 6 && handleJogadoresDataChange(jogadorTemporario.current, currentStep - 1);  //Atualiza os dados dos jogadores globalmente

    if (currentStep === 8) {
      if(validarForm()){
        handlePagamento();
      }else{
        setSnackbarCpfErrorOpen(true); // Abre snackbar de erro de CPF

      }
      

    } else {
      setCurrentStep((prev) => {
        const nextStep = prev + 1;
        scrollToStep(nextStep);
        return nextStep;
      });
    }

    

    };
  ;

  //const handlePrevious = () => setCurrentStep((prev) => prev - 1);
  const handlePrevious = () => {
    setCurrentStep((prev) => {
      const previousStep = prev - 1;
      scrollToStep(previousStep); // Rola para o passo anterior
      return previousStep;
    });
  };

  const scrollToStep = (step) => {
    if (stepperRef.current) {
      const stepElement = stepperRef.current.querySelectorAll(".MuiStep-root")[step];
      if (stepElement) {
        stepElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarCpfErrorOpen, setSnackbarCpfErrorOpen] = useState(false); // Snackbar para erro de CPF

  return (
    <Box component="form" onSubmit={handleNext} autoComplete="off" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Typography gutterBottom align="center" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 3, color:"white", fontFamily: "Russo One"}}>
          Cadastro de Equipe
      </Typography>
      <Container maxWidth="md" sx={{paddingBottom: 3 }}>
      <Paper elevation={3} sx={{ p: 3, height: {xs: "auto", md: "auto" }}} >
        

        {/* Stepper para indicar progresso */}
        <Box ref={stepperRef}  sx={{ overflowX: "auto", maxWidth: "100%" }}>
          <Stepper activeStep={convertStep()} alternativeLabel sx={{margin: "0 auto",
            maxWidth: "100%",
            margin: "0 auto",
            //paddingX: { xs: 1, sm: 2, md: 3 }, // Ajusta o espaçamento horizontal
            "& .MuiStepLabel-label": {
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, // Tamanho da fonte do rótulo
            },
            "& .MuiStepIcon-root": {
              width: { xs: 24, sm: 30, md: 36 }, // Tamanho dos ícones do Stepper
              height: { xs: 24, sm: 30, md: 36 },
            },
           }}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Conteúdo do formulário */}
        <Box  sx={{ mt: 1, px:{xs:0, md:6} }}>
            

          {currentStep === 0 ? (
            <EquipeInfo
              formTitle="Equipe"
              data={equipe}
              onChange={handleEquipeDataChange}
              escudoPreview={imagePreview}
              onImageChange={handleImagePreviewChange}

            />
          ) : currentStep >= 1 && currentStep <=6 ?(
            <JogadorInfo
              formTitle={formTitles[currentStep]}
              data={jogadores[currentStep - 1]}
              onSave={(value) => jogadorTemporario.current = value}
              posicaoIcon={defaultPosicaoIcon[currentStep - 1]}
              onPosicaoChange={(value) => handlePosicaoIconChange(value, currentStep - 1)}
              stepAtual={currentStep}
              dataEquipe={equipe}
              onEmailChange={handleEquipeDataChange}
            />
          ) : currentStep === 7 ?(
            <ConfirmacaoDadosEquipe dataEquipe={equipe} dataJogadores={jogadores} escudoPreview={imagePreview} aceita={aceitaTermos} onAceitaTermos={handleAceitaTermosChange}/>
            
          ): ( //ARRUMAR ESTA PICA
            <Box sx={{ minHeight: 300, display: "flex", justifyContent: "center", alignItems: "center" }}>
              {loading ? (
                <CircularProgress size={60}/>
              ): !qrCodeGerado ? (
                <Pagamento valor={valorDaInscricao()} data={formPagamento} onChange={handleFormPagamentoChange} />
              ): qrCodeGerado && !pagamentoAprovado ?( 
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column", gap:1, paddingTop: 1}}>
                  <Image src={pixLogo} width={125} height={"auto"} alt="Logo do Pix"></Image>
                  <Card sx={{width: 200, height: 200, display: "flex", justifyContent: "center", alignItems: "center", }}>
                    <Image src={qrCodeBase64} width={200} height={200} alt="QR Code"></Image>
                  </Card>
                  <Typography variant="h5" sx={{fontFamily: "Russo One", color: "#333"}}>Valor: R$ {valorDaInscricao()}</Typography>
                  <Typography variant="body2" sx={{fontFamily:"Roboto", textAlign:"center"}}>Após o pagamento, você receberá um email confirmando sua inscrição.</Typography>
                  <Button variant="contained" color="primary" sx={{borderRadius: 4, mt:2}}
                  onClick={() => {navigator.clipboard.writeText(qrCode), setSnackbarOpen(true)}}>
                        Copiar PIX
                  </Button>
                </Box>                
              )
              : pagamentoAprovado ? (
                <Box> <Typography variant="h2"> Deu certo  </Typography></Box>
              )
              :
              (
                <div> Deu errado</div>
              )
            

            }
            </Box>
            
            )}
        </Box>

        {/* Botões de navegação */}
        <Box sx={{ display: "flex", 
          justifyContent: currentStep === formTitles.length - 1 ? "center" : "space-between"
           , mt: 2 , paddingX: { xs: 1, sm: 2, md: 5 },}}>
          {currentStep < formTitles.length - 1 && (
            <Button  variant="contained"  disabled={currentStep === 0} onClick={handlePrevious} >
            Anterior
          </Button>
          )}
          

          {currentStep < formTitles.length - 2 ? (
            <Button type= "submit" variant="contained" >
              Próximo
            </Button>
          ) : currentStep === formTitles.length - 2 ? (
            <Button variant="contained" color="success" onClick={handleNext} disabled={!aceitaTermos} >
              Pagamento
            </Button>
          ) : currentStep === formTitles.length - 1 && !qrCodeGerado ? (
            <Button type= "submit" variant="contained" color="success" disabled={loading}>
              Gerar QR Code PIX
            </Button> 

          ):(
            <div></div>
          )
          }
        </Box>
      </Paper>

      {/* Snackbar para feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Código para pagamento copiado!"
      />
      
        <Snackbar
          open={snackbarCpfErrorOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarCpfErrorOpen(false)}
          message="CPF inválido!"
          type="error"
        >
          <Alert onClose={() => setSnackbarCpfErrorOpen(false)} severity="error" sx={{ width: '100%' }}>
            CPF inválido!
          </Alert>
        </Snackbar>
     
    </Container>
    </Box>

    
  );
}

export default CadastroEquipes;
