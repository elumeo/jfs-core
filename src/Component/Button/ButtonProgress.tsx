import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import styled from 'styled-components';
import ButtonProgressBase, { ButtonProgressBaseProps, mapToCircularProgressSize } from 'Component/Button/ButtonProgressBase';

type StylePropsType = { theme: typeof Definition } & ButtonProgressBaseProps;

const ButtonProgress = styled<typeof ButtonProgressBase>(ButtonProgressBase)`
  &.button-progress__wrapper {
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

export default ButtonProgress;
