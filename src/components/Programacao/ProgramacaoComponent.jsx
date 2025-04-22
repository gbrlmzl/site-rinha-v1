import Image from "next/image";;
import {Box} from "@mui/system";
import programacaoTorneio from "../../assets/imgs/programacaoTorneioTransmissao.svg";



function ProgramacaoComponent(){
    return (
        <Box sx={{ display: "flex", justifyContent: "center", width: "90%", alignContent:"center" }}>
          {/* Desktop image */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: "100%",
              justifyContent: "center",
              px: 8,
              py: 4, 
            }}
          >
            <Image
              src={programacaoTorneio}
              alt="Calendário da Fase Final"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Box>
    
          {/* Mobile image */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              justifyContent: "center",
              py: 3
               
            }}
          >
            <Image
              src={programacaoTorneio}
              alt="Programação (Mobile)"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Box>
        </Box>
      );
}

export default ProgramacaoComponent;