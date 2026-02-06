import { alpha, Components, Theme } from "@mui/material/styles";
import { BLUR_SM } from "../tokens";

const MuiAlert: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    root: {
      border: "1px solid",
      backdropFilter: `blur(${BLUR_SM}px)`,
      fontSize: "0.875rem",
    },
    standardSuccess: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.success.main, 0.1),
      borderColor: alpha(theme.palette.success.main, 0.2),
      color: theme.palette.success.main,
    }),
    standardError: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.error.main, 0.1),
      borderColor: alpha(theme.palette.error.main, 0.2),
      color: theme.palette.error.main,
    }),
    standardWarning: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.warning.main, 0.1),
      borderColor: alpha(theme.palette.warning.main, 0.2),
      color: theme.palette.warning.main,
    }),
    standardInfo: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.info.main, 0.1),
      borderColor: alpha(theme.palette.info.main, 0.2),
      color: theme.palette.info.main,
    }),
  },
};

export default MuiAlert;
