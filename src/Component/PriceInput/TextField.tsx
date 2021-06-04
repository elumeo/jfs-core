import React from 'react';
import { default as MUITextField, TextFieldProps } from '@material-ui/core/TextField';
import { useIntl } from 'react-intl';
import useCurrency from 'Effect/useCurrency';
import { Currency } from 'Utilities/Format';
type Props = {
    currency?: string;
} & TextFieldProps
const TextField: React.FC<Props> = ({
    currency = useCurrency(),
    value = 0.00,
    ...rest
}) => {
    const { getCurrency } = Currency;
    const inputRef = React.useRef<HTMLInputElement>()
    const [sanitized, setSanitized] = React.useState(`${value}`)
    const [_focused, setFocused] = React.useState(rest.focused)
    const sanitize = React.useCallback(() => {
        setSanitized(parseFloat(sanitized.replace(Currency.replaceAllNonNumericOrSeperatorRegex, '')).toFixed(2))
    }, [setSanitized, sanitized])
    const display = React.useMemo(() =>
        getCurrency(currency, parseFloat(sanitized), true)
        , [sanitized, currency])
    const _onBlur = React.useCallback((e) => {
        setFocused(false);
        sanitize()
        rest?.onBlur?.(e)
    }, [setFocused, setSanitized, sanitized,rest?.onBlur])
    const _onFocus = React.useCallback((e) => {
        setFocused(true);
        rest?.onFocus?.(e);
    }, [setFocused,rest?.onFocus])
    React.useEffect(() => {
        setSanitized(`${value}`)
    }, [value])

    return (
        <MUITextField
            ref={inputRef}
            value={_focused ? sanitized : display}
            onBlur={_onBlur}
            onFocus={_onFocus}
            {...rest} />
    );
};
export default TextField;