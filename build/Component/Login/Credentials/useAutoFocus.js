import React from 'react';
const useAutoFocus = (input) => {
    React.useEffect(() => {
        input.current.focus();
    }, [input]);
};
export default useAutoFocus;
