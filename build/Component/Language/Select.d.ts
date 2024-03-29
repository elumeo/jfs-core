import React from 'react';
import { Language } from '../../Types/Language';
export type Props = {
    value: Language;
    onChange: (next: Language) => void;
};
declare const Select: React.FC<Props>;
export default Select;
