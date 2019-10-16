import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';

export const errorText = (contentError) => {
  const {
    config: { method, url, baseURL },
    response, response: { data, data: { message, id }, status, statusText },
  } = contentError;

  return {
    errorMessage: response
      ? (message !== undefined
        ? `${message} (${id})`
        : data)
      : message,
    errorBody: [
      `(http: `,
      `${response ? `${status} ${statusText} // ` : ''}`,
      `${method.toUpperCase()} ${url.slice(baseURL.length)})`
    ].join('')
  }
};

export interface IErrorContentProps extends InjectedIntlProps {
  contentError: any;
}

const errorContent: React.FC<IErrorContentProps> = ({
  intl: { formatMessage },
  contentError
}) => {
  const { config } = contentError;
  const { errorMessage, errorBody } = errorText(contentError);
  return (
    <span>
      <u>{formatMessage({ id: 'app.error' })}:</u>&nbsp;{errorMessage}
      <br />
      {
        config
          ? <span style={{ fontSize: 'x-small' }}>{errorBody}</span>
          : null
      }
    </span>
  )
};

export default injectIntl(errorContent);
