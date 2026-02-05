import { Components, Theme } from '@mui/material/styles';

const MuiCard: Components<Theme>['MuiCard'] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: {
      background: 'rgba(17, 17, 20, 0.6)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(200, 165, 92, 0.08)',
      borderRadius: 16,
      boxShadow:
        '0 0 20px rgba(200, 165, 92, 0.08), 0 0 40px rgba(200, 165, 92, 0.04)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        boxShadow:
          '0 0 30px rgba(200, 165, 92, 0.12), 0 0 60px rgba(200, 165, 92, 0.06)',
        borderColor: 'rgba(200, 165, 92, 0.15)',
      },
    },
  },
};

export default MuiCard;
