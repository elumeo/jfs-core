export type Parameter = {
  name: string;
  annotation?: {
    type?: string;
    optional?: boolean;
    array?: boolean;
  }
  type?: string;
  optional?: boolean;
  defaultValue?: string;
};