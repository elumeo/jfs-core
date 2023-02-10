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
  InputLabel,
  Typography
} from '@mui/material';
import AppNavigation from 'Component/AppNavigation';
import AddToastButton from 'Component/AddToastButton';
import AddNotificationButton from 'Component/AddNotificationButton';
import RemoveNotificationButton from './RemoveNotificationButton';
import ChangeNotificationPosition from 'Component/ChangeNotificationPosition';
import ChangeNotificationMax from 'Component/ChangeNotificationMax';
import useSelector from 'Store/useSelector';
import { VariantType } from 'notistack';

const Notifications = () => {
  const [persist, setPersist] = useState(false)
  const [groupName, setGroupName] = useState('default')
  const groups = useSelector(state => Array.from(new Set(state.Core.Notification.history.map(n => n.group))))
  const onPersistChange = React.useCallback((event, value) => {
    setPersist(value)
  }, [setPersist])
  const onGroupNameChange = React.useCallback(event => {
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

                <Grid item xs={12}><Typography variant='h6'><br/>Configure</Typography></Grid>
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

                <Grid item xs={12}><Typography variant='h6'><br/>Add</Typography></Grid>
                {['error', 'warning', 'success', 'info', 'default'].map((variant: VariantType) =>
                  <Grid item>
                    <AddNotificationButton variant={variant} persist={persist} group={groupName}/>
                  </Grid>
                )}

                {groups.length &&
                  <Grid item xs={12}><Typography variant='h6'><br/>Remove by group</Typography></Grid> || null}
                {groups.map(group =>
                  <Grid item>
                    <RemoveNotificationButton group={group}/>
                  </Grid>
                )}

                <Grid item xs={12}><br/></Grid>
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
