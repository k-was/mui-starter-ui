import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "motion/react";

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

const floatingOrbs = [
  { size: 300, x: "15%", y: "20%", delay: 0, duration: 20 },
  { size: 200, x: "75%", y: "60%", delay: 5, duration: 25 },
  { size: 250, x: "60%", y: "15%", delay: 10, duration: 22 },
  { size: 180, x: "25%", y: "75%", delay: 3, duration: 18 },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <MotionBox
          key={i}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
          sx={{
            position: "absolute",
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,165,92,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />
      ))}

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 420,
          px: 3,
        }}
      >
        {/* Logo */}
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 5 }}
        >
          <Box
            sx={{
              display: "inline-flex",
              p: 1.5,
              borderRadius: 2,
              bgcolor: "primary.faint",
              border: "1px solid",
              borderColor: "primary.border",
              mb: 2,
            }}
          >
            <AutoAwesomeIcon sx={{ color: "primary.main", fontSize: 28 }} />
          </Box>
          <Typography variant="h2" sx={{ color: "text.primary", mb: 1 }}>
            Portal
          </Typography>
          <Typography variant="body2">
            Welcome back. Sign in to continue.
          </Typography>
        </MotionBox>

        {/* Login Card */}
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Email"
                placeholder="you@example.com"
                sx={{ mb: 2.5 }}
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                sx={{ mb: 1 }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                          size="small"
                          sx={{ border: "none" }}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon sx={{ fontSize: 18 }} />
                          ) : (
                            <VisibilityIcon sx={{ fontSize: 18 }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <Box sx={{ textAlign: "right", mb: 3 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Forgot password?
                </Typography>
              </Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<ArrowForwardIcon />}
                sx={{ py: 1.4, mb: 3 }}
              >
                Sign In
              </Button>

              <Divider sx={{ mb: 3 }}>
                <Typography variant="caption">or continue with</Typography>
              </Divider>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
                  Google
                </Button>
                <Button variant="outlined" fullWidth startIcon={<GitHubIcon />}>
                  GitHub
                </Button>
              </Box>
            </Box>
          </CardContent>
        </MotionCard>

        {/* Sign up link */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          sx={{ textAlign: "center", mt: 3 }}
        >
          <Typography variant="body2">
            Don't have an account?{" "}
            <Typography
              component="span"
              variant="body2"
              sx={{
                color: "primary.main",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Create one
            </Typography>
          </Typography>
        </MotionBox>
      </Box>
    </Box>
  );
}
