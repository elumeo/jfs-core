import React, { PropsWithChildren } from 'react';
import Translations from 'Utilities/Format/Translations';
import ReactDOMServer from 'react-dom/server';
import Global from 'Store/Reducer/Global';
import { connect } from 'react-redux';

namespace FormattedMessage {
  export type Props<T> = PropsWithChildren<{
    messages?: Translations.Set;
    language?: string;
    id: string;
    values?: T;
    mapValues?: (values: T) => T;
  }>
}

const FormattedMessage = <T, >({
  id,
  values,
  mapValues
}: FormattedMessage.Props<T>): JSX.Element => {
  const mappedValues = mapValues && mapValues(values) || values;
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: Translations.formatMessage(
          { id },
          Object.keys(mappedValues).reduce(
            (markedUpValues, key) => ({
              ...markedUpValues,
              [key]: ReactDOMServer.renderToString(
                <>{mappedValues[key]}</>
              )
            }),
            {}
          )
        )
      }}/>
  );
};

const enhance = connect(
  <T, >(state: Global.State, ownProps: FormattedMessage.Props<T>) => ({
    ...ownProps,
    state: state.Core.Language
  })
);

export default enhance(FormattedMessage);
