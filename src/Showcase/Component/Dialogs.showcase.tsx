/* eslint-disable max-lines */
import React from 'react';
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
  FormControl,
  FormGroup,
  Grid,
  Link, MenuItem,
  Popover,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import AppNavigation from './AppNavigation.showcase';
import LoremIpsumText from './LoremIpsumText.showcase';
import CodeBox from './CodeBox.showcase';
import {ButtonProgress} from '../../Component/Button';
import TextField from '../../Component/TextField';
import Select from '../../Component/Select';
import definition from '../../Component/App/Stateless/Style/Theme/Definition';
import Layout from '../../Component/App/Layout';

const sxs = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    margin: definition.spacing(1),
    position: 'relative'
  },
  fabProgress: {
    color: definition.palette.success.main,
    position: 'absolute',
    top: -6,
    left: -6,
    // zIndex: 1
  },
  buttonProgress: {
    color: definition.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  },
  popoverTypography: {padding: definition.spacing(2)}
}

const Dialogs = () => {
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(false);
  const [formValue, setFormValue] = React.useState('');
  const [formValueMulti, setFormValueMulti] = React.useState<string[]>([]);
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

  return (
    <Layout navigation={<AppNavigation/>} fullWidth>
      <Container maxWidth={false} disableGutters>
        <Grid container direction={'column'} spacing={1}>
          <Grid item xs>
            <Card>
              <CardHeader title='Dialogs' subheader={<>Open the "Async Dialog" to see a recommended flow of a asynchronous call to the backend (including the <Link
                href={'#/Buttons'}>"ButtonProgress"</Link> component).</>}/>
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
                    <LoremIpsumText lines={3}/>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseBasic} variant={'outlined'} color='secondary'>Cancel Action</Button>
                    <Button onClick={handleCloseBasic} variant={'contained'} color='secondary'>Secondary Action</Button>
                    <Button onClick={handleCloseBasic} variant={'contained'} color='primary' autoFocus>Primary Action</Button>
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
                    <Stack spacing={2} pt={1} component={FormGroup}>
                      <FormControl error={!formValue}>
                        <TextField
                          fullWidth
                          required
                          value={formValue}
                          id='standard-basic'
                          label='Test Value'
                          onChange={event => setFormValue(event === null ? '' : event.target.value)}
                        />
                      </FormControl>
                      <FormControl variant="standard" error={!formValue}>
                        <Select<string>
                          value={formValue ?? ''}
                          required
                          error={!formValue}
                          onChange={event => {
                            setFormValue(event.target.value as string)
                          }}
                          label={'single value select variant outlined'}
                          helperText={'you can use the <Select> component inside FormControl or without'}
                        >
                          <MenuItem value={'1'}>Option 1</MenuItem>
                          <MenuItem value={'2'}>Option 2</MenuItem>
                          <MenuItem value={'3'}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl variant="standard" error={!formValue} fullWidth>
                        <Select<string[]>
                          multiple
                          error={formValueMulti.length < 2}
                          value={formValueMulti}
                          label={'multi value select variant outlined'}
                          onChange={event => {
                            setFormValueMulti(event.target.value as string[])
                          }}
                          canClear
                          maxValuesShown={2}
                        >
                          <MenuItem value={'1'}>Option 1</MenuItem>
                          <MenuItem value={'2'}>Option 2</MenuItem>
                          <MenuItem value={'3'}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl variant="standard" error={!formValue} fullWidth>
                        <Select<string[]>
                          multiple
                          value={[]}
                          label={'loading example'}
                          canClear
                          loading
                        ></Select>
                      </FormControl>
                      <Select<string[]>
                        multiple
                        value={formValueMulti}
                        label={'multi value not in a form control'}
                        onChange={event => {
                          setFormValueMulti(event.target.value as string[])
                        }}
                        formControlProps={{
                          variant: "standard",
                          fullWidth: true
                        }}
                        canClear
                      >
                        <MenuItem value={'1'}>Option 1</MenuItem>
                        <MenuItem value={'2'}>Option 2</MenuItem>
                        <MenuItem value={'3'}>Option 3</MenuItem>
                      </Select>
                      <Box mt={2}>
                        <Grid container spacing={1} alignItems={'center'}>
                          <Grid item><InfoIcon/></Grid>
                          <Grid item xs><Typography>Action Button should relate on the form state. Is the form invalid the action button should be disabled until the form becomes
                            valid.</Typography></Grid>
                        </Grid>
                      </Box>
                    </Stack>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseForm} variant={'contained'} color='secondary'>Cancel</Button>
                    <Button onClick={handleCloseForm} variant={'contained'} color='primary' disabled={!formValue?.length || (formValueMulti.length < 2)} autoFocus>Primary
                      Action</Button>
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
                    <ButtonProgress onClick={handleCloseAsync} variant={'contained'} color='secondary'>Cancel</ButtonProgress>
                    <ButtonProgress inProgress={asyncLoading} variant={'contained'} color='primary' onClick={handleButtonAsyncClick}>Primary Action</ButtonProgress>
                  </DialogActions>
                </Dialog>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardHeader title={'Popovers'} subheader={'A use case could be the PSB provisional booking feature where the agent can input some comment text before saving.'}/>
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
                  <Typography sx={sxs.popoverTypography}>The content of the <Link target='__blank'
                                                                                  href='https://mui.com/material-ui/react-popover/#popover'>Popover</Link>.</Typography>
                </Popover>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs>
            <Card>
              <CardHeader title={'Tooltips'}
                          subheader={'We decided to change the default font size for tooltips to the font size of typography variant "body2". This is implemented directly in the core theme.'}/>
              <CardContent>
                <Grid container spacing={1} alignItems={'center'}>
                  <Grid item>
                    <Tooltip title={'This is a tooltip text.'}>
                      <WarningIcon/>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={<>The tooltip even works with disabled button if you wrap the button inside a <CodeBox component={'span'} size={'small'}>span</CodeBox> element.</>}>
                      <span><Button disabled>Disabled button</Button></span>
                    </Tooltip>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default Dialogs
