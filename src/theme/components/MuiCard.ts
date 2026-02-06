import { alpha, Components, Theme } from "@mui/material/styles";
import { BLUR_MD, RADIUS_LG } from "../tokens";

const MuiCard: Components<Theme>["MuiCard"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      background: alpha(theme.palette.background.paper, 0.6),
      backdropFilter: `blur(${BLUR_MD}px)`,
      WebkitBackdropFilter: `blur(${BLUR_MD}px)`,
      border: `1px solid ${theme.palette.primary.border}`,
      borderRadius: RADIUS_LG,
      boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.08)}, 0 0 40px ${alpha(theme.palette.primary.main, 0.04)}`,
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        boxShadow: `0 0 30px ${alpha(theme.palette.primary.main, 0.12)}, 0 0 60px ${alpha(theme.palette.primary.main, 0.06)}`,
        borderColor: alpha(theme.palette.primary.main, 0.15),
      },
    }),
  },
};

export default MuiCard;
