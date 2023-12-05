import React from 'react';
import { InputAdornment } from '@mui/material';
import TextFieldClearButton, { type Props as TextFieldProps } from 'Component/TextField'
import useCurrency from 'Effect/useCurrency';
import usePriceFieldAdornment from 'Effect/usePriceFieldAdornment';
import { Currency } from 'Utilities/Format';
import { createIntl, createIntlCache } from 'react-intl';

type Props = {
  currency?: string;
  selectOnFocus?: boolean;
  value: number;
  min?: number;
  max?: number;
  showDecimals?: boolean
} & TextFieldProps

const PriceField: React.FC<Props> = ({
                                       onChange,
                                       currency = 'eur',
                                       value = 0.0,
                                       selectOnFocus = true,
                                       showDecimals = true,
                                       min,
                                       max,
                                       ...props
                                     }) => {
  // const { formatNumberToParts, formatNumber } = useIntl();
  const cache = createIntlCache();
  const { formatNumberToParts, formatNumber } = createIntl({
    locale: 'de-DE',
    // locale: 'en-US',
    messages: {},
  }, cache);
  const currencyDecimalSeparator = formatNumberToParts(0.1)[1].value;
  const currencyGroupSeparator = formatNumberToParts(1000)[1].value;
  console.log('locale currency separators', currencyDecimalSeparator, currencyGroupSeparator);
  const configCurrency = useCurrency();
  const ref = React.useRef(null)
  const finalCurrency = currency ?? configCurrency;
  const [rawValue, setRawValue] = React.useState<number>(null);
  const [displayValue, setDisplayValue] = React.useState<string>(null);
  const [isNegativeValue, setIsNegativeValue] = React.useState(false);
  // const display = rawValue !== null ? formatNumber(rawValue, { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 }) : '';
  // const display = value === ''
  //   ? ''
  //   : Currency.getCurrency(
  //     finalCurrency,
  //     isNaN(Number(value))
  //       ? 0
  //       : Number(value),
  //     true,
  //     false,
  //     showDecimals
  //   )
  const [adornmentType, adornmentPosition, styles] = usePriceFieldAdornment(finalCurrency);
  const [_focused, setFocused] = React.useState(props.focused);
  React.useEffect(() => {
    if (selectOnFocus && _focused) {
      ref.current.select();
    }
  }, [_focused, selectOnFocus]);
  // const _onFocus: TextFieldProps['onFocus'] = React.useCallback(event => {
  //   setFocused(true);
  //   props?.onFocus?.(event);
  // }, [props?.onFocus, setFocused, selectOnFocus]);

  // const _onBlur: TextFieldProps['onBlur'] = React.useCallback(event => {
  //   props?.onBlur?.(event);
  //   setFocused(false);
  //   if (isNaN(parseFloat(value as string))) {
  //     props.onChange({ ...event, target: { ...event.target, value: null } } as React.ChangeEvent<HTMLInputElement>)
  //   }
  // }, [setFocused, props?.onBlur, value]);

  const _onChange: TextFieldProps['onChange'] = React.useCallback((event) => {
    const caret = event.target.selectionStart;
    const target = event.target;
    const isNegativeValue = event.target.value.startsWith('-');
    const numberOfGroupSeparatorsBeforeChange = formatNumberToParts(rawValue).filter(({ type }) => type === 'group').length;
    // @ts-ignore
    if(event.nativeEvent.data === currencyDecimalSeparator && event.target.value.indexOf(currencyDecimalSeparator) !== -1) {
      window.requestAnimationFrame(() => {
        console.log({ numberOfGroupSeparatorsBeforeChange, numberOfGroupSeparatorsAfterChange });
        const newCaretPosition = numberOfGroupSeparatorsAfterChange > numberOfGroupSeparatorsBeforeChange
          ? caret + 1
          : numberOfGroupSeparatorsAfterChange < numberOfGroupSeparatorsBeforeChange
            ? caret - 1
            : caret;
        target.selectionStart = newCaretPosition;
        target.selectionEnd = newCaretPosition;
      });
      return;
    }
    const cleanedValue = event.target.value
      .replace(/[a-zA-Z+-]/g, '')
      .replace(currencyGroupSeparator, '')
      .replace(currencyDecimalSeparator+currencyDecimalSeparator, '.')
      .replace(currencyDecimalSeparator, '.')
    ;
    if (cleanedValue === '') {
      setIsNegativeValue(false);
      setRawValue(null);
      setDisplayValue(null);
      return;
    } else if (cleanedValue === '-') {
      setIsNegativeValue(true);
      setRawValue(null);
      setDisplayValue('-');
      return;
    }
    const _rawValue = +cleanedValue;
    const numberOfGroupSeparatorsAfterChange = formatNumberToParts(_rawValue).filter(({ type }) => type === 'group').length;
    const _displayValue = formatNumber(_rawValue, { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2 });
    console.log('values', { ori: event.target.value, cleanedValue, _rawValue, _displayValue });
    setIsNegativeValue(isNegativeValue);
    setRawValue(_rawValue);
    setDisplayValue(_displayValue);
    window.requestAnimationFrame(() => {
      console.log({ numberOfGroupSeparatorsBeforeChange, numberOfGroupSeparatorsAfterChange });
      const newCaretPosition = numberOfGroupSeparatorsAfterChange > numberOfGroupSeparatorsBeforeChange
        ? caret + 1
        : numberOfGroupSeparatorsAfterChange < numberOfGroupSeparatorsBeforeChange
          ? caret - 1
          : caret;
      target.selectionStart = newCaretPosition;
      target.selectionEnd = newCaretPosition;
    });
    // onChange?.(
    //   {
    //     ...event, target: {
    //       ...event.target,
    //       value: `${FormatNumber.parse(_value, min, max)}`
    //     }
    //   });
  }, [onChange, min, max, displayValue]);
  const _InputProps = React.useMemo(() => (
      {
        [adornmentType]: <InputAdornment position={adornmentPosition} sx={styles}>{Currency.getCurrencySign(currency)}</InputAdornment>,
        ...props?.InputProps,
      }),
    [adornmentPosition, adornmentType, currency, props?.InputProps, styles],
  );
  console.log('PriceField', { rawValue, displayValue });
  return (
    <TextFieldClearButton
      inputRef={ref}
      value={displayValue}
      InputProps={_InputProps}
      onChange={_onChange}
      onReset={() => console.log('onReset')}
      onBeforeInputCapture={() => console.log('onBeforeInputCapture')}
      onChangeCapture={() => console.log('onChangeCapture')}
      onCompositionEnd={() => console.log('onCompositionEnd')}
      onCompositionEndCapture={() => console.log('onCompositionEndCapture')}
      // onFocus={_onFocus}
      // onBlur={_onBlur}
      {...props}
    />)
};
export default PriceField;
