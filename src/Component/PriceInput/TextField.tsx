import React from 'react';
import { default as MUITextField, TextFieldProps } from '@material-ui/core/TextField';
import useCurrency from 'Effect/useCurrency';
import { Currency } from 'Utilities/Format';
type Props = {
    currency?: string;
} & TextFieldProps
const TextField: React.FC<Props> = ({
    currency = useCurrency(),
    value = 0.00,
    ...props
}) => {
    const { getCurrency } = Currency;
    const inputRef = React.useRef<HTMLInputElement>()
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
    const _onFocus = React.useCallback(
        (e) => {
            setFocused(true);
            props?.onFocus?.(e);
        },
        [setFocused, props?.onFocus]
    )
    React.useEffect(
        () => {
            setSanitized(`${value}`)
        },
        [value]
    )

    return (
        <MUITextField
            ref={inputRef}
            value={_focused ? sanitized : display}
            onBlur={_onBlur}
            onFocus={_onFocus}
            {...props} />
    );
};
export default TextField;