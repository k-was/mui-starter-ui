import { alpha, Components, Theme } from "@mui/material/styles";

const MuiList: Components<Theme>["MuiList"] = {
  styleOverrides: {
    root: {
      padding: 8,
    },
  },
};

const MuiListItemButton: Components<Theme>["MuiListItemButton"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: "8px 12px",
      marginBottom: 2,
      color: theme.palette.text.secondary,
      transition: "all 0.2s ease",
      "&:hover": {
        backgroundColor: theme.palette.primary.faint,
        color: theme.palette.text.primary,
      },
      "&.Mui-selected": {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.border,
        },
        "& .MuiListItemIcon-root": {
          color: theme.palette.primary.main,
        },
      },
    }),
  },
};

const MuiListItemIcon: Components<Theme>["MuiListItemIcon"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minWidth: 36,
      color: theme.palette.text.secondary,
    }),
  },
};

export { MuiList, MuiListItemButton, MuiListItemIcon };
