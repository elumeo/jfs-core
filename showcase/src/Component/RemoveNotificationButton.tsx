import * as React from 'react';
import { Button } from '@material-ui/core';
import useActions from 'Core/Store/useActions';

const RemoveNotificationButton: React.FC<{ group: string }> = ({ group }) => {
  const { removeNotificationGroup } = useActions()
  return <Button variant='contained' onClick={() => {
    removeNotificationGroup(group)
  }}>{group}</Button>
}

export default RemoveNotificationButton;