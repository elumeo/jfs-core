import React, { memo } from 'react';
import AppNavigation from 'Component/AppNavigation';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup, FormHelperText,
  FormLabel,
  Grid, InputLabel, MenuItem,
  Radio,
  RadioGroup, Select,
  Typography,
  Switch, Divider, TextField, InputAdornment
} from '@material-ui/core';
import CodeBox from 'Component/CodeBox';
import WarningIcon from '@material-ui/icons/Warning';
import { useTheme } from '@material-ui/core/styles';
import PriceField from '@elumeo/jfs-core/build/Component/PriceInput';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDateTimePicker, KeyboardTimePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

const Forms = () => {
  const theme = useTheme();
  const [checkboxState, setCheckboxState] = React.useState({ checkboxA: true, checkboxB: false, checkboxC: false, checkboxD: false });
  const [switchState, setSwitchState] = React.useState({ switchA: true, switchB: false, switchC: false, switchD: false });
  const [radioValue, setRadioValue] = React.useState('radio1');
  const [displayRowStyle, setDisplayRowStyle] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState('');
  const [withPlaceholders, setWithPlaceholders] = React.useState(false);
  const [selectDense, setSelectDense] = React.useState(false);
  const [priceValue, setPriceValue] = React.useState('1000.55');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2021-07-09T10:00:00'));

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => setCheckboxState({ ...checkboxState, [event.target.name]: event.target.checked });
  const handleSwitchChange = (name: string, value: boolean) => setSwitchState({ ...switchState, [name]: value });
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => setRadioValue((event.target as HTMLInputElement).value);
  const toggleDisplayRowStyle = () => setDisplayRowStyle(!displayRowStyle);
  const toggleShowError = () => setShowError(!showError);
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => setSelectValue(event.target.value as string);
  const toggleWithPlaceholder = () => setWithPlaceholders(!withPlaceholders);
  const toggleSelectDense = () => setSelectDense(!selectDense);
  const handleDateChange = (date: Date | null) => setSelectedDate(date);

  return (<Grid container>
      <Grid item xs={2}><AppNavigation /></Grid>
      <Grid item xs>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Container>
            <Card>
              <CardHeader title='Forms' subheader={<>Errors are controlled by the <CodeBox component={'span'} size={'small'}>{`<FormControl required error>...</FormControl>`}</CodeBox> Element.
                The <CodeBox component={'span'} size={'small'}>required</CodeBox> attribute controls the asterisk (*) char.</>} />
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item><FormControlLabel control={<Switch onChange={toggleDisplayRowStyle} checked={displayRowStyle} />} label='Enable row style' /></Grid>
                  <Grid item><FormControlLabel control={<Switch onChange={toggleShowError} checked={showError} />} label='Show error' /></Grid>
                </Grid>
                <Box mt={2}>
                  <Grid container spacing={displayRowStyle ? 4 : 2}>
                    <Grid item xs={displayRowStyle ? 12 : 4}>
                      <FormControl required error={showError}>
                        <FormLabel>Checkbox Example</FormLabel>
                        <FormGroup row={displayRowStyle}>
                          <FormControlLabel
                            control={<Checkbox checked={checkboxState.checkboxA} onChange={handleCheckboxChange} name='checkboxA' />}
                            label='Checkbox A'
                          />
                          <FormControlLabel
                            control={<Checkbox checked={checkboxState.checkboxB} onChange={handleCheckboxChange} name='checkboxB' />}
                            label='Checkbox B'
                          />
                          <FormControlLabel
                            control={<Checkbox checked={checkboxState.checkboxC} onChange={handleCheckboxChange} name='checkboxC' />}
                            label='Checkbox C'
                          />
                          <FormControlLabel
                            disabled
                            control={<Checkbox checked={checkboxState.checkboxD} onChange={handleCheckboxChange} name='checkboxD' />}
                            label='Checkbox D'
                          />
                        </FormGroup>
                        <FormHelperText>{showError ? 'Ups, an error was detected!' : 'This is a helper text'}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={displayRowStyle ? 12 : 4}>
                      <FormControl required error={showError}>
                        <FormLabel>Radio Buttons Example</FormLabel>
                        <RadioGroup row={displayRowStyle} name='radio' value={radioValue} onChange={handleRadioChange}>
                          <FormControlLabel value='radio1' control={<Radio />} label='Radio 1' />
                          <FormControlLabel value='radio2' control={<Radio />} label='Radio 2' />
                          <FormControlLabel value='radio3' control={<Radio />} label='Radio 3' />
                          <FormControlLabel value='radio4' disabled control={<Radio />} label='Radio 4' />
                        </RadioGroup>
                        <FormHelperText>{showError ? 'Ups, an error was detected!' : 'This is a helper text'}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={displayRowStyle ? 12 : 4}>
                      <FormControl required error={showError}>
                        <FormLabel>Switch Buttons Example</FormLabel>
                        <FormGroup row={displayRowStyle}>
                          <FormControlLabel
                            control={<Switch
                              checked={switchState.switchA}
                              onChange={(event, value) => handleSwitchChange('switchA', value)} name='switchA'
                            />}
                            label='Switch 1' />
                          <FormControlLabel
                            control={<Switch
                              checked={switchState.switchB}
                              onChange={(event, value) => handleSwitchChange('switchB', value)} name='switchB'
                            />}
                            label='Switch 2' />
                          <FormControlLabel
                            control={<Switch
                              checked={switchState.switchC}
                              onChange={(event, value) => handleSwitchChange('switchC', value)} name='switchC'
                            />}
                            label='Switch 3' />
                          <FormControlLabel
                            control={<Switch
                              checked={switchState.switchD}
                              onChange={(event, value) => handleSwitchChange('switchD', value)} name='switchD'
                            />}
                            label='Switch 4' />
                        </FormGroup>
                        <FormHelperText>{showError ? 'Ups, an error was detected!' : 'This is a helper text'}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                      <Box mt={2}>
                        <Typography variant={'h6'}>Select/Dropdown Elements</Typography>
                        <Typography color={'textSecondary'}>Icons in <CodeBox component={'span'} size={'small'}>Select</CodeBox>'s need a little custom styling: <CodeBox
                          component={'span'}
                          size={'small'}>{`<WarningIcon style={{fontSize: theme.typography.pxToRem(isDense ? 16 : 20)}}/>`}</CodeBox></Typography>
                      </Box>
                      <Box mt={2}>
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <FormControl style={{ width: 200 }} required error={showError}>
                              <InputLabel shrink={withPlaceholders || selectValue !== ''}>Choose Value</InputLabel>
                              <Select
                                value={selectValue}
                                onChange={handleSelectChange}
                                displayEmpty={withPlaceholders}
                              >
                                <MenuItem dense={selectDense} value=''><em>No value</em></MenuItem>
                                <MenuItem dense={selectDense} value={1}><Box alignItems={'center'} display={'flex'}>
                                  <WarningIcon style={{ fontSize: theme.typography.pxToRem(selectDense ? 16 : 20) }} />
                                  <Box component={'span'} ml={1}>Value 1</Box>
                                </Box></MenuItem>
                                <MenuItem dense={selectDense} value={2}><Box alignItems={'center'} display={'flex'}>
                                  <WarningIcon style={{ fontSize: theme.typography.pxToRem(selectDense ? 16 : 20) }} color={'primary'} />
                                  <Box component={'span'} ml={1} color={theme.palette.primary.main}>Value 2</Box>
                                </Box></MenuItem>
                                <MenuItem dense={selectDense} value={3} disabled>Value 3</MenuItem>
                                <MenuItem dense={selectDense} value={4}>Value 4 with a longer label</MenuItem>
                                <MenuItem dense={selectDense} value={5}>Value 5 with even a more longer, longer and longer label</MenuItem>
                                <MenuItem dense={selectDense} value={6} disabled><Box alignItems={'center'} display={'flex'}>
                                  <WarningIcon style={{ fontSize: theme.typography.pxToRem(selectDense ? 16 : 20) }} color={'primary'} />
                                  <Box component={'span'} ml={1} color={theme.palette.primary.main}>Value 6</Box>
                                </Box></MenuItem>
                                <MenuItem dense={selectDense} value={7}>Value 7</MenuItem>
                                <MenuItem dense={selectDense} value={8}>Value 8</MenuItem>
                                <MenuItem dense={selectDense} value={9}>Value 9</MenuItem>
                                <MenuItem dense={selectDense} value={10}>Value 10</MenuItem>
                                <MenuItem dense={selectDense} value={11}>Value 11</MenuItem>
                                <MenuItem dense={selectDense} value={12}>Value 12</MenuItem>
                                <MenuItem dense={selectDense} value={13}>Value 13</MenuItem>
                                <MenuItem dense={selectDense} value={14}>Value 14</MenuItem>
                              </Select>
                              <FormHelperText>We decided to display "empty" values with a human readable value in the "Select-A-Value-Box" but displaying them in the input field is
                                optional.</FormHelperText>
                            </FormControl>
                          </Grid>
                          <Grid>
                            <FormControl style={{ minWidth: 200 }}>
                              <InputLabel shrink={withPlaceholders || selectValue !== ''}>Disabled Element</InputLabel>
                              <Select
                                value={selectValue}
                                onChange={handleSelectChange}
                                displayEmpty={withPlaceholders}
                                disabled
                              ><MenuItem dense={selectDense} value=''><em>None</em></MenuItem></Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box mt={2}>
                        <Grid container spacing={1}>
                          <Grid item xs={2}>
                            <TextField
                              size={selectDense ? 'small' : 'medium'}
                              margin={selectDense ? 'dense' : 'none'}
                              error={showError}
                              label='Text field'
                              defaultValue='This is a default value'
                              helperText='And some important help text'
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              size={selectDense ? 'small' : 'medium'}
                              margin={selectDense ? 'dense' : 'none'}
                              error={showError}
                              label='Number Text field'
                              defaultValue='0.5'
                              helperText='This is a carat text field which has an endAdornment and the additional attributes: min, max and step'
                              type={'number'}
                              InputProps={{ endAdornment: <InputAdornment position='end' style={{ userSelect: 'none' }}>ct</InputAdornment> }}
                              inputProps={{ min: '0', max: '1', step: '0.01' }}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              size={selectDense ? 'small' : 'medium'}
                              margin={selectDense ? 'dense' : 'none'}
                              error={showError}
                              label='Number Text field'
                              defaultValue='50'
                              helperText='This is a weight text field which has an endAdornment and the additional attributes: min, max and step'
                              type={'number'}
                              InputProps={{ endAdornment: <InputAdornment position='end' style={{ userSelect: 'none' }}>gr</InputAdornment> }}
                              inputProps={{ min: '0', max: '100', step: '1' }}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              size={selectDense ? 'small' : 'medium'}
                              margin={selectDense ? 'dense' : 'none'}
                              error={showError}
                              label='Text field'
                              defaultValue='This is the default value'
                              helperText='This is a text field'
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <PriceField
                              size={selectDense ? 'small' : 'medium'}
                              margin={selectDense ? 'dense' : 'none'}
                              error={showError}
                              label='Core Price field'
                              value={priceValue}
                              helperText='This is a price field which is provided by the core'
                              onChange={(event) => setPriceValue(event.target.value)}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <KeyboardDatePicker
                              disableToolbar
                              label='Date picker inline'
                              variant='inline'
                              format='dd/MM/yyyy'
                              value={selectedDate}
                              onChange={handleDateChange}
                              KeyboardButtonProps={{ 'aria-label': 'change date' }}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <KeyboardTimePicker
                              label='Time picker'
                              format={'HH:mm'}
                              ampm={false}
                              value={selectedDate}
                              onChange={(date) => handleDateChange(date as any)}
                              KeyboardButtonProps={{ 'aria-label': 'change time' }}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <KeyboardDateTimePicker
                              ampm={false}
                              variant='inline'
                              format='dd/MM/yyyy HH:mm'
                              label='Datetime picker inline'
                              value={selectedDate}
                              onChange={(date) => handleDateChange(date as any)}
                              KeyboardButtonProps={{ 'aria-label': 'change date and time' }}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              disabled
                              size={selectDense ? 'small' : 'medium'}
                              margin={selectDense ? 'dense' : 'none'}
                              label='A disabled text field'
                              defaultValue=''
                              helperText='And some important help text'
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              size={selectDense ? 'small' : 'medium'}
                              margin={selectDense ? 'dense' : 'none'}
                              label='A text field with an icon'
                              defaultValue=''
                              error={showError}
                              helperText='The icon can be implemented on start or end or both and should reflect error color'
                              InputProps={{ startAdornment: <InputAdornment position='start'><WarningIcon color={showError ? 'error' : 'inherit'} /></InputAdornment> }}
                            />
                          </Grid>
                          <Grid item xs>
                            <TextField
                              fullWidth
                              size={selectDense ? 'small' : 'medium'}
                              margin={selectDense ? 'dense' : 'none'}
                              error={showError}
                              label='Fullwidth text field'
                              defaultValue='This is a default value'
                              helperText='And some important help text'
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
};
export default memo(Forms);
