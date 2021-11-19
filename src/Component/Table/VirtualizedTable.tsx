import styled from 'styled-components';
import Definition from 'Component/App/Stateless/Style/Theme/Definition';
import VirtualizedTableBase, { VirtualizedTableBaseProps } from 'Component/Table/VirtualizedTableBase';

type StylePropsType = { theme: typeof Definition } & VirtualizedTableBaseProps;

const VirtualizedTable = styled<typeof VirtualizedTableBase>(VirtualizedTableBase)`
    border-collapse: separate;

    & .ReactVirtualized__Table__headerRow {
      flip: false;
      padding-right: ${(props: StylePropsType) => props.theme.direction === 'rtl' ? '0 !important' : 'initial'};
      background-color: ${(props: StylePropsType) => props.theme.palette.background.paper};
      overflow: ${(props: StylePropsType) => props.headerOverflow} !important;
    }

    .virtualized-table {
      &__cell {
        flex: 1;
        padding: ${(props: StylePropsType) => props.theme.spacing(1)};
        max-width: 100%;
      }

      &__flex-container {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 100%;
      }

      &__grid {
        outline: none;
      }

      &__row {
        outline: none;
        direction: inherit;

        &--hover {
          &:hover {
            background-color: ${(props: StylePropsType) => props.theme.palette.grey[200]};
          }
        }
      }

      &--click {
        cursor: pointer;
      }

      &--no-click {
        cursor: initial;
      }

      &--visually-hidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        top: 20px;
        width: 1px;
      }
    }
`;

export default VirtualizedTable;
