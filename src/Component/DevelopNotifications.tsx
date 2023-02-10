/* eslint-disable max-lines */
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonProps, Checkbox, FormControlLabel, Grid, IconButton, NativeSelect } from '@mui/material';
import * as Action from 'Store/Action';
import { NativeSelectProps } from '@mui/material/NativeSelect/NativeSelect';
import { Notification } from 'Types/Notification';
import { VariantType } from 'notistack';
import Box from '@mui/material/Box';
import { Block, Refresh, Visibility } from '@mui/icons-material';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

const generateNotification = (persist = false): Notification => {
  const rand = Math.round(Math.random() * 100000);
  const variant: VariantType =
    rand % 7 == 0 && 'error'
    || rand % 5 == 0 && 'warning'
    || rand % 3 == 0 && 'success'
    || rand % 2 == 0 && 'info'
    || 'default';
  const id = String(rand);
  const group = variant.match(/(error|warning)/) ? 'important' : 'unimportant';
  const defaultProps: Notification = {
    id,
    group,
    variant,
    notistackOptions: { persist: persist }
  };
  switch (variant) {
    case 'error':
      return {
        ...defaultProps,
        title: 'ServerError',
        subtitle: 'Join Room (action.payload.name)',
        content: (
          <Box display='flex' flexDirection='column'>
            <span>Habitant habitasse, sem etiamnostra etiam. Tristique viverra volutpat mi, ornare non tellus, praesent odio justo platea erat quis. Aliquam est varius, fringilla class, in ad dictumst turpis vivamus eros augue. Nunc fames donec, vehicula phasellus, volutpat sem luctus leo ut. Consequat nulla enim, curae hac, lorem purus cursus feugiat habitant fusce. Ante metus curabitur, litora nec, donec diam bibendum euismod elit placerat neque. Pretium sit, morbi odio iaculis.</span>
            <Box display='flex' flexDirection='row'>
              <Button color='inherit' startIcon={<Refresh />}>Try again</Button>
              <Button color='inherit' startIcon={<Block />}>Ignore</Button>
            </Box>
          </Box>
        ),
        action: () => <IconButton color='inherit'><Visibility /></IconButton>
      };
    case 'warning':
      return {
        ...defaultProps,
        title: 'Warning',
        subtitle: 'Some changes aren\'t saved yet',
        content: 'The quick brown fox jumps over the lazy dog',
        action: () => <IconButton><Visibility /></IconButton>
      };
    case 'success':
      return { ...defaultProps, title: 'Changes saved' };
    case 'info':
      return {
        ...defaultProps,
        content: 'Time for a cup of coffee!',
        action: () => <Button color='inherit'>Get</Button>
      };
    case 'default':
    default:
      return { ...defaultProps, variant: 'default', content: 'content loaded' };
  }
};

