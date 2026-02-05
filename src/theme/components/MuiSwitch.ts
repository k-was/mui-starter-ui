import { Components, Theme } from '@mui/material/styles';

const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  styleOverrides: {
    root: {
      width: 44,
      height: 24,
      padding: 0,
    },
    switchBase: {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#08080a',
        '& + .MuiSwitch-track': {
          backgroundColor: '#c8a55c',
          opacity: 1,
        },
      },
    },
    thumb: {
      width: 20,
      height: 20,
      boxShadow: 'none',
    },
    track: {
      borderRadius: 12,
      backgroundColor: 'rgba(200, 165, 92, 0.15)',
      opacity: 1,
    },
  },
};

export default MuiSwitch;
