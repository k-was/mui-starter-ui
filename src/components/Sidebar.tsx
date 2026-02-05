import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/DashboardOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const navItems = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { label: "Profile", icon: <PersonIcon />, path: "/profile" },
  { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const EXPANDED_WIDTH = 260;
const COLLAPSED_WIDTH = 72;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const width = collapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: collapsed ? 0 : 2.5,
          py: 2.5,
          justifyContent: collapsed ? "center" : "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: 1,
            borderRadius: 1.5,
            bgcolor: "gold.faint",
            border: "1px solid",
            borderColor: "gold.border",
          }}
        >
          <AutoAwesomeIcon sx={{ color: "gold.main", fontSize: 20 }} />
        </Box>
        {!collapsed && (
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            Portal
          </Typography>
        )}
      </Box>

      {/* Nav */}
      <List sx={{ flex: 1, px: collapsed ? 1 : 1.5 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            selected={location.pathname === item.path}
            onClick={() => navigate(item.path)}
            sx={{
              justifyContent: collapsed ? "center" : "flex-start",
              px: collapsed ? 0 : 1.5,
            }}
          >
            <ListItemIcon
              sx={{
                justifyContent: "center",
                minWidth: collapsed ? 0 : 36,
              }}
            >
              {item.icon}
            </ListItemIcon>
            {!collapsed && <ListItemText primary={item.label} />}
          </ListItemButton>
        ))}
      </List>

      {/* Notification pill */}
      {!collapsed && (
        <Box sx={{ mx: 2, mb: 2, p: 2, borderRadius: 2, bgcolor: "gold.faint", border: "1px solid", borderColor: "gold.border" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Badge badgeContent={3} color="primary" sx={{ "& .MuiBadge-badge": { bgcolor: "gold.main", color: "background.default", fontSize: "0.65rem", fontWeight: 700, minWidth: 18, height: 18 } }}>
              <NotificationsIcon sx={{ fontSize: 18, color: "gold.main" }} />
            </Badge>
            <Typography variant="body2" sx={{ color: "gold.main", fontWeight: 600 }}>
              Updates
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ lineHeight: 1.4 }}>
            You have 3 new notifications waiting for your attention.
          </Typography>
        </Box>
      )}

      <Divider />

      {/* User */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          p: 2,
          justifyContent: collapsed ? "center" : "flex-start",
        }}
      >
        <Avatar sx={{ width: 36, height: 36 }}>JD</Avatar>
        {!collapsed && (
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 600, lineHeight: 1.3 }}>
              Jane Doe
            </Typography>
            <Typography variant="caption" noWrap>
              jane@example.com
            </Typography>
          </Box>
        )}
        {!collapsed && (
          <IconButton size="small" onClick={() => navigate("/login")} sx={{ border: "none" }}>
            <LogoutIcon sx={{ fontSize: 18 }} />
          </IconButton>
        )}
      </Box>

      {/* Collapse toggle */}
      <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
        <IconButton size="small" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            <ChevronRightIcon sx={{ fontSize: 18 }} />
          ) : (
            <ChevronLeftIcon sx={{ fontSize: 18 }} />
          )}
        </IconButton>
      </Box>
    </Drawer>
  );
}
