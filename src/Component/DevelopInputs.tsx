import * as React from 'react';
import { useState } from 'react';
// import { AppCardContent, AppCardHeader } from 'Component/Card';
// import WarningIcon from '@material-ui/icons/Warning';
import { Card } from '@material-ui/core';
// import { FilterReset } from 'Component/Icon';
// import DatePicker from 'Component/DatePicker';
// import TextFieldClearButton, { TextFieldClearButtonProps } from 'Component/TextFieldClearButton';
// import SelectClearButton, { Props as SelectClearButtonProps } from 'Component/SelectClearButton';
import PriceInput from 'Component/PriceInput';
// import SearchIcon from '@material-ui/icons/Search';

// const textFieldInputProps = { startAdornment: <InputAdornment position={'start'}><SearchIcon /></InputAdornment> };

const DevelopInputs: React.FC = () => {
  // const [multipleSelectValue, setMultipleSelectValue] = useState(['test 1']);
  // const handleMultipleSelectUpdate: SelectClearButtonProps['onChange'] = useCallback(value => setMultipleSelectValue(value as string[]), []);

  // const [testDatePickerValue, setTestDatePickerValue] = useState<Date>(null);

  // const [testTextFieldValue, setTestTextFieldValue] = useState('');
  // const handleTextFieldUpdate: TextFieldClearButtonProps['onChange'] = useCallback(event => setTestTextFieldValue(event === null ? '' : event.target.value), []);

  // const [singleSelectValue, setSingleSelectValue] = useState('');
  // const handleSingleSelectUpdate: SelectClearButtonProps['onChange'] = useCallback(value => setSingleSelectValue(value as string), []);

  const [testPriceValue, setTestPriceValue] = useState<React.ReactText>(0)
  return (
    <Card>
      {/* <AppCardHeader title={'Test'} titleIcon={<WarningIcon />} onRefresh={console.log} />
      <AppCardContent>
        Das ist der Inhalt
        <IconButton size={'small'} color={'secondary'}><FilterReset /></IconButton>
        <Grid container spacing={2}>
          <Grid item>
            <DatePicker
              label={'DatePicker'}
              onChange={date => setTestDatePickerValue(date)}
              value={testDatePickerValue}
              isClearable={false}
            />
          </Grid>
          <Grid item> */}
      <PriceInput
        value={testPriceValue}
        // setPrice={price => setTestPriceValue(price)}
        // min={0}
        // max={100}
        onChange={event => { setTestPriceValue(event.target.value) }}
      />
      {/* </Grid>
          <Grid item>
            <TextFieldClearButton
              label={'Textfield'}
              onChange={handleTextFieldUpdate}
              value={testTextFieldValue}
              clearButtonSize={'small'}
              InputProps={textFieldInputProps}
            />
          </Grid>
          <Grid item>
            <TextFieldClearButton
              disabled
              label={'Textfield'}
              onChange={handleTextFieldUpdate}
              value={testTextFieldValue}
              clearButtonSize={'small'}
            />
          </Grid>
          <Grid item xs={1}>
            <SelectClearButton
              fullWidth
              label={'Single select'}
              onChange={handleSingleSelectUpdate}
              value={singleSelectValue}
              clearButtonSize={'small'}
              renderValueAsChip
              options={[
                { value: 'test 1', label: 'Test 1' },
                { value: 'test 2', label: 'Test 2' },
                { value: 'test 3', label: 'Test 3' },
                { value: 'test 4', label: 'Test 4' },
                { value: 'DasIstEinSehrLangerWert', label: 'Das ist ein sehr langer Wert' },
                {
                  value: 'DasIstEinSehrLangerWertMal2',
                  label: 'Das ist ein sehr langer Wert Das ist ein sehr langer Wert'
                },
              ]}
            />
          </Grid>
          <Grid item xs={1}>
            <SelectClearButton
              fullWidth
              label={'Multiple select'}
              onChange={handleMultipleSelectUpdate}
              value={multipleSelectValue}
              clearButtonSize={'small'}
              multiple
              maxValuesToDisplayInInput={2}
              renderValueAsChip
              options={[
                { value: 'test 1', label: 'Test 1 Das ist ein sehr langer Wert Wert Wert Wert' },
                { value: 'test 2', label: 'Test 2' },
                { value: 'test 3', label: 'Test 3' },
                { value: 'test 4', label: 'Test 4' },
                { value: 'DasIstEinSehrLangerWert', label: 'Das ist ein sehr langer Wert' },
                {
                  value: 'DasIstEinSehrLangerWertMal2',
                  label: 'Das ist ein sehr langer Wert Das ist ein sehr langer Wert'
                },
              ]}
            />
          </Grid>
          <Grid item><Button onClick={() => setMultipleSelectValue(['test 1'])} color={'primary'}>Set Multiple Select
            Value</Button></Grid> */}
      {/* </Grid> */}
      {/* </AppCardContent> */}
    </Card>
  )
}

export default React.memo(DevelopInputs);
