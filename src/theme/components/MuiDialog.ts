import { alpha, Components, Theme } from "@mui/material/styles";
import { BLUR_XL, RADIUS_LG } from "../tokens";

const MuiDialog: Components<Theme>["MuiDialog"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      background: alpha(theme.palette.background.paper, 0.95),
      backdropFilter: `blur(${BLUR_XL}px)`,
      WebkitBackdropFilter: `blur(${BLUR_XL}px)`,
      border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      borderRadius: RADIUS_LG,
      boxShadow: `0 24px 48px ${alpha(theme.palette.common.black, 0.5)}`,
    }),
  },
};

const MuiDialogTitle: Components<Theme>["MuiDialogTitle"] = {
  defaultProps: {
    variant: "h4",
  },
};

export { MuiDialog, MuiDialogTitle };
