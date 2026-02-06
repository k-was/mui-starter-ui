import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);

const notifications = [
  {
    label: "Email Notifications",
    desc: "Receive email updates about your account activity.",
    defaultOn: true,
  },
  {
    label: "Push Notifications",
    desc: "Get push notifications on your devices.",
    defaultOn: true,
  },
  {
    label: "Weekly Digest",
    desc: "Receive a weekly summary of your activity.",
    defaultOn: false,
  },
  {
    label: "Marketing Emails",
    desc: "Receive news about features and product updates.",
    defaultOn: false,
  },
  {
    label: "Security Alerts",
    desc: "Get notified about security events on your account.",
    defaultOn: true,
  },
];

const themes = [
  { label: "Dark", color: "#08080a" },
  { label: "Light", color: "#f5f3ef" },
  {
    label: "System",
    gradient: "linear-gradient(135deg, #08080a 50%, #f5f3ef 50%)",
  },
];

const accents = [
  { label: "Gold", color: "#c8a55c" },
  { label: "Rose", color: "#e06c75" },
  { label: "Blue", color: "#61afef" },
  { label: "Emerald", color: "#6b8f71" },
  { label: "Purple", color: "#c678dd" },
];

export default function SettingsPage() {
  const [tab, setTab] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [selectedAccent, setSelectedAccent] = useState(0);
  const [notifState, setNotifState] = useState(
    notifications.map((n) => n.defaultOn)
  );

  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <MotionBox
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ mb: 4 }}
      >
        <Typography variant="h2" sx={{ mb: 0.5 }}>
          Settings
        </Typography>
        <Typography variant="body2">
          Customize your portal experience and manage your account.
        </Typography>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        sx={{ mb: 3 }}
      >
        <Tabs value={tab} onChange={(_e, v) => setTab(v)}>
          <Tab label="Account" />
          <Tab label="Notifications" />
          <Tab label="Appearance" />
          <Tab label="Security" />
        </Tabs>
      </MotionBox>

      {/* Account Tab */}
      {tab === 4 && (
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Personal Information
              </Typography>
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="First Name" defaultValue="Jane" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Last Name" defaultValue="Doe" />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Email Address"
                    defaultValue="jane@example.com"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Job Title"
                    defaultValue="Senior Product Designer"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Bio"
                    multiline
                    rows={4}
                    defaultValue="Product designer with 8+ years of experience crafting digital experiences for startups and enterprise companies."
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained">Save Changes</Button>
              </Box>
            </CardContent>
          </Card>
        </MotionBox>
      )}

      {/* Account Tab */}
      {tab === 0 && (
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Personal Information
              </Typography>
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="First Name" defaultValue="Jane" />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField label="Last Name" defaultValue="Doe" />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Email Address"
                    defaultValue="jane@example.com"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Job Title"
                    defaultValue="Senior Product Designer"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    label="Bio"
                    multiline
                    rows={4}
                    defaultValue="Product designer with 8+ years of experience crafting digital experiences for startups and enterprise companies."
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained">Save Changes</Button>
              </Box>
            </CardContent>
          </Card>
        </MotionBox>
      )}

      {/* Notifications Tab */}
      {tab === 1 && (
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Notification Preferences
              </Typography>
              {notifications.map((notif, i) => (
                <Box key={notif.label}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      py: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.primary", fontWeight: 500 }}
                      >
                        {notif.label}
                      </Typography>
                      <Typography variant="body2">{notif.desc}</Typography>
                    </Box>
                    <Switch
                      checked={notifState[i]}
                      onChange={() => {
                        const next = [...notifState];
                        next[i] = !next[i];
                        setNotifState(next);
                      }}
                    />
                  </Box>
                  {i < notifications.length - 1 && <Divider />}
                </Box>
              ))}
            </CardContent>
          </Card>
        </MotionBox>
      )}

      {/* Appearance Tab */}
      {tab === 2 && (
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Theme
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
                {themes.map((t, i) => (
                  <Box
                    key={t.label}
                    onClick={() => setSelectedTheme(i)}
                    sx={{
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 56,
                        borderRadius: 2,
                        background: t.gradient || t.color,
                        border: "2px solid",
                        borderColor:
                          selectedTheme === i
                            ? "primary.main"
                            : "rgba(200,165,92,0.08)",
                        mb: 1,
                        transition: "border-color 0.2s",
                        boxShadow:
                          selectedTheme === i
                            ? "0 0 12px rgba(200,165,92,0.2)"
                            : "none",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color:
                          selectedTheme === i
                            ? "primary.main"
                            : "text.secondary",
                      }}
                    >
                      {t.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="h5" sx={{ mb: 3 }}>
                Accent Color
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {accents.map((a, i) => (
                  <Box
                    key={a.label}
                    onClick={() => setSelectedAccent(i)}
                    sx={{ cursor: "pointer", textAlign: "center" }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        bgcolor: a.color,
                        border: "3px solid",
                        borderColor:
                          selectedAccent === i ? "white" : "transparent",
                        outline:
                          selectedAccent === i
                            ? `2px solid ${a.color}`
                            : "none",
                        outlineOffset: 2,
                        mb: 1,
                        transition: "all 0.2s",
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color:
                          selectedAccent === i
                            ? "text.primary"
                            : "text.secondary",
                      }}
                    >
                      {a.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </MotionBox>
      )}

      {/* Security Tab */}
      {tab === 3 && (
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Change Password
              </Typography>
              <Grid container spacing={2.5} sx={{ mb: 4 }}>
                <Grid size={12}>
                  <TextField label="Current Password" type="password" />
                </Grid>
                <Grid size={12}>
                  <TextField label="New Password" type="password" />
                </Grid>
                <Grid size={12}>
                  <TextField label="Confirm Password" type="password" />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" sx={{ mb: 3 }}>
                Security Features
              </Typography>
              {[
                {
                  label: "Two-Factor Authentication",
                  desc: "Add an extra layer of security to your account.",
                  defaultOn: false,
                },
                {
                  label: "Session Timeout",
                  desc: "Automatically log out after period of inactivity.",
                  defaultOn: true,
                },
              ].map((item, i) => (
                <Box key={item.label}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      py: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.primary", fontWeight: 500 }}
                      >
                        {item.label}
                      </Typography>
                      <Typography variant="body2">{item.desc}</Typography>
                    </Box>
                    <Switch defaultChecked={item.defaultOn} />
                  </Box>
                  {i === 0 && <Divider />}
                </Box>
              ))}

              <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
                <Button variant="contained">Update Security</Button>
              </Box>
            </CardContent>
          </Card>
        </MotionBox>
      )}
    </Box>
  );
}
