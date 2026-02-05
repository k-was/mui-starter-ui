import { Components, Theme } from '@mui/material/styles';

const MuiChip: Components<Theme>['MuiChip'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      fontWeight: 500,
      fontSize: '0.75rem',
      height: 28,
    },
    filled: {
      backgroundColor: 'rgba(200, 165, 92, 0.1)',
      color: '#c8a55c',
      border: '1px solid rgba(200, 165, 92, 0.15)',
      '&:hover': {
        backgroundColor: 'rgba(200, 165, 92, 0.15)',
      },
    },
    outlined: {
      borderColor: 'rgba(200, 165, 92, 0.15)',
      color: '#8a8680',
      '&:hover': {
        backgroundColor: 'rgba(200, 165, 92, 0.06)',
      },
    },
    colorSuccess: {
      backgroundColor: 'rgba(107, 143, 113, 0.15)',
      color: '#6b8f71',
      border: '1px solid rgba(107, 143, 113, 0.2)',
    },
    colorWarning: {
      backgroundColor: 'rgba(229, 192, 123, 0.15)',
      color: '#e5c07b',
      border: '1px solid rgba(229, 192, 123, 0.2)',
    },
    colorInfo: {
      backgroundColor: 'rgba(97, 175, 239, 0.15)',
      color: '#61afef',
      border: '1px solid rgba(97, 175, 239, 0.2)',
    },
    colorError: {
      backgroundColor: 'rgba(224, 108, 117, 0.15)',
      color: '#e06c75',
      border: '1px solid rgba(224, 108, 117, 0.2)',
    },
  },
};

export default MuiChip;
