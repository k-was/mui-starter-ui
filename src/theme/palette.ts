import { alpha } from '@mui/material/styles';
import type { PaletteOptions } from '@mui/material/styles';

// ── Base color tokens (single source of truth) ──────────────────────
export const PRIMARY = '#c8a55c';
export const BG_DEFAULT = '#08080a';
export const BG_PAPER = '#111114';
export const BG_SIDEBAR = '#0c0c0e';
export const TEXT_PRIMARY = '#e8e4dc';
export const TEXT_SECONDARY = '#8a8680';
export const TEXT_DISABLED = '#555250';
export const ERROR = '#e06c75';
export const WARNING = '#e5c07b';
export const SUCCESS = '#6b8f71';
export const INFO = '#61afef';

const PURPLE = '#c678dd';
const CYAN = '#56b6c2';
const ORANGE = '#d19a66';

// ── Palette ──────────────────────────────────────────────────────────
const palette: PaletteOptions = {
  mode: 'dark',

  primary: {
    // main: PRIMARY,
    // contrastText: BG_DEFAULT,

    main: '#c8a55c',
    light: '#d4b76e',
    dark: '#a88a3e',
    contrastText: '#08080a',

    muted: alpha(PRIMARY, 0.25),
    faint: alpha(PRIMARY, 0.06),
    glow: alpha(PRIMARY, 0.15),
    border: alpha(PRIMARY, 0.12),
  },

  secondary: {
    main: '#8a8680',
    light: '#a09c96',
    dark: '#6a6660',
  },
  // secondary: { main: TEXT_SECONDARY },

  background: {
    default: BG_DEFAULT,
    paper: BG_PAPER,
  },

  text: {
    primary: TEXT_PRIMARY,
    secondary: TEXT_SECONDARY,
    disabled: TEXT_DISABLED,
  },

  //divider: alpha(PRIMARY, 0.08),
  divider: 'rgba(200, 165, 92, 0.08)',

  error: { main: ERROR },
  warning: { main: WARNING },
  success: { main: SUCCESS },
  info: { main: INFO },

  sidebar: {
    bg: BG_SIDEBAR,
    hover: alpha(PRIMARY, 0.06),
    active: alpha(PRIMARY, 0.1),
    border: alpha(PRIMARY, 0.08),
  },

  card: {
    bg: alpha(BG_PAPER, 0.6),
    border: alpha(PRIMARY, 0.08),
    hover: alpha(PRIMARY, 0.12),
  },

  chart: [PRIMARY, SUCCESS, INFO, ERROR, WARNING, PURPLE, CYAN, ORANGE],

  gold: {
    main: '#c8a55c',
    light: '#d4b76e',
    dark: '#a88a3e',
    muted: 'rgba(200, 165, 92, 0.25)',
    faint: 'rgba(200, 165, 92, 0.06)',
    glow: 'rgba(200, 165, 92, 0.15)',
    border: 'rgba(200, 165, 92, 0.12)',
  },
};

export default palette;
