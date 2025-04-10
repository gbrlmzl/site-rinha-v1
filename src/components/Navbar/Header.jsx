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
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import rinhaLogo from '../../assets/imgs/rinhaTitleLogo.svg';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import rinhaLogoTitulo from '../../assets/imgs/rinhaLogoTitulo.svg';
import { color, gap } from '@mui/system';
import { blue } from '@mui/material/colors';
import Link from 'next/link';
import Inscricoes from '@/app/inscricoes/page';


const pages = ['Início'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
      
      <Container maxWidth="xl" sx={{ px: {xs: 1, md: 0}, py:{xs: 0.125, md: 0}, m: 0 }}>
        <Toolbar disableGutters > {/* Alinha o conteúdo do Toolbar para ocupar todo o espaço disponível */}
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
          <IconButton  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}> {/* Desativar sombreamento de clique e colocar um Onclick*/}
                <Image src={rinhaLogo} alt="" width={40} height={40} />
          </IconButton>
          {/*<Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Times New Roman',
              
              fontWeight: 900,
              //letterSpacing: '.3rem',
              //color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>*/}

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
              sx={{ display: { xs: 'block', md: 'none' }  }}
            >
              {/*{pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{backgroundColor:"blue"}} > 
                  <Typography sx={{ textAlign: 'center'}} fontFamily={"Archivo-Black"} color='#FF0A0A'>{page}</Typography> 
                </MenuItem>
              ))}*/}

              <MenuItem key={"inicio"}  onClick={handleCloseNavMenu} sx={{}} > {/*Define propriedades do menu para telas menores*/}
                <Link href="/" style={{ textDecoration: 'none'}}>
                  <Typography sx={{ textAlign: 'center'}} fontFamily={"Archivo-Black"} color='#000000'>Início</Typography> {/*Define propriedades do texto do menu para telas menores*/}
                </Link>
              </MenuItem>

              <MenuItem key={"inscricoes"}  onClick={handleCloseNavMenu} sx={{}} > {/*Define propriedades do menu para telas menores*/}
                <Link href="/inscricoes" style={{ textDecoration: 'none'}}>
                  <Typography sx={{ textAlign: 'center'}} fontFamily={"Archivo-Black"} color='#000000'>Inscrição</Typography> {/*Define propriedades do texto do menu para telas menores*/}
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
          <IconButton  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                <Link href={"/"} style={{ textDecoration: 'none'}}>
                  <Image src={rinhaLogo} alt="" width={55} height={55} />
                </Link>
          </IconButton>
          
          
          {/*<Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            svvx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2,   }}>{/*Define propriedades do menu para telas maiores*/}
            {/*{pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{my: 2, color: 'white', display: 'block', gap: 2, fontFamily: 'Archivo-Black', fontSize: 20,   padding: 1, "&:hover": {color: "#FF0A0A"}}}
                  {page}
                </Button>
            ))}*/}
            <Link href="/" style={{ textDecoration: 'none'}}>
              <Button
                sx={{my: 2, color: 'white', display: 'block', gap: 2, fontFamily: 'Archivo-Black', fontSize: 20, padding: 1, "&:hover": {color: "#FF0A0A"}}} 
              >
                Início
              </Button>
            </Link>



            <Link href="inscricoes" style={{ textDecoration: 'none'}}>
              <Button
                sx={{my: 2, color: 'white',  fontFamily: 'Archivo-Black', fontSize: 20, padding: 1, "&:hover": {color: "#FF0A0A"}}} 
              >
                Inscrição
              </Button>
            </Link>
          </Box>
          {/*<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
