import React from 'react';

const useError = (value: string): boolean => {
  const initial = React.useRef(true);
  const [error, setError] = React.useState(false);

  React.useEffect(
    () => {
      setError(!initial.current && value === '');
      initial.current = false;
    },
    [value]
  );

  return error;
}

export default useError;