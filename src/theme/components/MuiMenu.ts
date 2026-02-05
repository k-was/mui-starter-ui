import { Components, Theme } from '@mui/material/styles';

const MuiMenu: Components<Theme>['MuiMenu'] = {
  styleOverrides: {
    paper: {
      background: 'rgba(17, 17, 20, 0.9)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(200, 165, 92, 0.1)',
      borderRadius: 12,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    },
    list: {
      padding: 4,
    },
  },
};

const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      margin: '2px 4px',
      fontSize: '0.875rem',
      transition: 'all 0.15s ease',
      '&:hover': {
        backgroundColor: 'rgba(200, 165, 92, 0.08)',
      },
      '&.Mui-selected': {
        backgroundColor: 'rgba(200, 165, 92, 0.1)',
        '&:hover': {
          backgroundColor: 'rgba(200, 165, 92, 0.12)',
        },
      },
    },
  },
};

export { MuiMenu, MuiMenuItem };
