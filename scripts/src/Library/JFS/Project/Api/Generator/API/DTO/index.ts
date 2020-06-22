import Render from '../../Render';
import Constant from './Constant';
import Description from './Description';

namespace DTO {
  export type Group = {
    name: string;
    constants: Constant.Description[];
    dtos: Description.DTO[];
  }
}

class DTO {
  static Constant = Constant;
  static Description = Description;

  static group = ({ name, constants, dtos }: DTO.Group) => (
    Render.TypeScript.namespace({
      name,
      what: Render.Text.lines(
        ...[
          ...constants.map(DTO.Constant.generate),
          ...dtos.map((description) => DTO.Description.generate({ ...description }))
        ].map(Render.EcmaScript.export)
      )
    })
  );
}

export default DTO;
