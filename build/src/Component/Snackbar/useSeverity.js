import React from 'react';
const useSeverity = (toast) => {
    const [severity, setSeverity] = React.useState('info');
    React.useEffect(() => {
        if (toast === null || toast === void 0 ? void 0 : toast.isSuccess) {
            setSeverity('success');
        }
        else if (toast === null || toast === void 0 ? void 0 : toast.isError) {
            setSeverity('error');
        }
        else {
            setSeverity('info');
        }
    }, [JSON.stringify(toast)]);
    return severity;
};
export default useSeverity;
