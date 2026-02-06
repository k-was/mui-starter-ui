import { Components, Theme } from "@mui/material/styles";
import { BG_DEFAULT, BG_PAPER, TEXT_PRIMARY, PRIMARY } from "../tokens";

const MuiCssBaseline: Components<Theme>["MuiCssBaseline"] = {
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
      background: ${BG_DEFAULT};
      color: ${TEXT_PRIMARY};
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    ::selection {
      background: ${PRIMARY}40;
      color: ${TEXT_PRIMARY};
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: ${PRIMARY}26;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${PRIMARY}40;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 100px ${BG_PAPER} inset !important;
      -webkit-text-fill-color: ${TEXT_PRIMARY} !important;
      caret-color: ${TEXT_PRIMARY};
    }
  `,
};

export default MuiCssBaseline;
