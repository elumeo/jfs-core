import React, { CSSProperties, memo } from 'react';

const styles: CSSProperties = { cursor: 'pointer' };

export type NoProductImageAvailableProps = {
  onClick?: HTMLElement['click'];
}

const NoProductImageAvailable = ({ onClick = null }: NoProductImageAvailableProps) => <div style={styles} onClick={onClick}>No Image available</div>;

export default memo(NoProductImageAvailable);

