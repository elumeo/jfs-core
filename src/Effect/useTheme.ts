import React from 'react';
import usePreferredThemeVariant from './usePreferredThemeVariant';
import { themeMap } from 'Component/App/Stateless/Style/Theme/Definition';

export default () => {
  const themeVariant = usePreferredThemeVariant()
  const _theme = React.useMemo(() => themeMap[themeVariant], [themeVariant])
  return React.useMemo(() => ({ themeVariant, theme: _theme }), [_theme, themeVariant]);
}
