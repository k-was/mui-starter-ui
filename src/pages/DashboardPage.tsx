import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import BoltIcon from "@mui/icons-material/Bolt";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const stats = [
  {
    label: "Total Revenue",
    value: "$48,290",
    change: "+12.5%",
    up: true,
    icon: <AttachMoneyIcon />,
  },
  {
    label: "Active Users",
    value: "2,847",
    change: "+8.2%",
    up: true,
    icon: <PeopleOutlineIcon />,
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    change: "-0.4%",
    up: false,
    icon: <ShowChartIcon />,
  },
  {
    label: "Growth Index",
    value: "94.2",
    change: "+2.1%",
    up: true,
    icon: <TrendingUpIcon />,
  },
];

const revenueData = [30, 40, 35, 50, 49, 60, 70, 65, 80, 85, 90, 95];
const userGrowthData = [
  120, 132, 101, 134, 90, 230, 210, 250, 280, 310, 320, 350,
];

const activities = [
  {
    name: "Alex Chen",
    initials: "AC",
    action: "deployed a new release",
    detail: "v2.4.1",
    time: "2 min ago",
  },
  {
    name: "Maria Santos",
    initials: "MS",
    action: "updated the design system",
    detail: "Components",
    time: "18 min ago",
  },
  {
    name: "James Wilson",
    initials: "JW",
    action: "merged pull request",
    detail: "#247",
    time: "1 hour ago",
  },
  {
    name: "Sarah Kim",
    initials: "SK",
    action: "commented on",
    detail: "API Refactor",
    time: "3 hours ago",
  },
  {
    name: "David Park",
    initials: "DP",
    action: "created a new branch",
    detail: "feat/auth-v2",
    time: "5 hours ago",
  },
];

const quickActions = ["New Project", "Invite Team", "Run Report", "View Logs"];

function MiniChart({
  data,
  color = "rgba(200,165,92,0.7)",
  height = 48,
}: {
  data: number[];
  color?: string;
  height?: number;
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 100;
  const points = data
    .map(
      (v, i) =>
        `${(i / (data.length - 1)) * w},${height - ((v - min) / range) * height}`
    )
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${w} ${height}`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={`grad-${color.replace(/[^a-z0-9]/gi, "")}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} ${w},${height}`}
        fill={`url(#grad-${color.replace(/[^a-z0-9]/gi, "")})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      {/* Header */}
      <MotionBox
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 4 }}
      >
        <Typography variant="h2" sx={{ mb: 0.5 }}>
          Dashboard
        </Typography>
        <Typography variant="body2">
          Welcome back, Jane. Here's what's happening today.
        </Typography>
        <Typography variant="caption" sx={{ mt: 0.5, display: "block" }}>
          Last updated just now
        </Typography>
      </MotionBox>

      {/* Stats */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {stats.map((stat, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Typography variant="label">{stat.label}</Typography>
                    <Box
                      sx={{
                        p: 0.75,
                        borderRadius: 1.5,
                        bgcolor: "primary.faint",
                        color: "primary.main",
                        display: "flex",
                      }}
                    >
                      {stat.icon}
                    </Box>
                  </Box>
                  <Typography variant="stat" sx={{ display: "block", mb: 1 }}>
                    {stat.value}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    {stat.up ? (
                      <TrendingUpIcon
                        sx={{ fontSize: 14, color: "success.main" }}
                      />
                    ) : (
                      <TrendingDownIcon
                        sx={{ fontSize: 14, color: "error.main" }}
                      />
                    )}
                    <Typography
                      variant="caption"
                      sx={{ color: stat.up ? "success.main" : "error.main" }}
                    >
                      {stat.change}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      {/* Charts row */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader
                title="Revenue Overview"
                subheader="Monthly performance across all channels"
                action={<Chip label="+12.5%" color="success" size="small" />}
              />
              <CardContent sx={{ pt: 0 }}>
                <MiniChart data={revenueData} height={120} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Box>
                    <Typography variant="caption">This month</Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "text.primary" }}
                    >
                      $12,480
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="caption">Last month</Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: "text.primary" }}
                    >
                      $11,090
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </MotionBox>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card sx={{ height: "100%" }}>
              <CardHeader
                title="User Growth"
                action={
                  <Chip
                    icon={<BoltIcon sx={{ fontSize: 14 }} />}
                    label="Trending"
                    color="success"
                    size="small"
                  />
                }
              />
              <CardContent sx={{ pt: 0 }}>
                <MiniChart
                  data={userGrowthData}
                  color="rgba(107,143,113,0.7)"
                  height={140}
                />
              </CardContent>
            </Card>
          </MotionBox>
        </Grid>
      </Grid>

      {/* Activity + Quick Actions */}
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, md: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader
                title="Recent Activity"
                action={
                  <Typography
                    variant="caption"
                    sx={{
                      color: "primary.main",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    View all
                  </Typography>
                }
              />
              <CardContent sx={{ pt: 0 }}>
                {activities.map((activity, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      py: 1.5,
                      borderBottom:
                        i < activities.length - 1 ? "1px solid" : "none",
                      borderColor: "divider",
                    }}
                  >
                    <Avatar sx={{ width: 32, height: 32, fontSize: "0.75rem" }}>
                      {activity.initials}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary" }}
                      >
                        <strong>{activity.name}</strong> {activity.action}{" "}
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "primary.main" }}
                        >
                          {activity.detail}
                        </Typography>
                      </Typography>
                    </Box>
                    <Typography variant="caption">{activity.time}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </MotionBox>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card sx={{ height: "100%" }}>
              <CardHeader title="Quick Actions" />
              <CardContent sx={{ pt: 0 }}>
                <Grid container spacing={1.5}>
                  {quickActions.map((action) => (
                    <Grid size={6} key={action}>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<AddIcon />}
                        sx={{ py: 1.5, justifyContent: "flex-start" }}
                      >
                        {action}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
}
