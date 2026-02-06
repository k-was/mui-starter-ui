import { alpha } from "@mui/material/styles";
import type { PaletteOptions } from "@mui/material/styles";
import {
  PRIMARY,
  PRIMARY_LIGHT,
  PRIMARY_DARK,
  BG_DEFAULT,
  TEXT_SECONDARY,
  BG_PAPER,
  TEXT_PRIMARY,
  TEXT_DISABLED,
  ERROR,
  WARNING,
  SUCCESS,
  INFO,
  BG_SIDEBAR,
  PURPLE,
  CYAN,
  ORANGE,
} from "./tokens";

const palette: PaletteOptions = {
  mode: "dark",

  primary: {
    main: PRIMARY,
    light: PRIMARY_LIGHT,
    dark: PRIMARY_DARK,
    contrastText: BG_DEFAULT,
    muted: alpha(PRIMARY, 0.25),
    faint: alpha(PRIMARY, 0.06),
    glow: alpha(PRIMARY, 0.15),
    border: alpha(PRIMARY, 0.12),
  },

  secondary: {
    main: TEXT_SECONDARY,
    light: "#a09c96",
    dark: "#6a6660",
  },

  background: {
    default: BG_DEFAULT,
    paper: BG_PAPER,
  },

  text: {
    primary: TEXT_PRIMARY,
    secondary: TEXT_SECONDARY,
    disabled: TEXT_DISABLED,
  },

  divider: alpha(PRIMARY, 0.08),

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
};

export default palette;
