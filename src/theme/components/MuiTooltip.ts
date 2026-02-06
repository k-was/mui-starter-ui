import { Components, Theme } from "@mui/material/styles";

const MuiTooltip: Components<Theme>["MuiTooltip"] = {
  styleOverrides: {
    tooltip: {
      background: "rgba(17, 17, 20, 0.9)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(200, 165, 92, 0.1)",
      borderRadius: 8,
      fontSize: "0.75rem",
      padding: "6px 12px",
      color: "#e8e4dc",
    },
    arrow: {
      color: "rgba(17, 17, 20, 0.9)",
    },
  },
};

export default MuiTooltip;
