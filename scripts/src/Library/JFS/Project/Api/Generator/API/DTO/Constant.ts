import Render from '../../Render';

namespace Constant {
  export type Description = {
    name: string;
    value: string;
  }
}

class Constant {

  static generate = ({
    name,
    value
  }: Constant.Description) => Render.TypeScript.variable({
    name: `I_${name}`,
    value: `'${value}'`
  });
}

export default Constant;
