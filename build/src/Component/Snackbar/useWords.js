import React from 'react';
import { useIntl } from 'react-intl';
import * as Format from '../../../Utilities/Format';
const useWords = (toast) => {
    const intl = useIntl();
    const [words, setWords] = React.useState([]);
    React.useEffect(() => {
        if (toast === null || toast === void 0 ? void 0 : toast.contentMessage) {
            const next = toast.contentMessage.split(' ');
            setWords(next);
        }
        else if (toast === null || toast === void 0 ? void 0 : toast.contentTranslationId) {
            const id = toast.contentTranslationId;
            const values = toast.contentTranslationValues || {};
            const next = (intl
                .formatMessage({ id }, values)
                .split(' '));
            setWords(next);
        }
        else if ((toast === null || toast === void 0 ? void 0 : toast.contentError) && (toast === null || toast === void 0 ? void 0 : toast.contentError) instanceof Error) {
            const { title, details } = Format.Error.apply(toast.contentError);
            const next = [...title.split(' '), ...details.split(' ')];
            setWords(next);
        }
    }, [JSON.stringify(toast)]);
    return words;
};
export default useWords;
