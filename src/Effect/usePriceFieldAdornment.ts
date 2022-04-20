import React, { useMemo } from 'react';

const usePriceFieldAdornment = (currency: string): ['endAdornment' | 'startAdornment', 'start' | 'end', React.CSSProperties] => {
  const adornmentType = useMemo(() => currency.toLowerCase() === 'eur' ? 'endAdornment' : 'startAdornment', [currency]);
  const adornmentPosition = useMemo(() => currency.toLowerCase() === 'eur' ? 'end' : 'start', [currency]);
  const styles = useMemo<React.CSSProperties>(() => ({userSelect: 'none'}), []);
  return [adornmentType, adornmentPosition, styles];
};

export default usePriceFieldAdornment;
