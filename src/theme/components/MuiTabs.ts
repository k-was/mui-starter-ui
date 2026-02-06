import { alpha, Components, Theme } from "@mui/material/styles";
import { RADIUS_SM } from "../tokens";

const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 40,
      backgroundColor: alpha(theme.palette.background.paper, 0.6),
      padding: 4,
      border: `1px solid ${theme.palette.primary.border}`,
    }),
    indicator: {
      display: "none",
    },
    flexContainer: {
      gap: 4,
    },
  },
};

const MuiTab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 32,
      borderRadius: RADIUS_SM, // compact tab pills
      padding: "6px 16px",
      fontSize: "0.8125rem",
      fontWeight: 500,
      textTransform: "none" as const,
      color: theme.palette.text.secondary,
      transition: "all 0.2s ease",
      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.border,
        color: theme.palette.primary.main,
      },
      "&:hover": {
        backgroundColor: theme.palette.primary.faint,
        color: theme.palette.text.primary,
      },
    }),
  },
};

export { MuiTabs, MuiTab };
