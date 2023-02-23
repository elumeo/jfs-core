import * as React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeNotificationGroup } from '../../Store/Action';

const RemoveNotificationButton: React.FC<{ group: string }> = ({ group }) => {
  const dispatch = useDispatch()
  return <Button variant='contained' onClick={() => {
    dispatch(removeNotificationGroup(group))
  }}>{group}</Button>
}

export default RemoveNotificationButton;
