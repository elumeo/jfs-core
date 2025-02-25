import React from "react";
import usePreferredThemeVariant from "./usePreferredThemeVariant";
import { themeMap } from "Component/App/Stateless/Style/Theme/Definition";
import { ThemeVariant } from "Types/ThemeVariant.type";
import { useMediaQuery } from "@mui/material";

export default () => {
  const isSystemDarkThemed = useMediaQuery("(prefers-color-scheme: dark)");
  const themeVariant = usePreferredThemeVariant();
  const _theme = React.useMemo(
    () => (themeVariant === ThemeVariant.AUTO_DETECT ? (isSystemDarkThemed ? themeMap[ThemeVariant.HIGH_CONTRAST] : themeMap[ThemeVariant.LIGHT]) : themeMap[themeVariant]),
    [themeVariant, isSystemDarkThemed]
  );
  return React.useMemo(() => ({ themeVariant, theme: _theme }), [_theme, themeVariant]);
};
