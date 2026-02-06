import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface PaletteColor {
    muted: string;
    faint: string;
    glow: string;
    border: string;
  }

  interface SimplePaletteColorOptions {
    muted?: string;
    faint?: string;
    glow?: string;
    border?: string;
  }

  interface Palette {
    sidebar: {
      bg: string;
      hover: string;
      active: string;
      border: string;
    };
    card: {
      bg: string;
      border: string;
      hover: string;
    };
    chart: string[];
  }

  interface PaletteOptions {
    sidebar?: {
      bg?: string;
      hover?: string;
      active?: string;
      border?: string;
    };
    card?: {
      bg?: string;
      border?: string;
      hover?: string;
    };
    chart?: string[];
  }

  interface TypographyVariants {
    stat: React.CSSProperties;
    label: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    stat?: React.CSSProperties;
    label?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    stat: true;
    label: true;
  }
}
