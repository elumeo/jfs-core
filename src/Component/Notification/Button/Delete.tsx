import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Notification } from 'Types/Notification'
import { useCallback } from 'react';
import { removeNotification } from 'Store/Action';
import { useDispatch } from 'react-redux';

type Props = Pick<Notification, 'id'>

const Delete: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch()
  const onDeleteCallback = useCallback(() => {
    dispatch(removeNotification(id))
  }, [id, dispatch])
  return (
    <IconButton color='inherit' onClick={onDeleteCallback}>
      <DeleteIcon />
    </IconButton>
  )
}

export default React.memo(Delete)
