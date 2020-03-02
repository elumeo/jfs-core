import React from 'react';
import { connect } from 'react-redux';
import { ICoreRootReducer } from '../../Store/Reducer';
import { ITranslations } from '../../Base/Translations';
import IntlMessageFormat, { PrimitiveType } from 'intl-messageformat';

interface IInternationalChildrenProps {
  formatMessage: (messageDescriptor: { id: string; }, values?: Record<string, PrimitiveType> | undefined) => string;
}

interface IInternationalProps {
  language?: string;
  messages?: ITranslations;
  children: (internationalChildrenProps: IInternationalChildrenProps) => JSX.Element;
}

const International: React.FC<IInternationalProps> = ({
  language,
  messages,
  children
}) => (
  <>
    {children({
      formatMessage: ({ id }, values) => {
        const message = new IntlMessageFormat(messages[language][id]);
        return message.format(values);
      }
    })}
  </>
);

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IInternationalProps
): IInternationalProps => ({
  ...ownProps,
  language: state.languageReducer.language,
  messages: state.languageReducer.messages
});

const enhance = connect(mapStateToProps);

export default enhance(International);