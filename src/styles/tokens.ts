// Shared design values taken from the Figma reference.
// Keeping these values in one place makes the UI easier to
// maintain and keeps styling consistent across components.

export const colors = {
  carbon: "#191919",
  snow: "#FFFEFA",

  // Secondary neutral used for less prominent text.
  slate: "#5F5F5A",

  // Warm surface used in the hero section.
  surfaceSecondary: "#F7F2E8",
} as const;

export const spacing = {
  xs: "8px",
  sm: "16px",
  md: "24px",
  lg: "40px",
  xl: "64px",
} as const;

export const radius = {
  small: "6px",
  medium: "12px",
  large: "24px",
} as const;