export type Attribute = {
  name: string;
  value: string;
}

export type Tag = {
  name: string;
  attributes: Attribute[];
  shortSyntax: boolean;
  children: Tag[];
}