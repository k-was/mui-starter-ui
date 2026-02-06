import { Components, Theme } from "@mui/material/styles";

const MuiDrawer: Components<Theme>["MuiDrawer"] = {
  styleOverrides: {
    paper: {
      backgroundColor: "#0c0c0e",
      borderRight: "1px solid rgba(200, 165, 92, 0.08)",
      backgroundImage: "none",
    },
  },
};

export default MuiDrawer;
