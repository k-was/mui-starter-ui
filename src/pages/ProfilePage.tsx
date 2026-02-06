import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarTodayOutlined";
import BusinessIcon from "@mui/icons-material/BusinessOutlined";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "Figma",
  "GraphQL",
  "Docker",
];

const projects = [
  {
    name: "Design System v3",
    role: "Lead Designer",
    status: "Active",
    statusColor: "success" as const,
  },
  {
    name: "API Platform",
    role: "Architect",
    status: "In Review",
    statusColor: "warning" as const,
  },
  {
    name: "Mobile App",
    role: "Contributor",
    status: "Planning",
    statusColor: "info" as const,
  },
];

const contactItems = [
  { icon: <EmailIcon sx={{ fontSize: 16 }} />, label: "jane@example.com" },
  {
    icon: <LocationOnIcon sx={{ fontSize: 16 }} />,
    label: "San Francisco, CA",
  },
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 16 }} />,
    label: "Joined March 2023",
  },
  { icon: <BusinessIcon sx={{ fontSize: 16 }} />, label: "Acme Corp" },
];

export default function ProfilePage() {
  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <MotionBox
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 4 }}
      >
        <Typography variant="h2" sx={{ mb: 0.5 }}>
          Profile
        </Typography>
        <Typography variant="body2">
          Manage your personal information and preferences.
        </Typography>
      </MotionBox>

      <Grid container spacing={3}>
        {/* Left column - Profile card */}
        <Grid size={{ xs: 12, md: 4 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent sx={{ p: 3, textAlign: "center" }}>
                <Box
                  sx={{ position: "relative", display: "inline-block", mb: 2 }}
                >
                  <Avatar sx={{ width: 80, height: 80, fontSize: "1.5rem" }}>
                    JD
                  </Avatar>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 4,
                      right: 4,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      bgcolor: "success.main",
                      border: "2px solid #111114",
                    }}
                  />
                </Box>
                <Typography variant="h4" sx={{ mb: 0.5 }}>
                  Jane Doe
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Senior Product Designer
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mb: 3,
                  }}
                >
                  <IconButton size="small">
                    <GitHubIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton size="small">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </IconButton>
                  <IconButton size="small">
                    <LinkIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ textAlign: "left" }}>
                  {contactItems.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        py: 1,
                      }}
                    >
                      <Box sx={{ color: "text.secondary" }}>{item.icon}</Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.primary" }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </MotionBox>
        </Grid>

        {/* Right column */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* About */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ mb: 3 }}
          >
            <Card>
              <CardHeader
                title="About"
                action={
                  <IconButton size="small">
                    <EditIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                }
              />
              <CardContent sx={{ pt: 0 }}>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", lineHeight: 1.8 }}
                >
                  Product designer with 8+ years of experience crafting digital
                  experiences for startups and enterprise companies. Passionate
                  about design systems, accessibility, and the intersection of
                  design and engineering. Currently leading the design vision at
                  Acme Corp, focusing on developer tools and internal platforms.
                </Typography>
              </CardContent>
            </Card>
          </MotionBox>

          {/* Skills */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{ mb: 3 }}
          >
            <Card>
              <CardHeader title="Skills & Technologies" />
              <CardContent sx={{ pt: 0 }}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip key={skill} label={skill} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </MotionBox>

          {/* Projects */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader title="Active Projects" />
              <CardContent sx={{ pt: 0 }}>
                {projects.map((project, i) => (
                  <Box
                    key={project.name}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      py: 2,
                      borderBottom:
                        i < projects.length - 1 ? "1px solid" : "none",
                      borderColor: "divider",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.primary", fontWeight: 600 }}
                      >
                        {project.name}
                      </Typography>
                      <Typography variant="caption">{project.role}</Typography>
                    </Box>
                    <Chip
                      label={project.status}
                      color={project.statusColor}
                      size="small"
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </MotionBox>
        </Grid>
      </Grid>
    </Box>
  );
}
