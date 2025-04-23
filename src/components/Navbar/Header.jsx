"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import rinhaLogo from '../../assets/imgs/rinhaTitleLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
//import Inscricoes from '@/app/inscricoes/page';




function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{backgroundColor: "#0E1241", borderBottom: "2px solid rgb(208, 45, 241)"}}> {/* Define propriedades do AppBar */}
      
      <Container maxWidth="xl" sx={{ px: {xs: 1, md: 0}, py:{xs: 0.125, md: 0}, justifyContent: "center"}}> {/* Define propriedades do Container */}

        <Toolbar disableGutters sx={{display: "flex", justifyContent: "center"}} > {/* Alinha o conteúdo do Toolbar para ocupar todo o espaço disponível */}
          <Box sx={{display: 'flex', width:{xs:"100%", md:"75vw"}, justifyContent:"space-between",   }}> {/* Alinha o conteúdo do Toolbar para ocupar todo o espaço disponível */}
            {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
            <Box sx={{display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center"}}> {/* Alinha o conteúdo do Toolbar para ocupar todo o espaço disponível */}
              <Link href="/" style={{textDecoration:"none"}}>
                <IconButton  sx={{ mr: 1 }}> {/* Desativar sombreamento de clique e colocar um Onclick*/}
                      <Image src={rinhaLogo} alt="Logo da Rinha do Campus IV" width={60} height={60} />
                </IconButton>
              </Link>
            </Box>
            

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }} // Define propriedades do menu para telas menores
                slotProps={{list:{sx:{py:0, background:"#0E1241"}}}}//controla as propriedades do menu
               

              >
              

                <MenuItem key={"inicio"}  onClick={handleCloseNavMenu} sx={{}} > {/*Define propriedades do menu para telas menores*/}
                  <Link href="/" style={{ textDecoration: 'none'}}>
                    <Typography sx={{ textAlign: 'center'}} fontFamily={"Poppins"} color='#ffffff'>Início</Typography> {/*Define propriedades do texto do menu para telas menores*/}
                  </Link>
                </MenuItem>

                <MenuItem key={"inscricoes"}   onClick={handleCloseNavMenu} sx={{}} > {/*Define propriedades do menu para telas menores*/}
                  <Link href="/" style={{ textDecoration: 'none'}}>
                    <Typography sx={{ textAlign: 'center'}} disabled fontFamily={"Poppins"} color="#585858">Inscrição</Typography> {/*Define propriedades do texto do menu para telas menores*/}
                  </Link>
                </MenuItem>

                <MenuItem key={"regulamento"}  onClick={handleCloseNavMenu} sx={{}} > {/*Define propriedades do menu para telas menores*/}
                  <Link href="/regulamento" style={{ textDecoration: 'none'}}>
                    <Typography sx={{ textAlign: 'center'}} fontFamily={"Poppins"} color='#ffffff'>Regulamento</Typography> {/*Define propriedades do texto do menu para telas menores*/}
                  </Link>
                </MenuItem>

                <MenuItem key={"programacao"}  onClick={handleCloseNavMenu} sx={{}} > {/*Define propriedades do menu para telas menores*/}
                  <Link href="/programacao" style={{ textDecoration: 'none'}}>
                    <Typography sx={{ textAlign: 'center'}} fontFamily={"Poppins"} color='#ffffff'>Programação</Typography> {/*Define propriedades do texto do menu para telas menores*/}
                  </Link>
                  
                </MenuItem>
              </Menu>
            </Box>
            {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
            <IconButton  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                  <Link href={"/"} style={{ textDecoration: 'none'}}>
                    <Image src={rinhaLogo} alt="Logo da Rinha do Campus IV" width={55} height={55} />
                  </Link>
            </IconButton>
            
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, justifyContent:"center"   }}>{/*Menu NAVBAR para telas maiores*/}
              <Link href="/" style={{ textDecoration: 'none'}}>
                <Button
                  sx={{my: 2, color: 'white', display: 'block', gap: 2, fontFamily: 'Poppins', fontSize: 20, padding: 1, "&:hover": {color: "#01F7FF"}}} 
                >
                  Início
                </Button>
              </Link>
              
              <Link href="/" style={{ textDecoration: 'none'}}>
                <Button 
                  sx={{my: 2, color: "GrayText",  fontFamily: 'Poppins', fontSize: 20, padding: 1, /*"&:hover": {color: "#01F7FF"}*/}} 
                >
                  Inscrição
                </Button>
              </Link>
              
            
              <Link href="regulamento" style={{ textDecoration: 'none'}}>
                <Button
                  sx={{my: 2, color: 'white',  fontFamily: 'Poppins', fontSize: 20, padding: 1, "&:hover": {color: "#01F7FF"}}} 
                >
                  Regulamento
                </Button>
              </Link>
              <Link href="/programacao" style={{ textDecoration: 'none'}}>
                <Button
                  sx={{my: 2, color: 'white',  fontFamily: 'Poppins', fontSize: 20, padding: 1, "&:hover": {color: "#01F7FF"}}} 
                >
                  Programação
                </Button>
              </Link>
            </Box>
            <Box sx={{display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center"}}>
              {/*Quero criar um butão que leve o usuário para o link na twitch twitch.tv/rinhadocampusiv*/}
              <Link href="https://www.twitch.tv/rinhacampusiv" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none'}}>
                <Button variant="contained" sx={{background: "#11B5E4",my: 2, borderRadius: 2, color: 'black', borderColor: 'white', fontFamily: 'Roboto', fontSize: 18, padding: 1, "&:hover": { color:"#FFFFFF"}}} > {/*Define propriedades do botão para telas maiores*/}
                  Transmissão
                </Button>
              </Link>
            </Box>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
