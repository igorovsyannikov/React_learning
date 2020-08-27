import React from 'react';
import styled from  'styled-components';
import Trash from '../image/trash.svg';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${Trash});
    background-position: center center;
    background-size: no-repeat;
    cursor: pointer;
`;

const OrederItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
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

export const OrderListItem = () => (
    <OrederItemStyled>
        <ItemName>JS Burdger</ItemName>
        <span>2</span>
        <ItemPrice>750</ItemPrice>
        <TrashButton/>
    </OrederItemStyled>
)