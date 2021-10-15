import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import styled from 'styled-components';
import { IconButtonProgress } from 'Component/Button/index';
import { IconButtonProgressProps } from 'Component/Button/IconButtonProgress';
import { mapToCircularProgressSize } from 'Component/Button/ButtonProgress';

type StylePropsType = { theme: typeof Definition } & IconButtonProgressProps;

const StyledIconButtonProgress = styled(IconButtonProgress)`
  .button-progress__wrapper {
    position: relative;
    display: inline-block;
  }

  .button-progress__progress {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: ${(props: StylePropsType) => (mapToCircularProgressSize(props.size)/ 2)* - 1};
    margin-left: ${(props: StylePropsType) => (mapToCircularProgressSize(props.size) / 2) * -1};
  }
`;

export default StyledIconButtonProgress;
