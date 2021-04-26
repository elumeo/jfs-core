export * as DTO from './DTO';
export * as Client from './Client';
import * as DTO from './DTO';
import * as Client from './Client';

export type Description = {
  dtos: DTO.Namespace[];
  clients: Client.Description[];
};