import { Components, Theme } from "@mui/material/styles";

const MuiDivider: Components<Theme>["MuiDivider"] = {
  styleOverrides: {
    root: {
      borderColor: "rgba(200, 165, 92, 0.08)",
    },
  },
};

export default MuiDivider;
