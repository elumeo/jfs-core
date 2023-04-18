import { Skeleton } from '@mui/material';
import React from 'react';

const Loading: React.FC = () => <Skeleton variant='text' width={'100%'} height={'100%'} animation={'wave'} />;

export default Loading;
