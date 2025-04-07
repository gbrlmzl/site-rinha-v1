"use client";
import { Box, Button, Container, Paper, Stepper, Step, StepLabel, Typography, Snackbar } from "@mui/material";
import EquipeInfo from "./EquipeInfo";
import JogadorInfo from "./JogadorInfo";
import ConfirmacaoDadosEquipe from "./ConfirmacaoDadosEquipe";
import { useCadastroEquipe } from "./useCadastroEquipe";
import { useState } from "react";
import { useRef } from "react";
import Pagamento from "./Pagamento";


const steps = ["Informações da equipe", "Jogador 1 (Capitão)", "Jogador 2", "Jogador 3", "Jogador 4", "Jogador 5", "Jogador 6 (Opcional)", "Confirmação","Pagamento"];


function CadastroEquipes() {
  const {
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
  } = useCadastroEquipe();

  const jogadorTemporario = useRef(jogadores[currentStep - 1]);
  const stepperRef = useRef(null); // Referência para o contêiner do Stepper


  
  

 
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
    handleJogadoresDataChange(jogadorTemporario.current, currentStep - 1); // Atualiza os dados do jogador temporário no estado global
    setCurrentStep((prev) => {
      const nextStep = prev + 1;
      scrollToStep(nextStep); // Rola para o próximo passo
      return nextStep;
    });
  };

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

  const enviarDadosParaAPI = async () => {
    try {
      const response = await fetch("", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ equipe, jogadores }),
      });

      if (response.ok) {
        setSnackbarOpen(true);
      } else {
        console.error("Erro ao enviar:", response.statusText);
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleNext} autoComplete="off" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
      <Typography gutterBottom align="center" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 3, color: "#333" }}>
          Cadastro de Equipe
      </Typography>
      <Container maxWidth="md" sx={{paddingBottom: 3 }}>
      <Paper elevation={3} sx={{ p: 3, backgroundColor: "#D8D5D5", height: {xs: "auto", md: "auto" }}} >
        

        {/* Stepper para indicar progresso */}
        <Box ref={stepperRef}  sx={{ overflowX: "auto", maxWidth: "100%" }}>
          <Stepper activeStep={currentStep} alternativeLabel sx={{margin: "0 auto",
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
        <Box  sx={{ mt: 1, }}>
            

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
              formTitle={steps[currentStep]}
              data={jogadores[currentStep - 1]}
              onSave={(value) => jogadorTemporario.current = value}
              posicaoIcon={defaultPosicaoIcon[currentStep - 1]}
              onPosicaoChange={(value) => handlePosicaoIconChange(value, currentStep - 1)}
              stepAtual={currentStep}
            />
          ) : currentStep === 7 ?(
            <ConfirmacaoDadosEquipe dataEquipe={equipe} dataJogadores={jogadores} escudoPreview={imagePreview}/>
          ):(
            <Pagamento valor={20/* função para calcular valor com base no número de players*/} /*onSubmit={}*//>
          )}
        </Box>

        {/* Botões de navegação */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 , paddingX: { xs: 1, sm: 2, md: 5 },}}>
          {currentStep < steps.length - 1 && (
            <Button  variant="contained"  disabled={currentStep === 0} onClick={handlePrevious} sx={{
              backgroundColor: '#1976d2',   // cor de fundo
              color: '#fff',                // cor do texto
              '&:hover': {
                backgroundColor: '#115293', // cor no hover
              },
            }}>
            Anterior
          </Button>
          )}
          

          {currentStep < steps.length - 2 ? (
            <Button type= "submit" variant="contained" color="blue"   sx={{
              backgroundColor: '#1976d2',   // cor de fundo
              color: '#fff',                // cor do texto
              '&:hover': {
                backgroundColor: '#115293', // cor no hover
              },
            }} >
              Próximo
            </Button>
          ) : currentStep === steps.length - 2 ? (
            <Button variant="contained" color="success" onClick={handleNextConfirmation}>
              Pagamento
            </Button>
          ) : (
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
        message="Cadastro realizado com sucesso!"
      />
    </Container>
    </Box>
    
  );
}

export default CadastroEquipes;
