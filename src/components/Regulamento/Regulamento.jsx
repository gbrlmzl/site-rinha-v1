import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {Paper} from "@mui/material";
import Image from "next/image";
import rinhaLogo from "../../assets/imgs/rinhaTitleLogo.svg";
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';



const Regulamento = () => {
  return (
    <Box
          sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: 'column'},
            
            alignItems: 'center',
            bgcolor: '#04072D',
            flexGrow: 1,
            width: '100%',
            minHeight: '100%',
            py: 3,
            px: {xs : 2, md: 5, lg: 10},
            gap:5
            
          }}
        >
            <Box sx={{display: 'flex', flexDirection:"column",justifyContent:"center", alignItems: 'center', px: {xs: 1, md: 5, lg: 10},}}>
                <Image src={rinhaLogo} alt={"Logo da Rinha do Campus IV"} width={200} height={200}></Image>
                <Typography sx={{fontFamily:"Russo One", fontSize:"1.6rem", color:"white", textAlign:"center" }}>
                    Regulamento
                </Typography>
                <Typography variant="text2White" textAlign={"center"} sx={{mb: 1}}>
                    Contato: rinhacampusiv@gmail.com e @rinhacampusiv <InstagramIcon sx={{ verticalAlign: "middle", fontSize: "1.2rem" }} /> 
                </Typography>
                

            </Box>
            <Paper elevation={3} sx={{ display:"flex",flexDirection:"column",background:"#394E79", justifyContent:"center", alignItems:"center", p: {xs:2, md:3}, height: {xs: "auto", md: "auto" }, width: {xs: "100%", md: "60vw"},}}>
                
                <Typography variant="title2" color="white" mb={2} >
                    Jogadores
                </Typography>
                
                <Typography variant="text2White" textAlign={"center"} sx={{mb: 1}}>
                    Os jogadores devem sempre manter o espírito esportivo, seguindo as regras estabelecidas
                    pela Riot Games no Código do Invocador. Além disso, os participantes devem cumprir as
                    regras descritas abaixo:
                </Typography>
                <Box sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}}>
                  <Typography variant="text2White" >
                  1. Trate os oficiais do torneio, outros jogadores e espectadores com respeito e espírito
                  esportivo durante todo o evento.
                  </Typography>
                  <Typography variant="text2White"  >
                  2. Seja pontual e esteja preparado para o início das partidas 15 minutos antes do
                  horário marcado.
                  </Typography>
                  <Typography variant="text2White" >
                  3. Informe quaisquer infrações (das regras ou política do evento) que presenciar a um organizador do torneio.
                  </Typography>
                  <Typography variant="text2White" >
                  4. Deixe sua conta League of Legends configurada no servidor regional adequado
                  (brasileiro), com campeões e runas preparados para o torneio.
                  </Typography>
                  <Typography variant="text2White" >
                  5.  Na fase de grupos, teremos duas partidas ocorrendo simultaneamente em cada horário. Uma será transmitida ao vivo com narração no canal <Link href={"https://www.twitch.tv/rinhacampusiv"} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#01F7FF", }} >twitch.tv/rinhacampusiv</Link>, e 
                  a outra será transmitida sem narração em <Link href={"https://www.youtube.com/@rinhacampusiv/"} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#01F7FF", }} >youtube.com/@rinhacampusiv</Link>. 
                  Ao se inscrever no torneio, você concorda em permitir que sua gameplay seja transmitida para o público.   

                  </Typography>
                </Box>

                <Typography variant="title2" color="white" mb={2} mt={3}>
                  Equipe
                </Typography>
                <Box  sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}} >
                  <Typography variant="text2White" >
                  1. Cada equipe deverá ter cinco jogadores titulares e, opcionalmente, 1 reserva.
                  Cada jogador só poderá estar inscrito em uma única equipe.
                  </Typography>
                  <Typography variant="text2White" >
                  2. No mínimo 3 jogadores titulares devem ser ingressantes, alunos com matrícula ativa ou formados no Campus IV da UFPB. Os demais jogadores podem ser de fora do campus.
                  </Typography>
                  <Typography variant="text2White">
                  3. Cada jogador da equipe, incluindo o reserva, pagará uma <Typography component="span" fontFamily={"Poppins"} fontSize={"0.85rem"} fontWeight="bold" color="white"> taxa de inscrição </Typography> de R$ 10,00, que será convertida em premiação.
                  </Typography>
                  <Typography variant="text2White" >
                  4. Em caso de substituição, a equipe deverá informar aos organizadores com, no mínimo, uma hora de antecedência do horário da partida.
                  </Typography>
                  <Typography variant="text2White" >
                  5. Cada integrante da equipe deve fornecer os seguintes dados: nome, nickname e
                  matrícula (para os que tiverem)
                  </Typography>
                  <Typography variant="text2White">
                  6. Todos os jogadores devem estar presentes de forma remota na hora da partida.
                  Caso um jogador não esteja presente ou a equipe esteja incompleta, será
                  considerado W.O. (Walkover) para a equipe ausente.
                  </Typography>
                  <Typography variant="text2White" >
                  
                  </Typography>
                  
                </Box>

                <Typography variant="title2" color="white" mb={2} mt={3}>
                  Capitão da equipe

                </Typography>
                <Box  sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}} >
                  <Typography variant="text2White" >
                  1. Cada equipe deve ter um capitão para representar a equipe perante os oficiais do torneio.
                  </Typography>
                  <Typography variant="text2White" >
                  2. O capitão tem as seguintes responsabilidades: 
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Comunicar-se com os oficiais do torneio em nome da equipe.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Comunicar-se com as outras equipes em nome da equipe.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Tomar decisões finais pela equipe durante o torneio.
                  </Typography>
                  <Typography variant="text2White">
                   3. Após o início do torneio, a mudança de capitão só poderá ser realizada com a permissão dos oficiais do torneio, apenas nos casos em que o capitão não puder mais participar.
                  </Typography>
                </Box>
                <Typography variant="title2" color="white" mb={2} mt={3}>
                  Mapas e modo de jogo
                </Typography>
                <Box sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}} >
                  <Typography variant="text2White">
                  1. Todas as partidas serão realizadas no mapa Summoner's Rift (5x5). 
                  </Typography>
                  <Typography variant="text2White">
                  2. As regras padrão de vitória e banimento de campeões se aplicam, sendo conduzidas de acordo com o cliente do jogo (Modo Torneio).
                  O formato de jogo não poderá ser alterado.
                  </Typography>
                </Box>

                <Typography variant="title2"color="white" mb={2} mt={3}>
                  Formato do torneio
                </Typography>
                <Box sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}}>
                  <Typography variant="text2White">
                    1. O torneio contará com um total de 8 equipes.
                  </Typography>
                  <Typography variant="text2White">
                    2. O torneio será divido em duas fases: Fase de Grupos e Fase Eliminatória com chave superior e inferior.
                  </Typography>
                  <Typography variant="text2White" sx={{fontWeight: "bold"}}>
                    Fase de Grupos:
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    As equipes serão divididas em dois grupos de 4 equipes cada, onde cada equipe enfrentará todas as outras do seu grupo uma vez.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    A classificação será feita com base no número de vitórias, e em caso de empate (duas equipes com 2/1 e outras duas com 1/2), será realizado um confronto direto (md1) entre as equipes com o mesmo número de vitórias.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    As 3 melhores equipes de cada grupo avançarão para a fase eliminatória, onde as duas melhores equipes de cada grupo avançarão para a semifinal da chave superior,
                    enquanto as terceiras colocadas de cada grupo avançarão para a semifinal da chave inferior.
                  </Typography>
                  <Typography variant="text2White" sx={{fontWeight: "bold"}}>
                    Fase Eliminatória:
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    A fase eliminatória será disputada em md1, com a final da chave inferior e a grande final sendo disputadas em md3. 
                  </Typography>
                  
                  

                  
                </Box>

                <Typography variant="title2" color="white" mb={2} mt={3}>
                  Pausas
                </Typography>
                <Box sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}}>
                  <Typography variant="text2White">
                  1. Pausa supervisionada: A pausa pode ser feita pelo oficial do torneio a qualquer momento, se necessário.
                  </Typography>
                  <Typography variant="text2White">
                  2. Pausa da equipe: Cada equipe tem direito a 10 minutos de pausa por partida, que podem ser usados nas seguintes situações:
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Desconexão acidental.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Problemas com hardware ou software (ex.: monitor apagado, periféricos desabilitados, erros no jogo).
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Problemas físicos que dificultam o jogador (ex.: cadeira quebrada).
                  </Typography>
                  <Typography variant="text2White">
                  3. Caso os 10 minutos de pausa sejam insuficientes, o capitão pode solicitar mais tempo aos organizadores, mas a decisão será tomada pelos oficiais do torneio. Caso a pausa adicional não seja concedida, a equipe deve continuar o jogo da melhor forma possível.
                  </Typography>
                  <Typography variant="text2White" >
                  4. Pausa não autorizada: Se um jogador pausar a partida sem permissão ou não retomar o jogo após a ordem oficial, ele será penalizado de acordo com as regras do torneio.
                  </Typography>
                  <Typography variant="text2White">
                  5. Comunicação durante a pausa: Será permitido aos jogadores da mesma equipe se comunicarem durante as pausas.
                  </Typography>
                </Box>

                <Typography variant="title2" color="white" mb={2} mt={3}>
                  Desistência
                </Typography>
                <Box sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}}>
                  <Typography variant="text2White">
                  1. Se uma equipe não comparecer a partida, será considerada W.O. (Walkover) e perderá a partida.
                  </Typography>
                  <Typography variant="text2White">
                  2. Caso uma equipe deseje abandonar o torneio, deve informar aos organizadores.
                  </Typography>
                  <Typography variant="text2White">
                  3. Após a confirmação da inscrição, a equipe terá o prazo de 48 horas para desistir e receber o reembolso da taxa de inscrição. Após esse prazo, a taxa não será reembolsada.
                  </Typography>

                </Box>

                <Typography variant="title2" color="white" mb={2} mt={3}>
                  Penalidades
                </Typography>
                <Box sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}}>
                  <Typography variant="text2White">
                  As penalidades serão aplicadas de acordo com a gravidade da infração, podendo incluir:
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Advertência por infração leve.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Banimento anulado, impedindo a equipe de banir um campeão na próxima fase de escolha de campeões.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Escolha do lado anulada, onde a decisão de lado ou escolha de mapa será dada à equipe adversária.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Infrações graves podem resultar na derrota forçada da partida atual ou da próxima partida.
                  </Typography>
                  <Typography variant="text2White" sx={{ml: 3}}>
                    ● Desqualificação: Infrações muito graves podem levar à desqualificação da equipe ou jogador. 
                    Caso um jogador seja desqualificado, a equipe pode continuar no torneio se houver um jogador substituto disponível.
                  </Typography>
                  <Typography variant="text2White" sx={{mt:1}}>
                    Infrações incluem, mas não se limitam a:
                  </Typography>
                  <Typography variant="text2White" sx={{ml:3}}>
                    ● Atrasos.
                  </Typography>
                  <Typography variant="text2White" sx={{ml:3}}>
                    ● Não seguir às instruções dos organizadores.
                  </Typography>
                  <Typography variant="text2White" sx={{ml:3}}>
                    ● Conduta antidesportiva.
                  </Typography>
                  <Typography variant="text2White" sx={{ml:3}}>
                    ● Conluio entre equipes adversárias.
                  </Typography>
                  <Typography variant="text2White" sx={{ml:3}}>
                    ● Comportamento agressivo.
                  </Typography>
                  <Typography variant="text2White" sx={{ml:3}}>
                    ● Trapaça (uso de softwares de terceiros não permitidos pela Riot).
                  </Typography>
                </Box>

                <Typography variant="title2" color="white" mb={2} mt={3}>
                  Premiação
                </Typography>

                <Box sx={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems: 'flex-start', px: {xs: 1, md: 5, lg: 10},}}>
                  <Typography variant="text2White">
                    1. A equipe campeã receberá 400 reais, troféu e medalhas de campeão.
                  </Typography>
                  <Typography variant="text2White">
                    2. A equipe vice-campeã receberá 150 reais e medalhas de vice-campeão.
                  </Typography>
                  <Typography variant="text2White">
                    3. A terceira colocada receberá a devolução da taxa de inscrição.
                  </Typography>
                </Box>








            </Paper>
           

          
    
        </Box>
  );
}

export default Regulamento;