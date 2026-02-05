import { Components, Theme } from '@mui/material/styles';

const MuiPaper: Components<Theme>['MuiPaper'] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: {
      backgroundImage: 'none',
      backgroundColor: '#111114',
      border: '1px solid rgba(200, 165, 92, 0.08)',
    },
  },
};

export default MuiPaper;
