import { alpha, Components, Theme } from "@mui/material/styles";
import { BLUR_MD, RADIUS_SM } from "../tokens";

const MuiMenu: Components<Theme>["MuiMenu"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      background: alpha(theme.palette.background.paper, 0.9),
      backdropFilter: `blur(${BLUR_MD}px)`,
      WebkitBackdropFilter: `blur(${BLUR_MD}px)`,
      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.4)}`,
    }),
    list: {
      padding: 4,
    },
  },
};

const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: RADIUS_SM,
      margin: "2px 4px",
      fontSize: "0.875rem",
      transition: "all 0.15s ease",
      "&:hover": {
        backgroundColor: theme.palette.primary.border,
      },
      "&.Mui-selected": {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        "&:hover": {
          backgroundColor: theme.palette.primary.border,
        },
      },
    }),
  },
};

export { MuiMenu, MuiMenuItem };
