export * as DTO from './DTO';
export * as Client from './Client';
export * as Type from './Type';

import * as DTO from './DTO';
import * as Client from './Client';
import * as Render from '../Render';

export const adapt = (description: Render.Type.JSC.Description) => ({
  ...description,
  dtos: DTO.namespaces(description.dtos),
  clients: Client.namespaces(description.clients)
});