import React, { memo } from 'react';
import { StandardTextFieldProps } from '@material-ui/core';
import useCurrency from 'Effect/useCurrency';
import Editor, { Props as EditorProps } from './Editor';
import Display from './Display';

type Props = {
  currency?: string;
  selectOnFocus?: boolean;
  value: React.ReactText;
  min?: number;
  max?: number;
  showDecimals?: boolean
} & Partial<StandardTextFieldProps>;

const PriceField = ({
                      currency = null,
                      value = 0.0,
                      selectOnFocus = true,
                      showDecimals = false,
                      ...props
                    }: Props) => {
  const configCurrency = useCurrency();
  const finalCurrency = currency === null ? configCurrency : currency;
  const [_focused, setFocused] = React.useState(props.focused);
  const _onBlur = React.useCallback<EditorProps['onBlur']>(event => {
    props?.onBlur?.(event);
    setFocused(false);
  }, [setFocused, props?.onBlur]);

  const _onFocus = React.useCallback<StandardTextFieldProps['onFocus']>(event => {
    setFocused(true);
    props?.onFocus?.(event);
  }, [setFocused, selectOnFocus, props?.onFocus]);

  return _focused ? <Editor
    value={value}
    onChange={props.onChange}
    onBlur={_onBlur}
    selectOnFocus={selectOnFocus}
    currency={finalCurrency}
    {...props}
  /> : <Display
    value={value}
    onChange={props.onChange}
    showDecimals={showDecimals}
    onFocus={_onFocus}
    currency={finalCurrency}
    {...props}
  />;
};
export default memo(PriceField);
