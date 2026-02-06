import { alpha, Components, Theme } from "@mui/material/styles";

const MuiAvatar: Components<Theme>["MuiAvatar"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: "0.875rem",
    }),
  },
};

export default MuiAvatar;
