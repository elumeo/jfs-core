import * as Method from './Method';
import * as Callback from './Callback';

export * as Method from './Method';
export * as Callback from './Callback';

export type Description = {
  name: string;
  methods: Method.Description[];
};

export type Request = (props: {
  parameters: Callback.Parameter[];
  protocol: Method.Protocol;
  resource: Method.Resource;
  generics?: string;
}) => string;

export type Stream = (props: {
  parameters: Callback.Parameter[];
  protocol: Method.Protocol;
  resource: Method.Resource;
  generics?: string;
}) => string;

export type Variable = (props: Method.Description) => string;

export type Namespace = (description: Description) => string;