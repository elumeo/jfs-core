import React, { PropsWithChildren } from 'react';
import Translations from '../Utilities/Format/Translations';
import ReactDOMServer from 'react-dom/server';
import TranslationsProvider from '../Store/Provider/Translations';

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
    <TranslationsProvider>
      {() => (
        <span
          dangerouslySetInnerHTML={{
            __html: Translations.formatMessage(
              { id },
              Object.keys(mappedValues).reduce(
                (markedUpValues, key) => ({
                  ...markedUpValues,
                  [key]: ReactDOMServer.renderToStaticMarkup(
                    <>{mappedValues[key]}</>
                  )
                }),
                {}
              )
            )
          }}/>
      )}
    </TranslationsProvider>
  );
};

export default FormattedMessage;
