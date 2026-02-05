import { Components, Theme } from "@mui/material/styles";

const MuiAvatar: Components<Theme>["MuiAvatar"] = {
  styleOverrides: {
    root: {
      border: "2px solid rgba(200, 165, 92, 0.2)",
      backgroundColor: "rgba(200, 165, 92, 0.1)",
      color: "#c8a55c",
      fontWeight: 600,
      fontSize: "0.875rem",
    },
  },
};

export default MuiAvatar;
