import React from 'react';
import { Navigator, Location } from 'react-router';
declare type Props = {
    location: Location;
    history: Navigator;
    children?: React.ReactNode;
};
declare const ConnectedRouter: React.FC<Props>;
export default ConnectedRouter;
