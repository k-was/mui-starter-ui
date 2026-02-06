import { alpha, Components, Theme } from "@mui/material/styles";
import { BLUR_MD, RADIUS_SM } from "../tokens";

const MuiTooltip: Components<Theme>["MuiTooltip"] = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      background: alpha(theme.palette.background.paper, 0.9),
      backdropFilter: `blur(${BLUR_MD}px)`,
      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      borderRadius: RADIUS_SM, // compact tooltip
      fontSize: "0.75rem",
      padding: "6px 12px",
      color: theme.palette.text.primary,
    }),
    arrow: ({ theme }) => ({
      color: alpha(theme.palette.background.paper, 0.9),
    }),
  },
};

export default MuiTooltip;
