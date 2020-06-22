namespace HTML {
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
}

class HTML {
  static attribute = ({ name, value }: HTML.Attribute) => `${name}${
    value
      ? `="${value}"`
      : ''
  }`;

  static tag = (props: HTML.Tag) => {
    const { name, shortSyntax, children } = props;
    const attributes = props.attributes.map(HTML.attribute).join(' ');
    if (shortSyntax) {
      return `<${props.name} ${attributes}/>`;
    }
    else {
      return [
        `<${name} ${attributes}>`,
        ...children.map(HTML.tag),
        `</${name}>`
      ].join('\n');
    }
  }
}

export default HTML;
