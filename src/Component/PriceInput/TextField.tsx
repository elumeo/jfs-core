import React from 'react';
import { default as MUITextField, StandardTextFieldProps } from '@material-ui/core/TextField';
import useCurrency from 'Effect/useCurrency';
import { Currency } from 'Utilities/Format';
type Props = {
    currency?: string;
    selectOnFocus?: boolean
} & Partial<StandardTextFieldProps>
const TextField: React.FC<Props> = ({
    currency = useCurrency(),
    value = 0.00,
    selectOnFocus = true,
    ...props
}) => {
    const { getCurrency } = Currency;
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [sanitized, setSanitized] = React.useState(`${value}`)
    const [_focused, setFocused] = React.useState(props?.focused)
    const sanitize = React.useCallback(
        () => {
            setSanitized(parseFloat(sanitized.replace(Currency.replaceAllNonNumericOrSeperatorRegex, '')).toFixed(2))
        },
        [setSanitized, sanitized]
    )
    const display = React.useMemo(
        () =>
            getCurrency(currency, parseFloat(sanitized), true)
        , [sanitized, currency]
    )
    const _onBlur = React.useCallback(
        (e) => {
            setFocused(false);
            sanitize()
            props?.onBlur?.(e)
        },
        [setFocused, setSanitized, sanitized, props?.onBlur]
    )
    const _onFocus: StandardTextFieldProps['onFocus'] = React.useCallback(
        (e) => {
            setFocused(true);
            props?.onFocus?.(e);
        },
        [setFocused, props?.onFocus, selectOnFocus, inputRef]
    )
    React.useEffect(() => {
        if (_focused) {
            if (inputRef.current && selectOnFocus) {
                inputRef?.current?.select()
            }
        }
    }, [_focused])
    React.useEffect(
        () => {
            setSanitized(`${value}`)
        },
        [value]
    )

    return (
        <MUITextField
            inputRef={inputRef}
            value={_focused ? sanitized : display}
            onBlur={_onBlur}
            onFocus={_onFocus}
            {...props}
        />
    );
};
export default TextField;