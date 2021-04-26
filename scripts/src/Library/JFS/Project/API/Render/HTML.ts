import * as Type from './Type';

export const attribute = ({ name, value }: Type.HTML.Attribute) => `${name}${
  value
    ? `="${value}"`
    : ''
}`;

export const tag = (props: Type.HTML.Tag) => {
  const { name, shortSyntax, children } = props;
  const attributes = props.attributes.map(attribute).join(' ');
  if (shortSyntax) {
    return `<${props.name} ${attributes}/>`;
  }
  else {
    return [
      `<${name} ${attributes}>`,
      ...children.map(tag),
      `</${name}>`
    ].join('\n');
  }
}
