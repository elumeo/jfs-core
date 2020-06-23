import React from 'react';
import './Style.scss';
import International from '../International';
var Format;
(function (Format) {
    Format.response = (_response) => (_response && _response.status && _response.statusText
        ? `${_response.status} ${_response.statusText} // `
        : '');
    Format.config = (_config) => (_config && _config.method && _config.url
        ? `${_config.method.toUpperCase()} ${_config.url.slice(_config.baseURL.length)})`
        : '');
    Format.httpHead = ({ response: _response, config: _config }) => [
        `(http: `,
        Format.response(_response),
        Format.config(_config),
    ].join('');
    Format.httpBody = (_response) => {
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
    };
})(Format || (Format = {}));
export const errorText = ({ response, config, message, name, stack }) => ({
    head: response && config ? Format.httpHead({ response, config }) : name,
    body: response ? Format.httpBody(response) : message + '\n' + stack,
});
const errorContent = ({ contentError }) => {
    const { config } = contentError;
    const { body, head } = errorText(contentError);
    return (React.createElement(International, null, ({ formatMessage }) => (React.createElement("span", { className: 'error-content' },
        React.createElement("u", null,
            formatMessage({ id: 'app.error' }),
            ":\u00A0"),
        body,
        React.createElement("br", null),
        !config ? null : React.createElement("span", { style: { fontSize: 'x-small' } }, head)))));
};
export default errorContent;
//# sourceMappingURL=ErrorContent.js.map