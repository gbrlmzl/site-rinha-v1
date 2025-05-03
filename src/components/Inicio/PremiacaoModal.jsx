'use client'
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import Image from "next/image";

import medalhaOuroImg from "../../assets/imgs/medalhaOuro.svg";
import medalhaPrataImg from "../../assets/imgs/medalhaPrata.svg";
import medalhaBronzeImg from "../../assets/imgs/medalhaBronze.svg";

function PremiacaoModal({ open, handleClose }){
    return(
        <Box>
            {/* Modal */}
            <Dialog
            open={open}
            onClose={handleClose}
            slotProps={{paper:{sx: { borderRadius: 4, py: {xs: 3, md:2}, px: {xs: 1, md:2}, backgroundColor: "#000022", color: "white", border: "2px solid #01F7FF" }},
                        backdrop:{sx: { backgroundColor: "rgba(0, 0, 0, 0.85)" }}}} 
            >
                <DialogTitle fontFamily="Russo One" sx={{ fontSize: '1.5rem', textAlign:"center" }}>PREMIAÇÃO</DialogTitle>
                <DialogContent>
                    {/* Conteúdo em laptops e desktops */}
                    <Box sx={{ display: {xs: "none", md:"flex"}, flexDirection: "column", width: {xs:"70vw", md: "25vw"} }}> {/* Premiação */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Image src={medalhaOuroImg} alt="Medalha de Ouro" width={50} height={50} />
                                <Typography fontSize={"0.8rem"}>400 R$ + Medalhas</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Image src={medalhaPrataImg} alt="Medalha de Prata" width={50} height={50} />
                                    <Typography fontSize={"0.8rem"} textAlign={"center"}>150 R$ + Medalhas</Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Image src={medalhaBronzeImg} alt="Medalha de Bronze" width={50} height={50} />
                                    <Typography fontSize={"0.8rem"} textAlign={"center"}>Devolução da taxa de inscrição</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Conteúdo em dispositivos móveis */}
                    <Box sx={{ display:{xs: "flex", md: "none"}, flexDirection: "column", alignItems:"flex-start",  }}> {/* Premiação */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Image src={medalhaOuroImg} alt="Medalha de Ouro" width={50} height={50} />
                                <Typography fontSize={"0.8rem"} mt={2}>400 R$ + Medalhas</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Image src={medalhaPrataImg} alt="Medalha de Prata" width={50} height={50} />
                                <Typography fontSize={"0.8rem"} textAlign={"center"} mt={2}>150 R$ + Medalhas</Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Image src={medalhaBronzeImg} alt="Medalha de Bronze" width={50} height={50} />
                                <Typography fontSize={"0.75rem"} textAlign={"center"} mt={2}>Devolução da taxa de inscrição</Typography>
                            </Box>
                            
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Box>
                        <Button
                            variant="contained"
                            color="cyanButton"
                            onClick={handleClose}
                            sx={{ fontWeight: "bold", ":hover": { backgroundColor: "#0051E6", color: "white" } }}
                        >
                            CONTINUAR
                        </Button>

                    </Box>
                </DialogActions>
                
            </Dialog>
        </Box>
        
    )
}

export default PremiacaoModal;