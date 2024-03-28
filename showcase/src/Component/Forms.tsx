/* eslint-disable max-lines */
import React, {memo} from 'react';
import AppNavigation from 'Component/AppNavigation';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography
} from '@material-ui/core';
import CodeBox from 'Component/CodeBox';
import WarningIcon from '@material-ui/icons/Warning';
import PriceField from '@elumeo/jfs-core/build/Component/PriceInput';
import {DatePicker, DateTimePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import KeyboardDatePicker from '@elumeo/jfs-core/build/Component/DatePicker';
import SelectClearButton, {Props as SelectClearButtonProps} from '@elumeo/jfs-core/build/Component/SelectClearButton';
import TextFieldClearButton from '@elumeo/jfs-core/build/Component/TextFieldClearButton';

const Forms = () => {
  const [checkboxState, setCheckboxState] = React.useState({
    checkboxA: true,
    checkboxB: false,
    checkboxC: false,
    checkboxD: false
  });
  const [switchState, setSwitchState] = React.useState({switchA: true, switchB: false, switchC: false, switchD: false});
  const [radioValue, setRadioValue] = React.useState('radio1');
  const [displayRowStyle, setDisplayRowStyle] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState('');
  const [priceValue, setPriceValue] = React.useState('1000.55');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date('2021-07-09T10:00:00'));
  const [textFieldValue, setTextFieldValue] = React.useState('This is a default value');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => setCheckboxState({
    ...checkboxState,
    [event.target.name]: event.target.checked
  });
  const handleSwitchChange = (name: string, value: boolean) => setSwitchState({...switchState, [name]: value});
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => setRadioValue((event.target as HTMLInputElement).value);
  const toggleDisplayRowStyle = () => setDisplayRowStyle(!displayRowStyle);
  const toggleShowError = () => setShowError(!showError);
  const handleSelectChange: SelectClearButtonProps['onChange'] = value => setSelectValue(value === null ? '' : value as string);
  const handleDateChange = (date: Date | null) => setSelectedDate(date);

  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Container>
            <Card>
              <CardHeader title="Forms" subheader={<>Errors are controlled by the <CodeBox component={'span'}
                                                                                           size={'small'}>{`<FormControl required error>...</FormControl>`}</CodeBox> Element.
                The <CodeBox component={'span'} size={'small'}>required</CodeBox> attribute controls the asterisk (*)
                char.</>}/>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item><FormControlLabel
                    control={<Switch onChange={toggleDisplayRowStyle} checked={displayRowStyle}/>}
                    label="Enable row style"/></Grid>
                  <Grid item><FormControlLabel control={<Switch onChange={toggleShowError} checked={showError}/>}
                                               label="Show error"/></Grid>
                </Grid>
                <Box mt={2}>
                  <Grid container spacing={displayRowStyle ? 4 : 2}>
                    <Grid item xs={displayRowStyle ? 12 : 4}>
                      <FormControl required error={showError}>
                        <FormLabel>Checkbox Example</FormLabel>
                        <FormGroup row={displayRowStyle}>
                          <FormControlLabel
                            control={<Checkbox checked={checkboxState.checkboxA} onChange={handleCheckboxChange}
                                               name="checkboxA"/>}
                            label="Checkbox A"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={checkboxState.checkboxB} onChange={handleCheckboxChange}
                                               name="checkboxB"/>}
                            label="Checkbox B"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={checkboxState.checkboxC} onChange={handleCheckboxChange}
                                               name="checkboxC"/>}
                            label="Checkbox C"
                          />
                          <FormControlLabel
                            disabled
                            control={<Checkbox checked={checkboxState.checkboxD} onChange={handleCheckboxChange}
                                               name="checkboxD"/>}
                            label="Checkbox D"
                          />
                        </FormGroup>
                        <FormHelperText>{showError ? 'Ups, an error was detected!' : 'This is a helper text'}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={displayRowStyle ? 12 : 4}>
                      <FormControl required error={showError}>
                        <FormLabel>Radio Buttons Example</FormLabel>
                        <RadioGroup row={displayRowStyle} name="radio" value={radioValue} onChange={handleRadioChange}>
                          <FormControlLabel value="radio1" control={<Radio/>} label="Radio 1"/>
                          <FormControlLabel value="radio2" control={<Radio/>} label="Radio 2"/>
                          <FormControlLabel value="radio3" control={<Radio/>} label="Radio 3"/>
                          <FormControlLabel value="radio4" disabled control={<Radio/>} label="Radio 4"/>
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
                              onChange={(event, value) => handleSwitchChange('switchA', value)} name="switchA"
                            />}
                            label="Switch 1"/>
                          <FormControlLabel
                            control={<Switch
                              checked={switchState.switchB}
                              onChange={(event, value) => handleSwitchChange('switchB', value)} name="switchB"
                            />}
                            label="Switch 2"/>
                          <FormControlLabel
                            control={<Switch
                              checked={switchState.switchC}
                              onChange={(event, value) => handleSwitchChange('switchC', value)} name="switchC"
                            />}
                            label="Switch 3"/>
                          <FormControlLabel
                            control={<Switch
                              checked={switchState.switchD}
                              onChange={(event, value) => handleSwitchChange('switchD', value)} name="switchD"
                            />}
                            label="Switch 4"/>
                        </FormGroup>
                        <FormHelperText>{showError ? 'Ups, an error was detected!' : 'This is a helper text'}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider/>
                      <Box mt={2}>
                        <Typography variant={'h6'}>Select/Dropdown Elements</Typography>
                        <Typography color={'textSecondary'}>Icons in <CodeBox component={'span'}
                                                                              size={'small'}>Select</CodeBox>'s need a
                          little custom styling: <CodeBox
                            component={'span'}
                            size={'small'}>{`<WarningIcon style={{fontSize: theme.typography.pxToRem(isDense ? 16 : 20)}}/>`}</CodeBox></Typography>
                      </Box>
                      <Box mt={2}>
                        <Grid container spacing={1}>
                          <Grid item xs={6}>
                            <FormControl style={{width: 200}} required error={showError}>
                              <InputLabel shrink={selectValue !== ''}>Choose Value</InputLabel>
                              <SelectClearButton
                                value={selectValue}
                                onChange={handleSelectChange}
                                options={[
                                  {value: '1', label: 'Value 1'},
                                  {value: '2', label: 'Value 2'},
                                  {value: '3', label: 'Value 3'},
                                  {value: '4', label: 'Value 4 with a longer label'},
                                  {value: '5', label: 'Value 5 with even a more longer, longer and longer label'},
                                  {value: '6', label: 'Value 6'},
                                  {value: '7', label: 'Value 7'},
                                  {value: '8', label: 'Value 8'},
                                  {value: '9', label: 'Value 9'},
                                  {value: '10', label: 'Value 10'},
                                  {value: '11', label: 'Value 11'},
                                  {value: '12', label: 'Value 12'},
                                  {value: '13', label: 'Value 13'},
                                  {value: '14', label: 'Value 14'},
                                ]}
                              />
                              <FormHelperText>The <CodeBox component={'span'}
                                                           size={'small'}>SelectClearButton</CodeBox> component will
                                automatically display a clear icon button when something was selected.</FormHelperText>
                            </FormControl>
                          </Grid>
                          <Grid>
                            <FormControl style={{minWidth: 200}}>
                              <InputLabel shrink={selectValue !== ''}>Disabled Element</InputLabel>
                              <SelectClearButton value={''} onChange={console.log} disabled options={[
                                {value: '1', label: 'Value 1'},
                              ]}/>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box mt={2}>
                        <Grid container spacing={1}>
                          <Grid item xs={2}>
                            <TextFieldClearButton
                              error={showError}
                              label="Text field"
                              value={textFieldValue}
                              helperText="And some important help text"
                              onChange={event => setTextFieldValue(event === null ? '' : event.target.value)}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              error={showError}
                              label="Number Text field"
                              defaultValue="0.5"
                              helperText="This is a carat text field which has an endAdornment and the additional attributes: min, max and step"
                              type={'number'}
                              InputProps={{
                                endAdornment: <InputAdornment position="end"
                                                              style={{userSelect: 'none'}}>ct</InputAdornment>
                              }}
                              inputProps={{min: '0', max: '1', step: '0.01'}}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextField
                              error={showError}
                              label="Number Text field"
                              defaultValue="50"
                              helperText="This is a weight text field which has an endAdornment and the additional attributes: min, max and step"
                              type={'number'}
                              InputProps={{
                                endAdornment: <InputAdornment position="end"
                                                              style={{userSelect: 'none'}}>gr</InputAdornment>
                              }}
                              inputProps={{min: '0', max: '100', step: '1'}}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextFieldClearButton
                              error={showError}
                              label="Text field"
                              value={textFieldValue}
                              helperText="This is a text field"
                              onChange={event => setTextFieldValue(event === null ? '' : event.target.value)}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <PriceField
                              error={showError}
                              label="Core Price field"
                              value={priceValue}
                              helperText="This is a price field which is provided by the core"
                              onChange={(event) => setPriceValue(event.target.value)}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <DatePicker
                              disableToolbar
                              label="Date picker"
                              variant="inline"
                              format="dd/MM/yyyy"
                              value={selectedDate}
                              onChange={handleDateChange}
                              helperText={'The keyboard support in native MUI is very buggy when validating input! For keyboard support you have to use core component date picker.'}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <KeyboardTimePicker
                              label="Time picker"
                              format={'HH:mm'}
                              ampm={false}
                              value={selectedDate}
                              onChange={(date) => handleDateChange(date)}
                              KeyboardButtonProps={{'aria-label': 'change time'}}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <DateTimePicker
                              ampm={false}
                              variant="inline"
                              format="dd/MM/yyyy HH:mm"
                              label="Datetime picker"
                              value={selectedDate}
                              onChange={(date) => handleDateChange(date)}
                              helperText={'The keyboard support in native MUI is very buggy when validating input! For keyboard support you have to use core component date picker.'}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <KeyboardDatePicker
                              label={'Keyboard date picker'}
                              value={selectedDate}
                              onChange={(date) => handleDateChange(date as Date)}
                              shouldOpenOnFocus
                              helperText={'This Datepicker supports keyboard inputs'}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <KeyboardDatePicker
                              label={'Keyboard date picker'}
                              value={selectedDate}
                              onChange={(date) => handleDateChange(date as Date)}
                              shouldOpenOnFocus
                              disabled
                              helperText={'This Datepicker supports keyboard inputs'}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextFieldClearButton
                              disabled
                              label="A disabled text field"
                              value={textFieldValue}
                              helperText="And some important help text"
                              onChange={event => setTextFieldValue(event === null ? '' : event.target.value)}
                            />
                          </Grid>
                          <Grid item xs={2}>
                            <TextFieldClearButton
                              label="A text field with an icon"
                              value={textFieldValue}
                              onChange={event => setTextFieldValue(event === null ? '' : event.target.value)}
                              error={showError}
                              helperText="The icon can be implemented on start or end or both and should reflect error color"
                              InputProps={{
                                startAdornment: <InputAdornment position="start"><WarningIcon
                                  color={showError ? 'error' : 'inherit'}/></InputAdornment>
                              }}
                            />
                          </Grid>
                          <Grid item xs>
                            <TextFieldClearButton
                              fullWidth
                              error={showError}
                              label="Fullwidth text field"
                              value={textFieldValue}
                              onChange={event => setTextFieldValue(event === null ? '' : event.target.value)}
                              helperText="And some important help text"
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
