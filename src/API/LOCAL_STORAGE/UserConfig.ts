import { ThemeVariant } from 'Types/ThemeVariant.type';
import * as Session from './Session';

export const SEPERATOR = '-_-_--';
export const themeFeature = 'preferred_theme';
export const clippyFeature = 'preferred_clippy';
export const saveThemeVariant = ({ userId, themeVariant }: { userId: string, themeVariant: ThemeVariant }): void => {
  Session.setItem([userId, themeFeature].join(SEPERATOR), themeVariant);
}

export const loadThemeVariant = ({ userId }: { userId: string }): ThemeVariant => {
  return (Session.getItem([userId, themeFeature].join(SEPERATOR)) || ThemeVariant.LIGHT) as ThemeVariant;
}
