import { Components, Theme } from "@mui/material/styles";
import { RADIUS_MD } from "../tokens";

const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  styleOverrides: {
    root: {
      width: 44,
      height: 24,
      padding: 0,
    },
    switchBase: ({ theme }) => ({
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: theme.palette.primary.contrastText,
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
        },
      },
    }),
    thumb: {
      width: 20,
      height: 20,
      boxShadow: "none",
    },
    track: ({ theme }) => ({
      borderRadius: RADIUS_MD, // pill shape — track doesn't inherit theme shape
      backgroundColor: theme.palette.primary.glow,
      opacity: 1,
    }),
  },
};

export default MuiSwitch;
