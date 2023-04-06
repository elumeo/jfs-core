import React from 'react';
import { Skeleton } from '@mui/lab';

const Loading: React.FC = () => <Skeleton variant='text' width={'100%'} height={'100%'} animation={'wave'} />;

export default Loading;