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
const ToppinghWrapper = styled.div`
  font-size: 14px;
  line-height: 16px;
  color: #9A9A9A;
`;

export const OrderListItem = ({order}) => (
    <OrederItemStyled>
        <ItemName>
            {order.name}
            <ToppinghWrapper>
                    {order.toppings.map(item => {
                            if (item.checked) {
                                    return ( <span> {item.name} </span>)
                            }
                    })}
            </ToppinghWrapper>
        </ItemName>
        <ItemPrice>{order.count}</ItemPrice>
        <ItemPrice>{Currency(totalPriceItems(order))}</ItemPrice>
        <TrashButton/>
    </OrederItemStyled>
)