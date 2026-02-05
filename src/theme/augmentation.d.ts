import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface Palette {
    gold: {
      main: string;
      light: string;
      dark: string;
      muted: string;
      faint: string;
      glow: string;
      border: string;
    };
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
    gold?: {
      main?: string;
      light?: string;
      dark?: string;
      muted?: string;
      faint?: string;
      glow?: string;
      border?: string;
    };
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

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    stat: true;
    label: true;
  }
}
