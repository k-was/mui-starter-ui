import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flex: 1,
          p: 4,
          overflow: "auto",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(200,165,92,0.03) 0%, transparent 50%), " +
              "radial-gradient(ellipse at 80% 20%, rgba(200,165,92,0.02) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
