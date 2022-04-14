import * as React from 'react';
import { useCallback } from 'react';
import { Button } from '@material-ui/core';
import useActions from 'Store/useActions';

const RemoveNotificationButton: React.FC<{ group: string }> = ({ group }) => {
  const { removeNotificationGroup } = useActions()
  const removeGroup = useCallback(group => {
    removeNotificationGroup(group)
  }, [removeNotificationGroup])
  return <Button variant='contained' onClick={() => removeGroup(group)}>{group}</Button>
}

export default RemoveNotificationButton;
