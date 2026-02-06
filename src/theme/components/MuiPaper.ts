import { Components, Theme } from "@mui/material/styles";

const MuiPaper: Components<Theme>["MuiPaper"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundImage: "none",
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.primary.border}`,
    }),
  },
};

export default MuiPaper;
