import React from 'react';
import Failure from './Failure';
import * as Format from '../../Utilities/Format';
const useMessage = (toast, words) => {
    const [message, setMessage] = React.useState('');
    React.useEffect(() => {
        if ((toast === null || toast === void 0 ? void 0 : toast.contentMessage) || (toast === null || toast === void 0 ? void 0 : toast.contentTranslationId)) {
            setMessage(words.join(' '));
        }
        else if ((toast === null || toast === void 0 ? void 0 : toast.contentError) && (toast === null || toast === void 0 ? void 0 : toast.contentError) instanceof Error) {
            const { title, details } = Format.Error.apply(toast.contentError);
            setMessage(React.createElement(Failure, { title: title, details: details }));
        }
    }, [JSON.stringify(toast), JSON.stringify(words)]);
    return message;
};
export default useMessage;
