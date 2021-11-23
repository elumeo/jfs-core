import React, { memo, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Theme, useTheme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

const TableRowNoResults = () => {
  const { formatMessage } = useIntl();
  const theme = useTheme<Theme>();
  const styles = useMemo<CSSProperties>(() => ({ textAlign: 'center', marginTop: theme.spacing(2) + 'px' }), []);
  return <div style={styles}>{formatMessage({ id: 'table.noResults' })}</div>;
};

export default memo(TableRowNoResults);
