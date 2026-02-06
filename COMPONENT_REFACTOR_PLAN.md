# MUI Component Refactor Plan

Replace hardcoded hex/rgba values with theme tokens and palette references.

## Available Tokens

### tokens.ts
```ts
// Colors
PRIMARY, BG_DEFAULT, BG_PAPER, BG_SIDEBAR
TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DISABLED
ERROR, WARNING, SUCCESS, INFO
PURPLE, CYAN, ORANGE

// Effects
BLUR_SM (8), BLUR_MD (12), BLUR_LG (16)
RADIUS_SM (8), RADIUS_MD (12), RADIUS_LG (16), RADIUS_XL (20)
```

### palette (theme access)
```ts
theme.palette.primary.main / .light / .dark / .contrastText
theme.palette.primary.muted / .faint / .glow / .border
theme.palette.text.primary / .secondary / .disabled
theme.palette.background.default / .paper
theme.palette.error / .warning / .success / .info
```

---

## Components to Update

### High Priority

| Component | Hardcoded Values | Status |
|-----------|-----------------|--------|
| **MuiCard.ts** | colors, blur, radius | ✅ Done |
| **MuiButton.ts** | 10+ colors, radius `10px`, padding, shadows | ✅ Done |
| **MuiTextField.ts** | 8+ colors, radius `10px`, shadow | ✅ Done |
| **MuiTabs.ts** | 8+ colors, radius `8-10px`, minHeight, padding | ✅ Done |
| **MuiList.ts** | 7+ colors, radius `10px`, padding | ✅ Done |
| **MuiChip.ts** | 12+ colors, radius `8px`, height `28px` | ✅ Done |
| **MuiAlert.ts** | 8 semantic colors, radius `12px`, blur `8px` | ✅ Done |

### Medium Priority

| Component | Hardcoded Values | Status |
|-----------|-----------------|--------|
| **MuiMenu.ts** | 6+ colors, radius `8-12px`, blur `12px`, shadow | ⬜ Todo |
| **MuiDialog.ts** | 3 colors, radius `16px`, blur `20px`, shadow | ⬜ Todo |
| **MuiSwitch.ts** | 3 colors, size `44x24px`, radius `12px` | ⬜ Todo |
| **MuiIconButton.ts** | 4 colors, radius `10px` | ⬜ Todo |
| **MuiCssBaseline.ts** | 6+ colors, scrollbar sizes | ⬜ Todo |
| **MuiTooltip.ts** | 3 colors, radius `8px`, blur `12px` | ⬜ Todo |

### Low Priority

| Component | Hardcoded Values | Status |
|-----------|-----------------|--------|
| **MuiAvatar.ts** | 3 colors | ⬜ Todo |
| **MuiDivider.ts** | 1 color | ⬜ Todo |
| **MuiDrawer.ts** | 2 colors | ⬜ Todo |
| **MuiPaper.ts** | 2 colors | ⬜ Todo |

---

## Detailed Breakdown

### MuiButton.ts ✅
- `#c8a55c` → `theme.palette.primary.main`
- `#a88a3e` → `theme.palette.primary.dark`
- `#d4b76e` → `theme.palette.primary.light`
- `#08080a` → `theme.palette.primary.contrastText`
- `#e8e4dc` → `theme.palette.text.primary`
- `#8a8680` → `theme.palette.text.secondary`
- `rgba(200,165,92,X)` → `alpha(theme.palette.primary.main, X)`
- `borderRadius: 10` → removed (inherits `RADIUS_MD` from `shape.ts` theme default)

### MuiTextField.ts
- `#08080a` → `theme.palette.background.default`
- `#c8a55c` → `theme.palette.primary.main`
- `#8a8680` → `theme.palette.text.secondary`
- `#e8e4dc` → `theme.palette.text.primary`
- `#555250` → `theme.palette.text.disabled`
- `rgba(200,165,92,0.08)` → `theme.palette.primary.border`
- `borderRadius: 10` → remove (inherits default)

### MuiAlert.ts
- `#6b8f71` → `theme.palette.success.main`
- `#e06c75` → `theme.palette.error.main`
- `#e5c07b` → `theme.palette.warning.main`
- `#61afef` → `theme.palette.info.main`
- `rgba(X, 0.1)` → `alpha(theme.palette.X.main, 0.1)`
- `blur(8px)` → `BLUR_SM`
- `borderRadius: 12` → `RADIUS_MD`

### MuiMenu.ts / MuiDialog.ts / MuiTooltip.ts
- `rgba(17,17,20,0.9)` → `alpha(theme.palette.background.paper, 0.9)`
- `rgba(200,165,92,0.1)` → `theme.palette.primary.border` or `alpha(...)`
- `blur(12px)` → `BLUR_MD`
- `blur(20px)` → `BLUR_LG + 4` or add `BLUR_XL`

### MuiDrawer.ts
- `#0c0c0e` → `theme.palette.sidebar.bg` (already exists)
- `rgba(200,165,92,0.08)` → `theme.palette.primary.border`

---

## Rules

### Don't repeat theme defaults
- **`borderRadius`**: `shape.ts` sets the theme default to `RADIUS_MD` (12). Do NOT redeclare `borderRadius` unless the component needs a different value. If it does differ, use a token (e.g. `RADIUS_SM`, `RADIUS_LG`) and leave a comment explaining why.
- **`typography.button`**: Already defines `fontWeight`, `fontSize`, `letterSpacing`, and `textTransform` for buttons. Do NOT redeclare these in `MuiButton` root unless overriding with a different value.
- **General rule**: If a value matches what the theme already provides, omit it. Only set it explicitly when deviating, and add a comment justifying the deviation.

### Non-default values
When a component intentionally uses a value that differs from the theme default (e.g. `RADIUS_SM` instead of `RADIUS_MD`, or a custom pixel size), that's fine to hardcode — just leave a short comment in the code explaining why it differs.

### Use callback style for theme access

```ts
import { alpha, Components, Theme } from '@mui/material/styles';
import { BLUR_MD, RADIUS_LG } from '../tokens';

const MuiExample: Components<Theme>['MuiExample'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      background: alpha(theme.palette.background.paper, 0.6),
      backdropFilter: `blur(${BLUR_MD}px)`,
      border: `1px solid ${theme.palette.primary.border}`,
      borderRadius: RADIUS_LG, // larger than default for card-like surfaces
      color: theme.palette.text.primary,
      '&:hover': {
        borderColor: alpha(theme.palette.primary.main, 0.15),
      },
    }),
  },
};
```

---

## Tokens to Add

### tokens.ts
```ts
// Transitions
export const TRANSITION_FAST = '0.15s ease';
export const TRANSITION_DEFAULT = '0.2s ease';

// Maybe add BLUR_XL = 20 for dialogs
```

### Consider for palette
- Add opacity variants to semantic colors (success, error, etc.) if needed frequently
