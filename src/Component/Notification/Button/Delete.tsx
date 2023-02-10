import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Notification } from 'Types/Notification'

import { useDispatch } from 'react-redux';
import { removeNotification } from 'Store/Action';

type Props = Pick<Notification, 'id'>

const Delete: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch()
  const onDeleteCallback = React.useCallback(() => {
    dispatch(removeNotification(id))
  }, [id])
  return (
    <IconButton color='inherit' onClick={onDeleteCallback}>
      <DeleteIcon />
    </IconButton>
  )
}
export default Delete
