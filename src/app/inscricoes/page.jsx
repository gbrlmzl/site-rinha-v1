'use client'
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import CadastroEquipes from '../../components/CadastroDeEquipes/CadastroEquipes';
import Header from '../../components/Navbar/Header'; 
import ModalBox from '../../components/CadastroDeEquipes/ModalBox';



export default function Inscricoes() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Abre o modal automaticamente quando a página carrega
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  return (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
    <Header />
    <CadastroEquipes />
    <ModalBox open={open} handleClose={handleClose} /> {/* Modal que aparece quando a página carrega */}

    
  </Box>
 
    
  );
}
