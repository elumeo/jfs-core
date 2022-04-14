import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Notification } from 'Types/Notification'
import useActions from 'Store/useActions';
import { useCallback } from 'react';

type Props = Pick<Notification, 'id'>

const Delete: React.FC<Props> = ({ id }) => {
  const { removeNotification } = useActions()
  const onDeleteCallback = useCallback(() => {
    removeNotification(id)
  }, [id, removeNotification])
  return (
    <IconButton color='inherit' onClick={onDeleteCallback}>
      <DeleteIcon/>
    </IconButton>
  )
}

export default React.memo(Delete)
