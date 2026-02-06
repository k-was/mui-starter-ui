import { alpha, Components, Theme } from "@mui/material/styles";

const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    variant: "outlined",
    fullWidth: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiOutlinedInput-root": {
        backgroundColor: alpha(theme.palette.background.default, 0.6),
        fontSize: "0.9375rem",
        "& fieldset": {
          borderColor: theme.palette.primary.border,
          transition: "border-color 0.2s ease",
        },
        "&:hover fieldset": {
          borderColor: alpha(theme.palette.primary.main, 0.2),
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.primary.main,
          borderWidth: 1,
          boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.1)}`,
        },
      },
      "& .MuiInputLabel-root": {
        fontSize: "0.6875rem",
        fontWeight: 600,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: theme.palette.text.secondary,
        "&.Mui-focused": {
          color: theme.palette.primary.main,
        },
      },
      "& .MuiOutlinedInput-input": {
        color: theme.palette.text.primary,
        "&::placeholder": {
          color: theme.palette.text.disabled,
          opacity: 1,
        },
      },
    }),
  },
};

export default MuiTextField;
