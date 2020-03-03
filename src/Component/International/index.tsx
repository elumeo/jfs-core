import React from 'react';
import Translations from '../../Base/Translations';
import { PrimitiveType } from 'intl-messageformat';

interface IInternationalChildrenProps {
  formatMessage: (messageDescriptor: { id: string; }, values?: Record<string, PrimitiveType> | undefined) => string;
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