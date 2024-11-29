export const ThemeVariant = {
  LIGHT: 'LIGHT',
  HIGH_CONTRAST: 'HIGH_CONTRAST',
  AUTO_DETECT: "AUTO_DETECT",
  LEGACY: 'LEGACY',
  COMIC: 'COMIC',
  PIXEL: 'PIXEL'
} as const;

export type ThemeVariant = typeof ThemeVariant[keyof typeof ThemeVariant];
