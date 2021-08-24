import React from 'react';

const MINIMUM_AUTO_HIDE_DURATION = 2000;
const READ_TIME_WORDS_PER_MILLISECOND = 0.00375;
const READ_TIME_MILLISECONDS_PER_WORD = 1 / READ_TIME_WORDS_PER_MILLISECOND;

const useAutoHideDuration = (words: string[]): number => {
  const [autoHideDuration, setAutoHideDuration] = React.useState(
    MINIMUM_AUTO_HIDE_DURATION,
  );

  React.useEffect(() => {
    const next = words.length * READ_TIME_MILLISECONDS_PER_WORD;
    setAutoHideDuration(
      next >= MINIMUM_AUTO_HIDE_DURATION ? next : MINIMUM_AUTO_HIDE_DURATION,
    );
  }, [JSON.stringify(words)]);

  return autoHideDuration;
};

export default useAutoHideDuration;
