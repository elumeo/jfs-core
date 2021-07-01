import * as Project from './Project';

export type Scope = 'all' | 'scripts' | Project.Scope;

export type File = {
  name: string;
  scope: Scope[];
  run: () => void;
};