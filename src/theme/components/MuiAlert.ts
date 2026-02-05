import { Components, Theme } from "@mui/material/styles";

const MuiAlert: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    root: {
      borderRadius: 12,
      border: "1px solid",
      backdropFilter: "blur(8px)",
      fontSize: "0.875rem",
    },
    standardSuccess: {
      backgroundColor: "rgba(107, 143, 113, 0.1)",
      borderColor: "rgba(107, 143, 113, 0.2)",
      color: "#6b8f71",
    },
    standardError: {
      backgroundColor: "rgba(224, 108, 117, 0.1)",
      borderColor: "rgba(224, 108, 117, 0.2)",
      color: "#e06c75",
    },
    standardWarning: {
      backgroundColor: "rgba(229, 192, 123, 0.1)",
      borderColor: "rgba(229, 192, 123, 0.2)",
      color: "#e5c07b",
    },
    standardInfo: {
      backgroundColor: "rgba(97, 175, 239, 0.1)",
      borderColor: "rgba(97, 175, 239, 0.2)",
      color: "#61afef",
    },
  },
};

export default MuiAlert;
