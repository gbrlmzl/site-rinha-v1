"use client";
import { Box, Button, Container, Paper, Stepper, Step, StepLabel, Typography, Snackbar } from "@mui/material";
import EquipeInfo from "./EquipeInfo";
import JogadorInfo from "./JogadorInfo";
import { useCadastroEquipe } from "./useCadastroEquipe";
import { useState } from "react";
import { maxWidth } from "@mui/system";
import { useRef } from "react";
import Pagamento from "./Pagamento";

const steps = ["Informações da Equipe", "Jogador 1 (Capitão)", "Jogador 2", "Jogador 3", "Jogador 4", "Jogador 5", "Jogador 6 (Opcional)", "Pagamento"];

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
  
  const stepperRef = useRef(null); // Referência para o contêiner do Stepper

 
  //const handleNext = () => setCurrentStep((prev) => prev + 1);

  const handleNext = () => {
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
      const response = await fetch("ENDEREÇO_DA_API_AQUI", {
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
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Cadastro de Equipe
        </Typography>

        {/* Stepper para indicar progresso */}
        <Box ref={stepperRef}  sx={{ overflowX: "auto", maxWidth: "100%" }}>
          <Stepper activeStep={currentStep} alternativeLabel sx={{ maxWidth: "100%", margin: "0 auto" }}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* Conteúdo do formulário */}
        <Box sx={{ my: 4 }}>
            

          {currentStep === 0 ? (
            <EquipeInfo
              formTitle="Informações da Equipe"
              data={equipe}
              onChange={handleEquipeDataChange}
              escudoPreview={imagePreview}
              onImageChange={handleImagePreviewChange}
            />
          ) : currentStep >= 1 && currentStep <=6 ?(
            <JogadorInfo
              formTitle={steps[currentStep]}
              data={jogadores[currentStep - 1]}
              onChange={handleJogadoresDataChange}
              posicaoIcon={defaultPosicaoIcon[currentStep - 1]}
              onPosicaoChange={(value) => handlePosicaoIconChange(value, currentStep - 1)}
            />
          ) :(
            <Pagamento valor={20}/>
          )}
        </Box>

        {/* Botões de navegação */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button variant="contained" color="secondary" disabled={currentStep === 0} onClick={handlePrevious}>
            Anterior
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Próximo
            </Button>
          ) : (
            <Button variant="contained" color="success" onClick={enviarDadosParaAPI}>
              {/*Pagamento*/}
            </Button>
          )}
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
  );
}

export default CadastroEquipes;
