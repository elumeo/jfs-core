import React from 'react';
import Translations from '../../Utilities/Format/Translations';
import { PrimitiveType } from 'intl-messageformat';

export type FormatMessage = (
  messageDescriptor: { id: string; },
  values?: Record<string, PrimitiveType> | undefined
) => string;

interface IInternationalChildrenProps {
  formatMessage: FormatMessage;
}

interface IInternationalProps {
  children: (internationalChildrenProps: IInternationalChildrenProps) => JSX.Element;
}

const International: React.FC<IInternationalProps> = ({
  children
}) => (
  <>
    {children({
      formatMessage: Translations.formatMessage
    })}
  </>
);

export default International;
