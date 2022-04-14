import React, { memo, useCallback, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel
} from '@material-ui/core';
import AppNavigation from 'Component/AppNavigation';
import AddToastButton from 'Component/AddToastButton';
import AddNotificationButton from 'Component/AddNotificationButton';
import RemoveNotificationGroupSelect from './RemoveNotificationGroupSelect';
import ChangeNotificationPosition from 'Component/ChangeNotificationPosition';
import ChangeNotificationMax from 'Component/ChangeNotificationMax';

const Notifications = () => {
  const [persist, setPersist] = useState(false)
  const [groupName, setGroupName] = useState('default')
  const onPersistChange = useCallback((event, value) => {
    setPersist(value)
  }, [setPersist])
  const onGroupNameChange = useCallback(event => {
    setGroupName(event.target.value)
  }, [setGroupName])
  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Card>
            <CardHeader title='Notifications'/>
            <CardContent>
              <Grid container spacing={1} alignItems='flex-end'>
                <Grid item xs={2}>
                  <ChangeNotificationPosition/>
                </Grid>
                <Grid item xs={2}>
                  <ChangeNotificationMax/>
                </Grid>
                <Grid item xs={2}>
                  <FormControl>
                    <InputLabel>Group name</InputLabel>
                    <Input value={groupName} inputMode='text' onChange={onGroupNameChange}/>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <FormControlLabel control={<Checkbox onChange={onPersistChange}/>} label={'persist'}/>
                </Grid>
                <Grid item xs={4}/>
                <Grid item>
                  <AddNotificationButton variant='error' persist={persist} group={groupName}/>
                </Grid>
                <Grid item>
                  <AddNotificationButton variant='warning' persist={persist} group={groupName}/>
                </Grid>
                <Grid item>
                  <AddNotificationButton variant='success' persist={persist} group={groupName}/>
                </Grid>
                <Grid item>
                  <AddNotificationButton variant='info' persist={persist} group={groupName}/>
                </Grid>
                <Grid item>
                  <AddNotificationButton variant='default' persist={persist} group={groupName}/>
                </Grid>
                <Grid item xs={2}>
                  <RemoveNotificationGroupSelect/>
                </Grid>
                <Grid item xs={12}>
                  <AddToastButton/>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};
export default memo(Notifications);
