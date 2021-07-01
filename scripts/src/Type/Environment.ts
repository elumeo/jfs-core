import * as Project from './Project';

export type Info = {
  root: string;
  which: 'scripts' | Project.Scope;
  core: string;
  components: string[];
};