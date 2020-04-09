import React from 'react';
import './Style.scss';
import International from '../International';
import { AxiosError } from 'axios';

namespace Format {

  export const response = (_response) => (
    _response && _response.status && _response.statusText
      ? `${_response.status} ${_response.statusText} // `
      : ''
  );

  export const config = (_config) => (
    _config && _config.method && _config.url
      ? `${_config.method.toUpperCase()} ${_config.url.slice(_config.baseURL.length)})`
      : ''
  );

  export const httpHead = ({ response: _response, config: _config }) => [
    `(http: `,
    Format.response(_response),
    Format.config(_config),
  ].join('');

  export const httpBody = (_response) => {
    if (!_response) {
      return 'NO_ERROR_RESPONSE';
    }
    if (!_response.data) {
      return '';
    }
    if (typeof _response.data.message != 'string' || !_response.data.id || _response.data.id === 0) {
      return _response.data.toString();
    }
    return `${_response.data.message} (${_response.data.id})`;
  }

}

export const errorText = ({ response, config, message, name, stack }) => ({
  head: response && config ? Format.httpHead({ response, config }) : name,
  body: response ? Format.httpBody(response) : message + '\n' + stack,
});

export interface IErrorContentProps {
  contentError: Error | AxiosError | any;
}

const errorContent: React.FC<IErrorContentProps> = ({ contentError }) => {
  const { config } = contentError;
  const { body, head } = errorText(contentError);
  return (
    <International>
      {({ formatMessage }) => (
        <span className='error-content'>
          <u>{formatMessage({ id: 'app.error' })}:&nbsp;</u>
          {body}
          <br/>
          {!config ? null : <span style={{ fontSize: 'x-small' }}>{head}</span>}
        </span>
      )}
    </International>
  )
};

export default errorContent;
