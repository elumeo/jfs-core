import { themeMap } from './Definition';
import React from 'react';
import usePreferredThemeVariant from './usePreferredThemeVariant';

export default () => {
  const themeVariant = usePreferredThemeVariant()
  const _theme = React.useMemo(() => themeMap[themeVariant], [themeVariant])
  return React.useMemo(() => ({ themeVariant, theme: _theme }), [_theme, themeVariant]);
}
