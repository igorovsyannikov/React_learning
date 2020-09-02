import React from 'react';
import styled from  'styled-components';
import {ButtonCheckout} from '../Button';
import {OrderListItem} from './OrderListItem';
import {totalPriceItems} from '../Functions/secondaryFunctions';
import {Currency} from '../Functions/secondaryFunctions';

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
    z-index: 90;
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
const EmptyList = styled.p`
  text-align: center;
`;

export const Order = ({ orders, setOrders }) => {

    const total = orders.reduce((result, order)=> totalPriceItems(order)+result, 0);
    const totalCounter = orders.reduce((result, order)=> order.count+result, 0);

    function deleteOrderItem(e) {
        //Plan B: e.target.parentElement.remove();
        let ulList = e.target.parentElement.parentElement;
        let clickList = e.target.parentElement;
        function indexCounter() {
            for (let i=0; i<ulList.children.length;i++) {
                if (clickList === ulList.children[i]) {
                    return i;
                }
            }
        }
        const index = indexCounter();
        setOrders(orders.filter(item => item !== orders[index]));

    }

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderStatus>Вы еще ничего не выбрали</OrderStatus>
            <OrderContent>
                { orders.length ?
                    <OrderList>
                        {orders.map(item => <OrderListItem deleteOrderItem={deleteOrderItem} order={item}/>)}
                    </OrderList> :
                    <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{Currency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout >ОФОРМИТЬ</ButtonCheckout>
        </OrderStyled>
    )
}