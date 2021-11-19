import Definition from '../../App/Stateless/Style/Theme/Definition';
import styled from 'styled-components';
import TableCellProductBase, { TableCellProductBaseProps } from './TableCellProductBase';

type StylePropsType = { theme: typeof Definition } & TableCellProductBaseProps;

const TableCellProduct = styled<typeof TableCellProductBase>(TableCellProductBase)`
  .virtualized-table {
    &__bundle-box {
      width: ${(props: StylePropsType) => props.theme.spacing(10)};
      height: ${(props: StylePropsType) => props.theme.spacing(10)};
      text-align: center;
      display: flex;
      align-items: center;
      background-color: ${(props: StylePropsType) => props.theme.palette.grey['100']};
      user-select: none;
      cursor: pointer;
    }

    &__link {
      cursor: pointer;
    }

    &__product-image-wrapper {
      margin-top: auto;
      margin-bottom: auto;
    }

    &__name-outer-wrapper {
      margin-left: ${({theme}: StylePropsType) => theme.spacing(1) + 'px'};
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    &__name-inner-wrapper {
      flex: 1;
    }

    &__name {
      font-weight: ${({theme}: StylePropsType) => theme.typography.fontWeightBold};
      white-space: normal;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${({productType, inStockPool, hasNoTvLock}: StylePropsType) => productType !== null || inStockPool || hasNoTvLock ? 2 : 3};
    }
  }
`;

export default TableCellProduct;
