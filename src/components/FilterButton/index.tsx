import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterIcon from 'assets/filterIcon';
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from '@mui/material';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

export default function CustomizedMenus({ FilterByDate }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<FilterIcon />}
        sx={{
          backgroundColor: '#C1FD35',
          color: 'black',
          fontWeight: 'bold',
          width: '100%',
          minWidth: '190px',
          height: '5rem',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '0.625rem',
          '&:hover': { backgroundColor: '#acdb3f', opacity: '0.5' },
          '& .MuiPaper-root': {
            backgroundColor: '#acdb3f'
          }
        }}
      >
        Filtrar
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            width: '20em',
            backgroundColor: '#EEEAEA',
            padding: '1em'
          }
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <FormLabel id="demo-radio-buttons-group-label">
            Período <KeyboardArrowDownIcon />
          </FormLabel>
          <Typography onClick={() => FilterByDate('reset')}>
            limpar filtros
          </Typography>
        </div>
        <Divider sx={{ my: 0.5 }} />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <MenuItem>
            <FormControlLabel
              value="Hoje"
              control={<Radio />}
              label="Hoje"
              labelPlacement="start"
              onClick={() => FilterByDate('hoje')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              value="ontem"
              control={<Radio />}
              label="Ontem"
              labelPlacement="start"
              onClick={() => FilterByDate('ontem')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              value="Última semana"
              control={<Radio />}
              label="Última semana"
              labelPlacement="start"
              onClick={() => FilterByDate('semana')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              value="Últimos 15 dias"
              control={<Radio />}
              label="Últimos 15 dias"
              labelPlacement="start"
              onClick={() => FilterByDate('15 dias')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              value="Último mês"
              control={<Radio />}
              label="Últimos mês"
              labelPlacement="start"
              onClick={() => FilterByDate('mes')}
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              value="Último ano"
              control={<Radio />}
              label="Último ano"
              labelPlacement="start"
              onClick={() => FilterByDate('ano')}
            />
          </MenuItem>
        </RadioGroup>
      </StyledMenu>
    </div>
  );
}
