export const request = ({
  client, method, path, type, parameters
}) => (
  `${client}.${method}<${type}>(${[`'${path}'`, ...parameters].join(', ')})`
);
