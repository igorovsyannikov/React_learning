import React from 'react';
import styled from  'styled-components';
import {ButtonCheckout} from './Button';
import {OrderListItem} from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    background-color: #fff;
    min-width: 380px;
    height: calc(100% - 80px);   
    box-shadow: 3px 4px 5px rgba(0,0,0,.25);
    padding: 20px; 
    display: flex;
    flex-direction: column;
`;

const OrderTitle = styled.h2`
    text-align: center;

`;

const OrderContent = styled.div`
    flex-grow: 1;
`;
const OrderList = styled.ul``;
const Total = styled.div`
    display: flex;
    margin: 0 30px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const OrderStatus = styled.span`
    font-family: Roboto, sans-serif;
    font-size: 21px;
    margin-bottom: 30px;
    text-align: center;
`;

export const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderStatus>Вы еще ничего не выбрали</OrderStatus>
            <OrderContent>
                <OrderList>
                    <OrderListItem/>
                    <OrderListItem/>
                    <OrderListItem/>
                </OrderList>
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>850 ₽</TotalPrice>
            </Total>
            <ButtonCheckout>ОФОРМИТЬ</ButtonCheckout>
        </OrderStyled>
    )
}