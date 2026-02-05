import { Components, Theme } from '@mui/material/styles';

const MuiList: Components<Theme>['MuiList'] = {
  styleOverrides: {
    root: {
      padding: 8,
    },
  },
};

const MuiListItemButton: Components<Theme>['MuiListItemButton'] = {
  styleOverrides: {
    root: {
      borderRadius: 10,
      padding: '8px 12px',
      marginBottom: 2,
      color: '#8a8680',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: 'rgba(200, 165, 92, 0.06)',
        color: '#e8e4dc',
      },
      '&.Mui-selected': {
        backgroundColor: 'rgba(200, 165, 92, 0.10)',
        color: '#c8a55c',
        '&:hover': {
          backgroundColor: 'rgba(200, 165, 92, 0.12)',
        },
        '& .MuiListItemIcon-root': {
          color: '#c8a55c',
        },
      },
    },
  },
};

const MuiListItemIcon: Components<Theme>['MuiListItemIcon'] = {
  styleOverrides: {
    root: {
      minWidth: 36,
      color: '#8a8680',
    },
  },
};

export { MuiList, MuiListItemButton, MuiListItemIcon };
