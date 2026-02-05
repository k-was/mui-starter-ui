import { Components, Theme } from '@mui/material/styles';

const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: `
    @keyframes grain {
      0%, 100% { transform: translate(0, 0); }
      10% { transform: translate(-5%, -10%); }
      30% { transform: translate(3%, -15%); }
      50% { transform: translate(-10%, 5%); }
      70% { transform: translate(7%, -8%); }
      90% { transform: translate(-3%, 10%); }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: #08080a;
      color: #e8e4dc;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ::selection {
      background: rgba(200, 165, 92, 0.25);
      color: #e8e4dc;
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(200, 165, 92, 0.15);
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(200, 165, 92, 0.25);
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 100px #111114 inset !important;
      -webkit-text-fill-color: #e8e4dc !important;
      caret-color: #e8e4dc;
    }
  `,
};

export default MuiCssBaseline;
