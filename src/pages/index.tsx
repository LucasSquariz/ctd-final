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
import imgHome from '../assets/imgHome.png';
import { ImgHome } from 'styles/ImgHome';
import Logo from '../assets/Logo.png';
import Link from '@mui/material/Link';
import { border, borderRadius, margin, padding } from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Entrar', 'Criar conta'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Image src={Logo} alt="logo"></Image>
      <Divider />
      <List>
        {navItems.map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        sx={{ backgroundColor: '#201F22', justifyContent: 'space-between' }}
        component="nav"
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Image src={Logo} alt="logo"></Image>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link
              sx={{
                border: '1px solid #C1FD35',
                padding: '10px',
                borderRadius: '5px',
                margin: 2,
                textDecoration: 'none',
                color: '#C1FD35'
              }}
              href="/login"
            >
              Entra
            </Link>
            <Link
              sx={{
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#C1FD35',
                margin: 2,
                color: '#000',
                textDecoration: 'none'
              }}
              href="/cadastro/cadastro"
            >
              Criar Conta
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>{' '}
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Box
          sx={{
            position: 'fixed',
            top: 30,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1
          }}
        >
          <ImgHome src={imgHome} alt="img" />
        </Box>
        <Box
          sx={{
            position: 'fixed',
            top: '18%',
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                marginLeft: 4,
                fontSize: '3rem',
                width: '30%'
              }}
            >
              De agora em diante, fa??a mais com seu dinheiro
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: '#C1FD35', marginLeft: 4 }}>
              Sua nova carteira virtual
            </Typography>
          </Box>
          <Box
            sx={{
              position: 'fixed',
              bottom: 64,
              width: '100vw'
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '80px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#fff',
                  width: '30%',
                  height: '200px',
                  borderRadius: '30px',
                  margin: '-14px 5px',
                  padding: '5px'
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#000',
                    marginLeft: 3,
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    borderBottom: '1px #C1FD35 solid',
                    width: '90%',
                    padding: '22px 0px 5px 0px'
                  }}
                >
                  Transfer??ncia
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#000',
                    marginLeft: 3,
                    fontSize: '1.2rem'
                  }}
                >
                  Com a Digital Money House voc?? pode transferir dinheiro para
                  outras contas, bem como receber transfer??ncias e centralizar
                  seus investimentos na nossa carteira virtual.
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  width: '30%',
                  height: '200px',
                  borderRadius: '30px',
                  margin: '-14px 5px',
                  padding: '5px'
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#000',
                    marginLeft: 3,
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    borderBottom: '1px #C1FD35 solid',
                    width: '90%',
                    padding: '22px 0px 5px 0px'
                  }}
                >
                  Pagamento de servi??os
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#000',
                    marginLeft: 3,
                    fontSize: '1.2rem'
                  }}
                >
                  Pague mensalmente por servi??os com apenas 3 clicks. F??cil,
                  r??pido e conveniente. Esque??a os boletos em papel.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '100%',
                height: '120px',
                display: 'flex',
                backgroundColor: ' #C1FD35',
                justifyContent: 'center',
                borderRadius: '30px 30px 0px 0px'
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100vw',
          position: 'fixed',
          bottom: 0,
          backgroundColor: '#3A393E'
        }}
      >
        <BottomNavigation
          sx={{
            backgroundColor: '#3A393E',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 4
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Typography variant="h6" sx={{ color: '#C1FD35', marginLeft: 3 }}>
            ?? 2022 Digital Money House
          </Typography>
        </BottomNavigation>
      </Box>
    </Box>
  );
}
