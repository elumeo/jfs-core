import { ThemeVariant } from '../../Types/ThemeVariant.type';
export declare const SEPERATOR = "-_-_--";
export declare const themeFeature = "preferred_theme";
export declare const clippyFeature = "preferred_clippy";
export declare const saveThemeVariant: ({ userId, themeVariant }: {
    userId: string;
    themeVariant: ThemeVariant;
}) => void;
export declare const loadThemeVariant: ({ userId }: {
    userId: string;
}) => ThemeVariant;
