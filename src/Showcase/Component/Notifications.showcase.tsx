import React, { useState } from 'react';
import {
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  Grid,
  Input,
  InputLabel,
  InputProps,
  Typography
} from '@mui/material';
import AppNavigation from './AppNavigation.showcase';
import AddToastButton from './AddToastButton.showcase';
import AddNotificationButton from './AddNotificationButton.showcase';
import RemoveNotificationButton from './RemoveNotificationButton.showcase';
import ChangeNotificationPosition from './ChangeNotificationPosition.showcase';
import ChangeNotificationMax from './ChangeNotificationMax.showcase';
import useSelector from '../../Store/useSelector';
import { VariantType } from 'notistack';
import Layout from '../../Component/App/Layout';
import Header from '../../Component/Card/Header';
import Content from '../../Component/Card/Content';

const Notifications = () => {
  const [persist, setPersist] = useState(false)
  const [groupName, setGroupName] = useState('default')
  const groups = useSelector(state => Array.from(new Set(state?.Core?.Notification?.history?.map?.(n => n.group))))
  const onPersistChange: FormControlLabelProps['onChange'] = React.useCallback((event, value) => {
    setPersist(value)
  }, [setPersist])
  const onGroupNameChange: InputProps['onChange'] = React.useCallback(event => {
    setGroupName(event.target.value)
  }, [setGroupName])
  return (
    <Layout navigation={<AppNavigation />} >
      <Card>
        <Header title='Notifications' />
        <Content>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item xs={12}><Typography variant='h6'><br />Configure</Typography></Grid>
            <Grid item xs={2}>
              <ChangeNotificationPosition />
            </Grid>
            <Grid item xs={2}>
              <ChangeNotificationMax />
            </Grid>
            <Grid item xs={2}>
              <FormControl>
                <InputLabel>Group name</InputLabel>
                <Input value={groupName} inputMode='text' onChange={onGroupNameChange} />
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel control={<Checkbox onChange={onPersistChange} />} label={'persist'} />
            </Grid>
            <Grid item xs={4} />

            <Grid item xs={12}><Typography variant='h6'><br />Add</Typography></Grid>
            {(['error', 'warning', 'success', 'info', 'default'] as VariantType[]).map((variant: VariantType) =>
              <Grid item>
                <AddNotificationButton variant={variant} persist={persist} group={groupName} />
              </Grid>
            )}

            {groups.length &&
              <Grid item xs={12}><Typography variant='h6'><br />Remove by group</Typography></Grid> || null}
            {groups.map((group, i) =>
              <Grid item key={i}>
                <RemoveNotificationButton group={group} />
              </Grid>
            )}

            <Grid item xs={12}><br /></Grid>
            <Grid item xs={12}>
              <AddToastButton />
            </Grid>
          </Grid>
        </Content>
      </Card>
    </Layout>
  );
};
export default Notifications
