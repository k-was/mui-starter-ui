import { Components, Theme } from '@mui/material/styles';

const MuiTextField: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    variant: 'outlined',
    fullWidth: true,
  },
  styleOverrides: {
    root: {
      '& .MuiOutlinedInput-root': {
        backgroundColor: 'rgba(8, 8, 10, 0.6)',
        borderRadius: 10,
        fontSize: '0.9375rem',
        '& fieldset': {
          borderColor: 'rgba(200, 165, 92, 0.08)',
          transition: 'border-color 0.2s ease',
        },
        '&:hover fieldset': {
          borderColor: 'rgba(200, 165, 92, 0.2)',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#c8a55c',
          borderWidth: 1,
          boxShadow: '0 0 0 3px rgba(200, 165, 92, 0.1)',
        },
      },
      '& .MuiInputLabel-root': {
        fontSize: '0.6875rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#8a8680',
        '&.Mui-focused': {
          color: '#c8a55c',
        },
      },
      '& .MuiOutlinedInput-input': {
        color: '#e8e4dc',
        '&::placeholder': {
          color: '#555250',
          opacity: 1,
        },
      },
    },
  },
};

export default MuiTextField;
