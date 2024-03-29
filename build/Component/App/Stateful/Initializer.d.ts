import React from 'react';
export type Props = {
    packageJSON: Record<string, unknown>;
    translations: Record<string, Record<string, string>>;
};
declare const Initializer: React.FC<Props>;
export default Initializer;
