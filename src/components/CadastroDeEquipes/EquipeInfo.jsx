import "../../styles/EquipeInfo.css";


function EquipeInfo({formTitle, data, onChange, onImageChange, escudoPreview}){
    const handleImageUpload = (event) => {
        console.log("Evento de upload de imagem:", event); // Adicione este log para depuração
        if (!event || !event.target || !event.target.files) {
            console.error("Evento inválido ou arquivos não encontrados.");
            return;
        }
        const file = event.target.files[0];
        if(file){
            onImageChange(file); // Chama a função para lidar com a mudança de imagem
        }
    };
    
    const handleEquipeChange = (event) => {
        const {name, value} = event.target;   
        const newData ={
            ...data,
            [name]: value,
        }

        onChange(newData); // Chama a função para lidar com a mudança de dados da equipe
    }

       
 

    return(
        <div className="team-info__screen">
            <div className="team-info font-serif font-bold text-3xl pb-2"><h2>{formTitle}</h2></div>
            <div className="team-shield">
                <div className="team-shield__preview flex flex-col justify-center border rounded-md">
                    {escudoPreview}
                </div>   
            </div>
            <div className="team-shield__upload">
                <label htmlFor="file-upload" className="custom-file-upload">Carregar escudo </label>
                <input id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden"/>
            </div>
            <div className="team-name">
                    <input type="text" className="team-name__input" onChange={handleEquipeChange} name="nome" value = {data.nome} placeholder="Nome da equipe" />
            </div>
            
            
        </div>
            
        
    );

}
export default EquipeInfo

