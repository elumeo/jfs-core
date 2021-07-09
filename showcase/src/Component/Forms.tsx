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

const Forms = () => {
  const theme = useTheme();
  const [checkboxState, setCheckboxState] = React.useState({checkboxA: true, checkboxB: false, checkboxC: false, checkboxD: false});
  const [switchState, setSwitchState] = React.useState({switchA: true, switchB: false, switchC: false, switchD: false});
  const [radioValue, setRadioValue] = React.useState('radio1');
  const [enableUserSelectCssFeature, setEnableUserSelectCssFeature] = React.useState(false);
  const [displayRowStyle, setDisplayRowStyle] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState('');
  const [withPlaceholders, setWithPlaceholders] = React.useState(false);
  const [selectDense, setSelectDense] = React.useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => setCheckboxState({...checkboxState, [event.target.name]: event.target.checked});
  const handleSwitchChange = (name: string, value: boolean) => setSwitchState({...switchState, [name]: value});
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => setRadioValue((event.target as HTMLInputElement).value);
  const toggleUserSelectCssFeature = () => setEnableUserSelectCssFeature(!enableUserSelectCssFeature);
  const toggleDisplayRowStyle = () => setDisplayRowStyle(!displayRowStyle);
  const toggleShowError = () => setShowError(!showError);
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => setSelectValue(event.target.value as string);
  const toggleWithPlaceholder = () => setWithPlaceholders(!withPlaceholders);
  const toggleSelectDense = () => setSelectDense(!selectDense);

  return (<Grid container>
      <Grid item xs={2}><AppNavigation/></Grid>
      <Grid item xs>
        <Container>
          <Card>
            <CardHeader title='Forms'/>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item>
                  <FormControlLabel
                    control={<Switch onChange={toggleUserSelectCssFeature} checked={enableUserSelectCssFeature}/>}
                    label={<>Set <CodeBox component={'span'} size={'small'}>userSelect</CodeBox> css feature to <CodeBox component={'span'} size={'small'}>none</CodeBox></>}
                  />
                </Grid>
                <Grid item><FormControlLabel control={<Switch onChange={toggleDisplayRowStyle} checked={displayRowStyle}/>} label='Enable row style'/></Grid>
                <Grid item><FormControlLabel control={<Switch onChange={toggleShowError} checked={showError}/>} label='Show error'/></Grid>
              </Grid>
              <Box mt={2}>
                <Typography>Errors are controlled by the <CodeBox component={'span'} size={'small'}>{`<FormControl required error>...</FormControl>`}</CodeBox> Element.
                  The <CodeBox
                    component={'span'} size={'small'}>required</CodeBox> attribute controls the asterisk (*) char.</Typography>
              </Box>
              <Box mt={2}>
                <Grid container spacing={displayRowStyle ? 4 : 2}>
                  <Grid item xs={displayRowStyle ? 12 : 4}>
                    <FormControl required error={showError}>
                      <FormLabel>Checkbox Example</FormLabel>
                      <FormGroup row={displayRowStyle}>
                        <FormControlLabel
                          style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}}
                          control={<Checkbox checked={checkboxState.checkboxA} onChange={handleCheckboxChange} name='checkboxA'/>}
                          label='Checkbox A'
                        />
                        <FormControlLabel
                          style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}}
                          control={<Checkbox checked={checkboxState.checkboxB} onChange={handleCheckboxChange} name='checkboxB'/>}
                          label='Checkbox B'
                        />
                        <FormControlLabel
                          style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}}
                          control={<Checkbox checked={checkboxState.checkboxC} onChange={handleCheckboxChange} name='checkboxC'/>}
                          label='Checkbox C'
                        />
                        <FormControlLabel
                          disabled
                          style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}}
                          control={<Checkbox checked={checkboxState.checkboxD} onChange={handleCheckboxChange} name='checkboxD'/>}
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
                        <FormControlLabel style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}} value='radio1' control={<Radio/>} label='Radio 1'/>
                        <FormControlLabel style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}} value='radio2' control={<Radio/>} label='Radio 2'/>
                        <FormControlLabel style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}} value='radio3' control={<Radio/>} label='Radio 3'/>
                        <FormControlLabel style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}} value='radio4' disabled control={<Radio/>} label='Radio 4'/>
                      </RadioGroup>
                      <FormHelperText>{showError ? 'Ups, an error was detected!' : 'This is a helper text'}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={displayRowStyle ? 12 : 4}>
                    <FormControl required error={showError}>
                      <FormLabel>Switch Buttons Example</FormLabel>
                      <FormGroup row={displayRowStyle}>
                        <FormControlLabel style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}}
                                          control={<Switch checked={switchState.switchA} onChange={(event, value) => handleSwitchChange('switchA', value)} name='switchA'/>}
                                          label='Switch 1'/>
                        <FormControlLabel style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}}
                                          control={<Switch checked={switchState.switchB} onChange={(event, value) => handleSwitchChange('switchB', value)} name='switchB'/>}
                                          label='Switch 2'/>
                        <FormControlLabel style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}}
                                          control={<Switch checked={switchState.switchC} onChange={(event, value) => handleSwitchChange('switchC', value)} name='switchC'/>}
                                          label='Switch 3'/>
                        <FormControlLabel style={{userSelect: enableUserSelectCssFeature ? 'none' : 'inherit'}} disabled
                                          control={<Switch checked={switchState.switchD} onChange={(event, value) => handleSwitchChange('switchD', value)} name='switchD'/>}
                                          label='Switch 4'/>
                      </FormGroup>
                      <FormHelperText>{showError ? 'Ups, an error was detected!' : 'This is a helper text'}</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider/>
                    <Box>
                      <FormControlLabel control={<Switch onChange={toggleWithPlaceholder} checked={withPlaceholders}/>} label={<>With placeholder</>}/>
                    </Box>
                    <Box mt={2}>
                      <FormControlLabel control={<Switch onChange={toggleSelectDense} checked={selectDense}/>} label={<>Dense</>}/>
                      <Typography>Icons in <CodeBox component={'span'} size={'small'}>Select</CodeBox>'s need a little custom styling: <CodeBox component={'span'}
                                                                                                                                                size={'small'}>{`<WarningIcon style={{fontSize: theme.typography.pxToRem(isDense ? 16 : 20)}}/>`}</CodeBox></Typography>
                    </Box>
                    <Box mt={2}>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <FormControl style={{minWidth: 200}} required error={showError}>
                            <InputLabel shrink={withPlaceholders || selectValue !== ''}>Select/Dropdown Element</InputLabel>
                            <Select
                              value={selectValue}
                              onChange={handleSelectChange}
                              displayEmpty={withPlaceholders}
                            >
                              <MenuItem dense={selectDense} value=''><em>None</em></MenuItem>
                              <MenuItem dense={selectDense} value={1}><Box alignItems={'center'} display={'flex'}>
                                <WarningIcon style={{fontSize: theme.typography.pxToRem(selectDense ? 16 : 20)}}/>
                                <Box component={'span'} ml={1}>Value 1</Box>
                              </Box></MenuItem>
                              <MenuItem dense={selectDense} value={2}><Box alignItems={'center'} display={'flex'}>
                                <WarningIcon style={{fontSize: theme.typography.pxToRem(selectDense ? 16 : 20)}} color={'primary'}/>
                                <Box component={'span'} ml={1} color={theme.palette.primary.main}>Value 2</Box>
                              </Box></MenuItem>
                              <MenuItem dense={selectDense} value={3} disabled>Value 3</MenuItem>
                              <MenuItem dense={selectDense} value={4}>Value 4 with a longer label</MenuItem>
                              <MenuItem dense={selectDense} value={5}>Value 5 with even a more longer, longer and longer label</MenuItem>
                              <MenuItem dense={selectDense} value={6} disabled><Box alignItems={'center'} display={'flex'}>
                                <WarningIcon style={{fontSize: theme.typography.pxToRem(selectDense ? 16 : 20)}} color={'primary'}/>
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
                            <FormHelperText>Label{withPlaceholders ? ' + Placeholder' : ''}</FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid>
                          <FormControl style={{minWidth: 200}}>
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
                            InputProps={{endAdornment: <InputAdornment position='end' style={{userSelect: 'none'}}>ct</InputAdornment>}}
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
                            InputProps={{endAdornment: <InputAdornment position='end' style={{userSelect: 'none'}}>gr</InputAdornment>}}
                            inputProps={{ min: '0', max: '100', step: '1' }}
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField
                            size={selectDense ? 'small' : 'medium'}
                            margin={selectDense ? 'dense' : 'none'}
                            error={showError}
                            label='Text field'
                            defaultValue='This is a default value'
                            helperText='And some important help text'
                            InputProps={{endAdornment: <InputAdornment position='end' style={{userSelect: 'none'}}>€</InputAdornment>}}
                          />
                        </Grid>
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
                            label='Text field'
                            defaultValue='This is a default value'
                            helperText='And some important help text'
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
      </Grid>
    </Grid>
  );
};
export default memo(Forms);
