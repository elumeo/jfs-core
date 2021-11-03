/* eslint-disable max-lines */
import React, { memo } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Link,
  Popover,
  Tooltip,
  Typography
} from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import AppNavigation from 'Component/AppNavigation';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import LoremIpsumText from 'Component/LoremIpsumText';
import CodeBox from 'Component/CodeBox';
import { ButtonProgress } from '@elumeo/jfs-core/build/Component/Button';
import TextFieldClearButton from '@elumeo/jfs-core/build/Component/TextFieldClearButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    },
    fabProgress: {
      color: theme.palette.success.main,
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1
    },
    buttonProgress: {
      color: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    },
    popoverTypography: { padding: theme.spacing(2) }
  })
);

const Dialogs = () => {
  const styles = useStyles();
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState('');
  const [asyncOpen, setAsyncOpen] = React.useState(false);
  const [asyncLoading, setAsyncLoading] = React.useState(false);
  const asyncTimer = React.useRef<number>();
  const [popoverEl, setPopoverEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClickOpenBasic = () => setBasicOpen(true);
  const handleCloseBasic = () => setBasicOpen(false);

  const handleClickOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  const handleClickOpenAsync = () => setAsyncOpen(true);
  const handleCloseAsync = () => setAsyncOpen(false);

  React.useEffect(() => {
    return () => {
      clearTimeout(asyncTimer.current);
    };
  }, []);

  const handleButtonAsyncClick = () => {
    if (!asyncLoading) {
      setAsyncLoading(true);
      asyncTimer.current = window.setTimeout(() => {
        setAsyncLoading(false);
        handleCloseAsync();
      }, 2000);
    }
  };

  const handlePopoverButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => setPopoverEl(event.currentTarget);
  const handlePopoverButtonClose = () => setPopoverEl(null);
  const popoverOpen = Boolean(popoverEl);

  return (<Grid container>
    <Grid item xs={2}>
      <AppNavigation />
    </Grid>
    <Grid item xs>
      <Box component={Container}>
        <Grid container direction={'column'} spacing={1}>
          <Grid item xs>
            <Card>
              <CardHeader title='Dialogs' subheader={<>Open the "Async Dialog" to see a recommended flow of a asynchronous call to the backend (including the <Link
                href={'#/Buttons'}>"ButtonProgress"</Link> component).</>} />
              <CardContent>
                <Button color='secondary' onClick={handleClickOpenBasic}>Basic dialog</Button>
                <Button color='secondary' onClick={handleClickOpenForm}>Form dialog</Button>
                <Button color='secondary' onClick={handleClickOpenAsync}>Async dialog</Button>
                <Dialog
                  open={basicOpen}
                  onClose={handleCloseBasic}
                  aria-labelledby='basic-dialog-title'
                  aria-describedby='basic-dialog-description'
                >
                  <DialogTitle id='basic-dialog-title'>{'Basic dialog with different action button states'}</DialogTitle>
                  <DialogContent>
                    <LoremIpsumText lines={3} />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseBasic}>Cancel Action</Button>
                    <Button onClick={handleCloseBasic} color='secondary'>Secondary Action</Button>
                    <Button onClick={handleCloseBasic} color='primary' autoFocus>Primary Action</Button>
                  </DialogActions>
                </Dialog>
                <Dialog
                  open={formOpen}
                  onClose={handleCloseForm}
                  aria-labelledby='form-dialog-title'
                  aria-describedby='form-dialog-description'
                >
                  <DialogTitle id='form-dialog-title'>{'Form dialog with different action button states'}</DialogTitle>
                  <DialogContent>
                    <TextFieldClearButton
                      fullWidth
                      required
                      value={formValue}
                      error={formValue === ''}
                      id='standard-basic'
                      label='Test Value'
                      onChange={event => setFormValue(event === null ? '' : event.target.value)}
                    />
                    <Box mt={2}>
                      <Grid container spacing={1} alignItems={'center'}>
                        <Grid item><InfoIcon /></Grid>
                        <Grid item xs><Typography>Action Button should relate on the form state. Is the form invalid the action button should be disabled until the form becomes valid.</Typography></Grid>
                      </Grid>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseForm}>Cancel</Button>
                    <Button onClick={handleCloseForm} color='primary' disabled={formValue === ''} autoFocus>Primary Action</Button>
                  </DialogActions>
                </Dialog>
                <Dialog
                  open={asyncOpen}
                  onClose={handleCloseAsync}
                  aria-labelledby='async-dialog-title'
                  aria-describedby='async-dialog-description'
                >
                  <DialogTitle id='form-dialog-title'>{'Async dialog with different action button states'}</DialogTitle>
                  <DialogContent>
                    Action buttons should reload of a async state. This means: when saving a form the dialog should wait until the call is finished and shows a loading indicator.
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseAsync}>Cancel</Button>
                    <ButtonProgress inProgress={asyncLoading} onClick={handleButtonAsyncClick} color={'primary'}>Primary Action</ButtonProgress>
                  </DialogActions>
                </Dialog>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardHeader title={'Popovers'} subheader={'A use case could be the PSB provisional booking feature where the agent can input some comment text before saving.'} />
              <CardContent>
                <Button aria-describedby={'openPopoverButton'} variant='contained' color='primary' onClick={handlePopoverButtonClick}>Open Popover</Button>
                <Popover
                  id={'popover'}
                  open={popoverOpen}
                  anchorEl={popoverEl}
                  onClose={handlePopoverButtonClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                  }}
                >
                  <Typography className={styles.popoverTypography}>The content of the <Link target='__blank'
                                                                                            href='https://material-ui.com/components/popover/#popover'>Popover</Link>.</Typography>
                </Popover>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardHeader title={'Tooltips'}
                          subheader={'We decided to change the default font size for tooltips to the font size of typography variant "body2". This is implemented directly in the core theme.'} />
              <CardContent>
                <Grid container spacing={1} alignItems={'center'}>
                  <Grid item>
                    <Tooltip title={'This is a tooltip text.'}>
                      <WarningIcon />
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title={<>The tooltip even works with disabled button if you wrap the button inside a <CodeBox component={'span'} size={'small'}>span</CodeBox> element.</>}>
                      <span><Button disabled>Disabled button</Button></span>
                    </Tooltip>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </Grid>);
};
export default memo(Dialogs);
