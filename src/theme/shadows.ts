import { Shadows } from "@mui/material/styles";
import { PRIMARY } from "./tokens";

const toRgb = (hex: string) =>
  [hex.slice(1, 3), hex.slice(3, 5), hex.slice(5, 7)]
    .map((h) => parseInt(h, 16))
    .join(", ");

const rgb = toRgb(PRIMARY);

const shadows: Shadows = [
  "none",
  `0 1px 2px rgba(${rgb}, 0.04)`,
  `0 2px 4px rgba(${rgb}, 0.04)`,
  `0 3px 6px rgba(${rgb}, 0.04)`,
  `0 4px 8px rgba(${rgb}, 0.05)`,
  `0 5px 10px rgba(${rgb}, 0.05)`,
  `0 6px 12px rgba(${rgb}, 0.05)`,
  `0 7px 14px rgba(${rgb}, 0.06)`,
  `0 8px 16px rgba(${rgb}, 0.06)`,
  `0 9px 18px rgba(${rgb}, 0.06)`,
  `0 10px 20px rgba(${rgb}, 0.07)`,
  `0 11px 22px rgba(${rgb}, 0.07)`,
  `0 12px 24px rgba(${rgb}, 0.07)`,
  `0 13px 26px rgba(${rgb}, 0.08)`,
  `0 14px 28px rgba(${rgb}, 0.08)`,
  `0 15px 30px rgba(${rgb}, 0.08)`,
  `0 16px 32px rgba(${rgb}, 0.09)`,
  `0 17px 34px rgba(${rgb}, 0.09)`,
  `0 18px 36px rgba(${rgb}, 0.09)`,
  `0 19px 38px rgba(${rgb}, 0.10)`,
  `0 20px 40px rgba(${rgb}, 0.10)`,
  `0 21px 42px rgba(${rgb}, 0.10)`,
  `0 22px 44px rgba(${rgb}, 0.11)`,
  `0 23px 46px rgba(${rgb}, 0.11)`,
  `0 24px 48px rgba(${rgb}, 0.12)`,
];

export default shadows;
