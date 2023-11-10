import { pickThemeVariant } from 'Store/Selector/Core/Theme.selector';
import { useSelector } from 'react-redux';
import { themeMap } from './Definition';
import React from 'react';

export default () => {
  const themeVariant = useSelector(pickThemeVariant)
  const _theme = React.useMemo(() => themeMap[themeVariant], [themeVariant])
  return _theme;
}
