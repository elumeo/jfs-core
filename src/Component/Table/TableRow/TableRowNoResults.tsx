import React, { memo, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { CSSProperties } from '@mui/styles/withStyles';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

const TableRowNoResults = () => {
  const { formatMessage } = useIntl();
  const styles = useMemo<CSSProperties>(() => ({ textAlign: 'center', marginTop: definition.spacing(2) + 'px' }), []);
  return <div style={styles}>{formatMessage({ id: 'table.noResults' })}</div>;
};

export default memo(TableRowNoResults);
