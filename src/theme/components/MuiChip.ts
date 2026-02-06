import { alpha, Components, Theme } from "@mui/material/styles";
import { RADIUS_SM } from "../tokens";

const MuiChip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: {
      borderRadius: RADIUS_SM, // tighter radius for small pill shape
      fontWeight: 500,
      fontSize: "0.75rem",
      height: 28,
    },
    filled: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.glow}`,
      "&:hover": {
        backgroundColor: theme.palette.primary.glow,
      },
    }),
    outlined: ({ theme }) => ({
      borderColor: theme.palette.primary.glow,
      color: theme.palette.text.secondary,
      "&:hover": {
        backgroundColor: theme.palette.primary.faint,
      },
    }),
    colorSuccess: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.success.main, 0.15),
      color: theme.palette.success.main,
      border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
    }),
    colorWarning: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.warning.main, 0.15),
      color: theme.palette.warning.main,
      border: `1px solid ${alpha(theme.palette.warning.main, 0.2)}`,
    }),
    colorInfo: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.info.main, 0.15),
      color: theme.palette.info.main,
      border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
    }),
    colorError: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.error.main, 0.15),
      color: theme.palette.error.main,
      border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`,
    }),
  },
};

export default MuiChip;
