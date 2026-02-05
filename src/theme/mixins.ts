export const glassMorphism = {
  background: "rgba(17, 17, 20, 0.6)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(200, 165, 92, 0.08)",
} as const;

export const goldGlow = {
  boxShadow: "0 0 20px rgba(200, 165, 92, 0.08), 0 0 40px rgba(200, 165, 92, 0.04)",
} as const;

export const goldGlowHover = {
  boxShadow: "0 0 30px rgba(200, 165, 92, 0.12), 0 0 60px rgba(200, 165, 92, 0.06)",
  borderColor: "rgba(200, 165, 92, 0.15)",
} as const;

export const ambientBg = {
  position: "relative" as const,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(ellipse at 20% 50%, rgba(200,165,92,0.04) 0%, transparent 50%), " +
      "radial-gradient(ellipse at 80% 20%, rgba(200,165,92,0.03) 0%, transparent 50%)",
    pointerEvents: "none",
  },
};

export const grainOverlay = {
  "&::after": {
    content: '""',
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.015,
    pointerEvents: "none" as const,
    zIndex: 9999,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  },
};
