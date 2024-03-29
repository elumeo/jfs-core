import React from 'react';

const useAutoFocus = (
  input: React.MutableRefObject<HTMLInputElement>,
): void => {
  React.useEffect(() => {
    input.current.focus();
  }, [input]);
};

export default useAutoFocus;
