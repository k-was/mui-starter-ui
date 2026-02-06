import { Components, Theme } from "@mui/material/styles";

const MuiDialog: Components<Theme>["MuiDialog"] = {
  styleOverrides: {
    paper: {
      background: "rgba(17, 17, 20, 0.95)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(200, 165, 92, 0.1)",
      borderRadius: 16,
      boxShadow: "0 24px 48px rgba(0, 0, 0, 0.5)",
    },
  },
};

const MuiDialogTitle: Components<Theme>["MuiDialogTitle"] = {
  styleOverrides: {
    root: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: "1.25rem",
    },
  },
};

export { MuiDialog, MuiDialogTitle };
