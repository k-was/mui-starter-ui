import { Components, Theme } from "@mui/material/styles";

const MuiIconButton: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: {
      borderRadius: 10,
      border: "1px solid rgba(200, 165, 92, 0.08)",
      color: "#8a8680",
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: "rgba(200, 165, 92, 0.06)",
        borderColor: "rgba(200, 165, 92, 0.2)",
        color: "#c8a55c",
      },
    },
  },
};

export default MuiIconButton;
