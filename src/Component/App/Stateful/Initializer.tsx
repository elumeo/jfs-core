import React from 'react';
import { Box, CircularProgress, SxProps } from '@mui/material';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'Store/Action';
const sx: SxProps = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export type Props = {
  packageJSON: Record<string, unknown>;
  translations: Record<string, Record<string, string>>;
};

const Initializer: React.FC<Props> = ({
  packageJSON, translations
}) => {
  const dispatch = useDispatch();
  React.useEffect(
    () => {
      dispatch(initializeApp({
        packageJson: packageJSON,
        translations
      }));
    },
    []
  );

  return (
    <Box sx={sx}>
      <CircularProgress />
    </Box>
  );
}

export default Initializer;
