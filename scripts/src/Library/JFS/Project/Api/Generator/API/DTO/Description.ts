import Render from '../../Render';
import Text from 'Library/Text';

namespace Description {
  export type DTO = {
    name: string;
    generics: string[];
    properties: {
      [property: string]: {
        type: string;
        array: boolean;
        generics: string[];
      };
    };
  };
}

class Description {
  static property = ({ name, type, array, generics }: {
    name: string;
    type: string;
    generics: string[];
    array: boolean;
  }) => (
    `${name}: ${type}${
      generics && generics.length
        ? `<${generics.join(', ')}>`
        : ''
    }${array ? '[]' : ''};`
  );

  static generate = ({
    name,
    generics,
    properties
  }: Description.DTO) => Render.TypeScript.interface({
    name: `I${name.substring(name.lastIndexOf('\\') +1)}`,
    generics,
    lines: [
      ...Object.keys(properties).map(
        key => Description.property({
          ...properties[key],
          name: key
        })
      )
    ]
  });
}

export default Description;
