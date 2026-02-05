import { Components, Theme } from '@mui/material/styles';

const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: 10,
      padding: '10px 24px',
      fontWeight: 600,
      fontSize: '0.8125rem',
      letterSpacing: '0.04em',
      textTransform: 'none' as const,
      transition: 'all 0.2s ease',
    },
    contained: {
      background: 'linear-gradient(135deg, #c8a55c 0%, #a88a3e 100%)',
      color: '#08080a',
      '&:hover': {
        background: 'linear-gradient(135deg, #d4b76e 0%, #c8a55c 100%)',
        boxShadow: '0 0 20px rgba(200, 165, 92, 0.3)',
      },
    },
    outlined: {
      borderColor: 'rgba(200, 165, 92, 0.2)',
      color: '#e8e4dc',
      backgroundColor: 'rgba(200, 165, 92, 0.04)',
      '&:hover': {
        borderColor: 'rgba(200, 165, 92, 0.4)',
        backgroundColor: 'rgba(200, 165, 92, 0.08)',
      },
    },
    text: {
      color: '#8a8680',
      '&:hover': {
        backgroundColor: 'rgba(200, 165, 92, 0.06)',
        color: '#e8e4dc',
      },
    },
  },
};

export default MuiButton;
