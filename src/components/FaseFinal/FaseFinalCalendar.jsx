import { Box } from "@mui/system";
import Image from "next/image";
import calendarioFaseFinal from "../../assets/imgs/calendarioFaseFinal.svg";
import calendarioFaseFinalMobile from "../../assets/imgs/calendarioFaseFinalMobile.svg";

export default function FaseFinalCalendar() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "90%", alignContent:"center" }}>
      {/* Desktop image */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          src={calendarioFaseFinal}
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
        }}
      >
        <Image
          src={calendarioFaseFinalMobile}
          alt="Calendário da Fase Final (Mobile)"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </Box>
    </Box>
  );
}
