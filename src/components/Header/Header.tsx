import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Image from 'next/image';

import Logo from '../../assets/Logo1.png';
import LogoAuth from '../../assets/Logo.png';
import { Container } from './styles';
import { useAuthState } from 'contexts/auth/AuthContext';
import { useGetUserById } from 'hooks/useGerUserById';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import Link from 'next/link';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  auth?: boolean;
}

type ItensTypes = {
  label: string;
  link: string;
}[];

const drawerWidth = 240;
const navItems: ItensTypes = [
  {
    label: 'Entrar',
    link: '/login'
  },
  {
    label: 'Criar conta',
    link: '/cadastro/cadastro'
  }
];

const authItems: ItensTypes = [
  {
    label: 'Inicio',
    link: '/inicio'
  },
  {
    label: 'Atividade',
    link: '/atividade'
  },
  {
    label: 'Seu Perfil',
    link: '/perfil'
  },
  {
    label: 'Carregar valor',
    link: '/carregarvalor'
  },
  {
    label: 'Pix',
    link: '/pix'
  },
  {
    label: 'Cartões',
    link: '/cartao'
  },
  {
    label: 'Encerrar sessão',
    link: '/'
  }
];

export default function Header(props: Props) {
  const { window, auth } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#C1FD35',
        height: '100%',
        paddingTop: '12px'
      }}
    >
      <Image src={Logo} alt="logo"></Image>
      <Divider />
      <List>
        {auth
          ? authItems.map(item => (
              <ListItem key={item.label} disablePadding>
                <Link href={item.link}>
                  <ListItemButton>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))
          : navItems.map(item => (
              <ListItem key={item.label} disablePadding>
                <Link href={item.link}>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const { user } = useAuthState();

  const { data } = useGetUserById(user.user_id);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: auth ? '#201F22' : '#C1FD35' }}
        component="nav"
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={'/'}>
            <Image src={auth ? LogoAuth : Logo} alt="logo"></Image>
          </Link>
          {auth && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '43px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#C1FD35',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#201F22',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}
              >
                {capitalizeFirstLetter(data?.firstname ?? '')}
                {capitalizeFirstLetter(data?.lastname ?? '')}
              </Box>
              <Container>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#fff',
                    fontSize: '1rem',
                    width: '30%',
                    fontFamily: 'Open Sans',
                    whiteSpace: 'nowrap',
                    fontWeight: '700'
                  }}
                >
                  Olá, {data?.firstname} {data?.lastname}
                </Typography>
              </Container>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ backgroundColor: '#C1FD35' }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
