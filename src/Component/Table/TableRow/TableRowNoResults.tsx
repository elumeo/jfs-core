import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const cellStyles = makeStyles(theme => createStyles({
  NoRowsContent: {
    textAlign: 'center',
    padding: theme.spacing(2)
  }
}));

const TableRowNoResults = () => {
  const {formatMessage} = useIntl();
  const css = cellStyles();
  return <div className={css.NoRowsContent}>{formatMessage({id: 'table.noResults'})}</div>;
}

export default memo(TableRowNoResults);
