import { Components, Theme } from "@mui/material/styles";

const MuiDrawer: Components<Theme>["MuiDrawer"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      backgroundColor: theme.palette.sidebar.bg,
      borderRight: `1px solid ${theme.palette.primary.border}`,
      backgroundImage: "none",
    }),
  },
};

export default MuiDrawer;
