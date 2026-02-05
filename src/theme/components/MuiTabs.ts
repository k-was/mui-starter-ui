import { Components, Theme } from '@mui/material/styles';

const MuiTabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    root: {
      minHeight: 40,
      backgroundColor: 'rgba(17, 17, 20, 0.6)',
      borderRadius: 10,
      padding: 4,
      border: '1px solid rgba(200, 165, 92, 0.08)',
    },
    indicator: {
      display: 'none',
    },
    flexContainer: {
      gap: 4,
    },
  },
};

const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root: {
      minHeight: 32,
      borderRadius: 8,
      padding: '6px 16px',
      fontSize: '0.8125rem',
      fontWeight: 500,
      textTransform: 'none' as const,
      color: '#8a8680',
      transition: 'all 0.2s ease',
      '&.Mui-selected': {
        backgroundColor: 'rgba(200, 165, 92, 0.12)',
        color: '#c8a55c',
      },
      '&:hover': {
        backgroundColor: 'rgba(200, 165, 92, 0.06)',
        color: '#e8e4dc',
      },
    },
  },
};

export { MuiTabs, MuiTab };
