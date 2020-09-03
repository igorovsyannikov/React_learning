import React from 'react';
import styled from  'styled-components';
import Trash from '../../image/trash.svg';
import {totalPriceItems} from '../Functions/secondaryFunctions';
import {Currency} from '../Functions/secondaryFunctions';


const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${Trash});
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
`;
const OrederItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    align-items: center;
`;
const ItemName = styled.span`
    flex-grow: 1;
`;
const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;
const ToppingWrapper = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #9A9A9A;
`;

export const OrderListItem = ({order, index, deleteOrderItem, setOpenItem }) => {

    const checkedToppings = order.topping2.filter(item => item.checked).map(item => item.name).join(', ')

    return (
        <OrederItemStyled>
            <ItemName onClick={() => setOpenItem({...order, index})}>
                {order.name}
                {order.choices3}
                {checkedToppings && <ToppingWrapper>
                    Допы:
                    {checkedToppings}
                </ToppingWrapper> }
            </ItemName>
            <ItemPrice>{order.count}</ItemPrice>
            <ItemPrice>{Currency(totalPriceItems(order))}</ItemPrice>
            <TrashButton onClick={() => deleteOrderItem(index)} />
        </OrederItemStyled>
    )
}
