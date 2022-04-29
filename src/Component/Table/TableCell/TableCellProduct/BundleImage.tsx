import React, { CSSProperties, memo, useMemo } from 'react';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

export type BundleImageProps = {
  onClick?: HTMLElement['click'];
}

const BundleImage = ({onClick = null}: BundleImageProps) => {
  const bundleBoxStyles: CSSProperties = useMemo(() => ({
    width: definition.spacing(10),
    height: definition.spacing(10),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: definition.palette.grey['100'],
    userSelect: 'none',
    cursor: 'pointer',
  }), []);
  return <div style={bundleBoxStyles} onClick={onClick}>Product Bundle</div>;
}

export default memo(BundleImage);
