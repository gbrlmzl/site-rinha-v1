import { useState } from "react";

function JogadorInfo({formTitle, data, onChange}){
    const handleChange = (e) => {
        const{name, value} = e.target;
        onChange({...data, [name]: value});
    };

    const handleCheckboxChange = () => {
        const newIsExternalPlayer = !data.isExternalPlayer; // Use o estado global do jogador
        onChange({
            ...data,
            isExternalPlayer: newIsExternalPlayer,
            matricula: newIsExternalPlayer ? "Jogador Externo" : "", // Define a matrícula como "Jogador Externo" ou limpa o campo
        });
    };
    

    return(
        <div>
            <div className="form__title font-serif font-bold text-3xl pb-2">
                <h2>{formTitle}</h2>
            </div>
            <div className="form__box">
                <div className="form__input">
                    <input type="text" id="player-name" name="nome" value={data.nome} onChange={handleChange} placeholder="Nome" />
                </div>
                <div className="form__input">
                    <input type="text" className="matricula__input" id="player-matricula" name="matricula" 
                    value={data.matricula} 
                    onChange={handleChange} 
                    disabled={data.isExternalPlayer} 
                    placeholder={data.isExternalPlayer? "Jogador Externo" : "Matrícula"} />
                    <label>
                        <input type="checkbox" checked={data.isExternalPlayer} onChange={handleCheckboxChange} />
                            Sou um jogador de fora da faculdade
                    </label>
                </div>
                <div className="form__input">
                    <input type="text" id="player-nickname" name="nickname" value={data.nickname} onChange={handleChange} placeholder="Nickname + #" />
                </div>
                <div className="form__input">
                    <input type="text" id="player-discord" name="discordUser" value={data.discordUser} onChange={handleChange} placeholder="Usuário no Discord" />
                </div>
                <div className="form__input">
                    <select id="player-position" name="posicao" value={data.posicao} onChange={handleChange}>
                        <option value="">Selecione a posição</option>
                        <option value="Top">Top</option>
                        <option value="Caçador">Caçador</option>
                        <option value="Meio">Meio</option>
                        <option value="Atirador">Atirador</option>
                        <option value="Suporte">Suporte</option>
                    </select>
                </div>    

                
                
            </div>
        </div>
        
    );
}

export default JogadorInfo