"use client"
import { useState } from "react";
import EquipeInfo from "./EquipeInfo";
import JogadorInfo from "./JogadorInfo";
import { inicialEquipe, inicialJogadores } from "./teamData.js";

import "../../styles/CadastroEquipes.css";
import Pagamento from "./Pagamento";
function CadastroEquipes() {
  const[currentStep, setCurrentStep] = useState(0);
  const [imagePreview, setImagePreview] = useState("Ideal: PNG 200x200");
  const [equipe, setEquipe] = useState(inicialEquipe);
  const [jogadores, setJogadores] = useState(inicialJogadores);


  const handleEquipeDataChange = (data) => {
    setEquipe((prevData) => ({
      ...prevData,
      ...data,
    }));   
  }
  const handleImagePreviewChange = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.onloadend = () => {
        setImagePreview(<img src={reader.result} alt="Escudo da equipe" />);
      };
      reader.readAsDataURL(file);
    }
  } 
  const handleJogadoresDataChange = (data) => {
    setJogadores((prevData) => {
      const newJogadores = [...prevData];
      newJogadores[data.id] = data;
      return newJogadores;
    });
  }

  
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep -1);
  };

  const renderStep = () => {
    if(currentStep === 0){
      return <EquipeInfo formTitle = "Informações da Equipe" data ={equipe} onChange={(data) => handleEquipeDataChange(data)} escudoPreview = {imagePreview} onImageChange = {(file) => handleImagePreviewChange(file)} />;
    }else if(currentStep === 1){
      return <JogadorInfo formTitle = {`Jogador ${currentStep} (Capitão)`} data ={jogadores[currentStep - 1]} onChange={(data) => handleJogadoresDataChange(data)}/>;
    }else if(currentStep > 1 && currentStep < 6){
      return <JogadorInfo formTitle = {`Jogador ${currentStep}`} data ={jogadores[currentStep - 1]} onChange={(data) => handleJogadoresDataChange(data)}/>;
    }
    else if(currentStep === 6){
      return <JogadorInfo formTitle = {`Jogador ${currentStep} (Opcional)`} data ={jogadores[currentStep - 1]} onChange={(data) => handleJogadoresDataChange(data)}/>;
    }
    else{
      return;
    }
  }
    
      
  
  const renderNavbarStep = ()  => {
    if(currentStep === 0){
      return <div><p></p></div>
    }
    else if(currentStep > 0 && currentStep < 7){
      return <div><p>Posição</p></div>
    }
    else{
      return <div><button onClick={enviarDadosParaAPI}>Pagamento</button></div>
    } 
    
      
  }
  
  
  const enviarDadosParaAPI = async () => {
    // Dados que serão enviados
    const dados = {
        equipe: equipe, // Objeto da equipe
        jogadores: jogadores, // Array de jogadores
    };

    try {
        // Faz a requisição POST
        const response = await fetch("ENDEREÇO_DA_API_AQUI", {
            method: "PUT", // Método HTTP
            headers: {
                "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify(dados), // Converte o objeto para JSON
        });

        // Verifica se a requisição foi bem-sucedida
        if (response.ok) {
            const respostaJson = await response.json(); // Converte a resposta para JSON
            console.log("Dados enviados com sucesso:", respostaJson);
        } else {
            console.error("Erro ao enviar os dados:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
};

  
  
  
  return (
        <div className="main-content">
            <div className="titulo">
              <h1>Cadastro de equipe</h1>
            </div>
            <div className="submit-screen">
              {renderStep()}
            <div className="submit-screen__navigation flex flex-row gap-11">
                  <div className="submit-screen__navigation-button">
                      {currentStep > 0 && (
                          <button onClick={handlePrevious}>Anterior</button>
                      )}       
                  </div>
                  <div>{renderNavbarStep()}

                  </div>
                  <div className="submit-screen__navigation-button">
                      {currentStep < 7 && (
                          <button onClick={handleNext}>Próximo</button>
                        )}
                  </div>
            </div>

              
            
            </div>
            
        </div>
  );
}


export default CadastroEquipes;