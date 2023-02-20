import * as React from 'react';
import { Button, Card, Grid, InputAdornment, MenuItem } from '@mui/material';
import PriceInput from 'Component/PriceInput';
import { useNavigate, useParams } from 'react-router-dom';
import { parse } from 'Utilities/Format/Number';
import DatePicker, { type DatePickerProps } from './DatePicker';
import TextFieldClearButton from './TextFieldClearButton';
import { AppCardContent, AppCardHeader } from './Card';
import { Fingerprint, Refresh, Search, Warning } from '@mui/icons-material';
import useQueryParams from 'Effect/useQueryParams';
import ClearButton, { type SelectProps as SelectClearButtonProps } from 'Component/SelectClearButton/SelectClearButton';
import ButtonProgress from 'Component/Button/ButtonProgress'
import { IconButtonProgress } from './Button';
const textFieldInputProps = { startAdornment: <InputAdornment position={'start'}><Search /></InputAdornment> };
const DevelopInputs: React.FC = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const { id } = useParams()
  const [{ value, dateStart, dateEnd }, update, urlSearchParams] = useQueryParams<{ value?: string, dateStart?: string, dateEnd?: string }>({})
  const [multipleSelectValue, setMultipleSelectValue] = React.useState<string[]>(['test 1']);
  const [selectValue, setSelectValue] = React.useState<string>('test 1');
  const handleMultipleSelectUpdate: SelectClearButtonProps<true>['onChange'] = React.useCallback(_value => setMultipleSelectValue(_value as string[]), [setMultipleSelectValue]);
  const testDatePickerdateStart = React.useMemo(() => dateStart ? new Date(dateStart) : null, [dateStart])
  const testDatePickerdateEnd = React.useMemo(() => dateEnd ? new Date(dateEnd) : null, [dateEnd])
  const setTestDatePickerValue: DatePickerProps<true /*  = isRangePicker */>['onChange'] = React.useCallback((dates) => {
    const [start, end] = dates;
    update({
      dateStart: start?.toJSON?.(),
      dateEnd: end?.toJSON?.(),
    })

  }, [update])

  const handleTextFieldUpdate = (newVal: string) => {
    update({ value: newVal })

  }
  return (
    <Card >
      <AppCardHeader title={'Test'} titleIcon={<Warning color={'secondary'} />} isLoading={loading}
        // eslint-disable-next-line no-console
        onRefresh={console.log}
        headerActions={<Button variant='contained' onClick={() => setLoading(prev => !prev)} color='secondary'>test</Button>} />
      <AppCardContent>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonProgress inProgress={loading} variant='contained' color='primary' >test</ButtonProgress>
            <ButtonProgress size='small' inProgress={loading} variant='contained' color='primary' startIcon={<Fingerprint />} >test</ButtonProgress>
            <IconButtonProgress inProgress={loading} size='small' color='secondary'><Refresh fontSize='small' /></IconButtonProgress>
            <IconButtonProgress inProgress={loading} color='secondary'><Refresh fontSize='medium' /></IconButtonProgress>
            <IconButtonProgress inProgress={loading} size='large' color='secondary'><Refresh fontSize='large' /></IconButtonProgress>
          </Grid>
          <Grid item>
            <DatePicker
              onChange={setTestDatePickerValue}
              textFieldProps={
                {
                  label: 'Datepicker',
                  name: 'datepicker__textfield',
                  id: 'datepicker__textfield',
                  InputProps: textFieldInputProps
                }
              }
              startDate={testDatePickerdateStart}
              endDate={testDatePickerdateEnd}
              selectsRange
              name={'datepicker'}
            />
          </Grid>
          <Grid item>
            <PriceInput
              value={parse(id)}
              label={'clearable price input'}
              onChange={event => {
                navigate({ pathname: `/start/${event.target.value ?? ''}`, search: urlSearchParams.toString() })

              }}
            />
          </Grid>

          <Grid item display='flex' gap={1}>
            <TextFieldClearButton
              label={'Textfield outlined'}
              onChange={e => handleTextFieldUpdate(e.target.value)}
              value={value}
              variant={'outlined'}
            />
            <TextFieldClearButton
              label={'Textfield filled'}
              onChange={e => handleTextFieldUpdate(e.target.value)}
              value={value}
              variant={'filled'}
            />
            <TextFieldClearButton
              label={'Textfield default standard'}
              onChange={e => handleTextFieldUpdate(e.target.value)}
              value={value}
              variant='standard'
            />
          </Grid>
          <Grid item xs={4}>
            <ClearButton
              variant='outlined'
              label={'Single select'}
              value={value}
              onChange={handleTextFieldUpdate}
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
          <Grid item xs={4}>
            <ClearButton
              // fullWidth
              label={'Multiple select'}
              value={multipleSelectValue}
              onChange={handleMultipleSelectUpdate}
              // loading
              // clearButtonSize={'small'}
              multiple
              // maxValuesToDisplayInInput={2}

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
          <Grid item xs={4}>
            <ClearButton
              multiple
              value={multipleSelectValue}
              onChange={handleMultipleSelectUpdate}
              renderAsChip={false}
            >
              <MenuItem value={'custom1'} >custom menuitems</MenuItem>
              <MenuItem value={'custom2'}>als  children</MenuItem>
            </ClearButton>
          </Grid>
        </Grid>
      </AppCardContent>
    </Card>
  )
}
export default DevelopInputs
