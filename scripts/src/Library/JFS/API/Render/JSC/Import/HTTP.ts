import * as EcmaScript from '../../EcmaScript';
import * as Text from '../../Text';

export const Client = (core: boolean) => (
  core
    ? './Client'
    : '@elumeo/jfs-core/build/API/JSC/Client'
);

export default (core: boolean) => Text.lines(
  EcmaScript.import({ what: '{ AxiosResponse }', from: 'axios' }),
  EcmaScript.import({ what: '{ JscClient }', from: Client(core) }),
);
