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
            {navItems.map(item => (
              <Button
                key={item}
                sx={{
                  color: '#201F22',
                  backgroundColor: '#C1FD35',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  margin: '4px'
                }}
              >
                {item}
              </Button>
            ))}
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
              De agora em diante, faça mais com seu dinheiro
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
                  Transferência
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#000',
                    marginLeft: 3,
                    fontSize: '1.2rem'
                  }}
                >
                  Com a Digital Money House você pode transferir dinheiro para
                  outras contas, bem como receber transferências e centralizar
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
                  Pagamento de serviços
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: '#000',
                    marginLeft: 3,
                    fontSize: '1.2rem'
                  }}
                >
                  Pague mensalmente por serviços com apenas 3 clicks. Fácil,
                  rápido e conveniente. Esqueça os boletos em papel.
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
    </Box>
  );
}
