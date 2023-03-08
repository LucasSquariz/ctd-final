import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: '100%',
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
          © 2022 Digital Money House
        </Typography>
      </BottomNavigation>
    </Box>
  );
}
