

export const ThemeVariant = {
  LIGHT: 'LIGHT',
  LEGACY: 'LEGACY',
  FRUSTRATION: 'FRUSTRATION',
  HIGH_CONTRAST: 'HIGH_CONTRAST',
  HIGH_CONTRAST_INVERTED: 'HIGH_CONTRAST_INVERTED',
  COMIC: 'COMIC',
} as const;

export type ThemeVariant = typeof ThemeVariant[keyof typeof ThemeVariant];
