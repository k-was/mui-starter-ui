import { alpha, Components, Theme } from "@mui/material/styles";

const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      padding: "10px 24px",
      fontWeight: 600,
      fontSize: "0.8125rem",
      letterSpacing: "0.04em",
      textTransform: "none" as const,
      transition: "all 0.2s ease",
    },
    contained: ({ theme }) => ({
      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
        boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.3)}`,
      },
    }),
    outlined: ({ theme }) => ({
      borderColor: alpha(theme.palette.primary.main, 0.2),
      color: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
      "&:hover": {
        borderColor: alpha(theme.palette.primary.main, 0.4),
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
      },
    }),
    text: ({ theme }) => ({
      color: theme.palette.text.secondary,
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.06),
        color: theme.palette.text.primary,
      },
    }),
  },
};

export default MuiButton;