const DevelopNotifications: React.FC = () => {
  const dispatch = useDispatch()
  const persistNotificationsInputRef = useRef(null);
  const handleOnClickNotification: ButtonProps['onClick'] = React.useCallback(() => {
    const persist = persistNotificationsInputRef?.current?.checked;
    dispatch(Action.addNotification(generateNotification(persist)));
  }, []);
  const handleOnClickErrorNotification: ButtonProps['onClick'] = React.useCallback(() => {
    dispatch(Action.addErrorNotification(
      {
        config: {
          method: 'GET',
          url: '"http://de.master.api.staging-jsc-app.juwelo.local/orderitems?filter=customerId:foobar%3Bstatus:booked,cancelled%3BisInOpenBasket:false%3BexcludeStaffProducts:true&options=sortBy:sortByLikeReturnSlip%3BincludeOrderOffsetCreditBalance:true"'
        },
        toJSON: () => ({}),
        isAxiosError: true,
        name: 'An AxiosError',
        message: 'Error Message',
        request: {},
        response: {
          config: {},
          headers: {},
          status: 23,
          statusText: '23',
          data: {
            "error": "Jfs\\TestCase\\Exception\\VeryLongNamesProvokesLineBreaksOrOverflowsException",
            "id": 0,
            "message": "Error while injecting in AuthorizationService\\Services\\UserPasswordService::userPasswordDAO. SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo failed: nodename nor servname provided, or not known",
            "trace": [
              "#0 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Client/AbstractClient.php(169): Jsc\\Service\\Client\\AbstractClient->processHttpResponse(Object(Jsc\\Http\\Response))",
              "#1 /Users/user/Projects/Juwelo/git/jsc/core/Shared/Clients/AuthorizationService/UserPasswordClient.php(57): Jsc\\Service\\Client\\AbstractClient->sendRequest(Object(Jsc\\Service\\Request\\Post), NULL)",
              "#2 /Users/user/Projects/Juwelo/git/jsc/api/ServiceProxy/Services/Authorization/LoginService.php(172): Clients\\AuthorizationService\\UserPasswordClient->checkPassword('robert.neuner', Object(DTO\\Login\\CredentialsDTO))",
              "#3 /Users/user/Projects/Juwelo/git/jsc/api/ServiceProxy/Services/Authorization/LoginService.php(87): ServiceProxy\\Services\\Authorization\\LoginService->checkPassword('robert.neuner', 'JuwJawJowJooo')",
              "#4 /Users/user/Projects/Juwelo/git/jsc/api/ServiceProxy/Controllers/LoginController.php(98): ServiceProxy\\Services\\Authorization\\LoginService->loginFrontend('robert.neuner', 'Robert Neuner', 'JuwJawJowJooo', 'jfs_CustomerImp...')",
              "#5 [internal function]: ServiceProxy\\Controllers\\LoginController->loginFrontend('jfs_CustomerImp...', Object(DTO\\Login\\CredentialsDTO))",
              "#6 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Controller/AbstractController.php(78): call_user_func_array(Array, Array)",
              "#7 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Dispatcher.php(87): Jsc\\Service\\Controller\\AbstractController->execute('loginFrontend', Array)",
              "#8 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Bootstrap.php(252): Jsc\\Service\\Dispatcher->run()",
              "#9 /Users/user/Projects/Juwelo/git/jsc/core/Libraries/Jsc/Service/Bootstrap.php(118): Jsc\\Service\\Bootstrap::runApplication('api', Object(Jsc\\Http\\Request), Object(Jsc\\Http\\Response), Object(Jsc\\Routing\\Router), 1651061331.2091)",
              "#10 /Users/user/Projects/Juwelo/git/jsc/www-root/api.php(59): Jsc\\Service\\Bootstrap::boot('/Users/user/Pro...', 'api', 1651061331.2091)",
              "#11 {main}"
            ]
          }
        }
      }
    ));
  }, []);
  const handleRemoveNotificationsByGroup = React.useCallback<NativeSelectProps['onChange']>(event => {
    dispatch(Action.removeNotificationGroup(event.target.value));
  }, []);
  const handleOnClickToastSuccess: ButtonProps['onClick'] = React.useCallback(() => dispatch(Action.addToastAction({
    contentMessage: 'Toast Test',
    dismissLabel: 'Dismiss',
    isSuccess: true
  })), [dispatch]);
  const handleOnClickToastFail: ButtonProps['onClick'] = React.useCallback(() => dispatch(Action.addToastAction({
    dismissLabel: 'Dismiss',
    contentError: new Error('some error message'),
    isError: true
  })), [dispatch]);
  return (
    <Card >
      <CardContent>
        <Grid container spacing={1} alignItems={'center'}>
          <Grid item>
            <FormControlLabel control={
              <Checkbox inputRef={persistNotificationsInputRef} />
            } label={'persist'} />
            <Button onClick={handleOnClickNotification}>Add Notification</Button>
            <Button onClick={handleOnClickErrorNotification}>Add Error Notification</Button>
            <NativeSelect value={0} onChange={handleRemoveNotificationsByGroup}>
              <option value={0} disabled>Remove Notifications by group</option>
              <option value='important'>All Important</option>
              <option value='unimportant'>All Unimportant</option>
            </NativeSelect>
          </Grid>
          <Grid item>
            <Button onClick={handleOnClickToastSuccess}>Toast success</Button>
            <Button onClick={handleOnClickToastFail}>Toast fail</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
export default DevelopNotifications
