class Axios {

  static request = ({
    client, method, path, type, parameters
  }) => (
    `${client}.${method}<${type}>(${[`'${path}'`, ...parameters].join(', ')})`
  );

}

export default Axios;
