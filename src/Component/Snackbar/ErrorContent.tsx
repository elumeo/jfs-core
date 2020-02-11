import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import './Style.scss';

namespace Format {

    export const response = (response) => (
        response && response.status && response.statusText
            ? `${response.status} ${response.statusText} // `
            : ''
    );

    export const config = (config) => (
        config && config.method && config.url
            ? `${config.method.toUpperCase()} ${config.url.slice(config.baseURL.length)})`
            : ''
    );

    export const httpHead = ({ response, config }) => [
        `(http: `,
        Format.response(response),
        Format.config(config),
    ].join('')

    export const httpBody = (response) => (
        response && response.data
            ? response.data.message && (response.data.id || response.data.id === 0)
                ? `${response.data.message} (${response.data.id})`
                : response.data
            : response.data
    )

}

export const errorText = ({ response, config }) => ({
    head: Format.httpHead({ response, config }),
    body: Format.httpBody(response)
});

export interface IErrorContentProps extends InjectedIntlProps {
  contentError: any;
}

const errorContent: React.FC<IErrorContentProps> = ({ intl: {formatMessage}, contentError }) => {
  const {config} = contentError;
  const {body, head} = errorText(contentError);
  return (
    <span className="error-content">
      <u>{formatMessage({id: 'app.error'})}:</u>&nbsp;{body}
      <br/>
      {
        config
          ? <span style={{fontSize: 'x-small'}}>{head}</span>
          : null
      }
    </span>
  )
};

export default injectIntl(errorContent);
