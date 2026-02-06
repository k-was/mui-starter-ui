import { alpha, Components, Theme } from "@mui/material/styles";

const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: `1px solid ${theme.palette.primary.border}`,
      color: theme.palette.text.secondary,
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: theme.palette.primary.faint,
        borderColor: alpha(theme.palette.primary.main, 0.2),
        color: theme.palette.primary.main,
      },
    }),
  },
};

export default MuiIconButton;
