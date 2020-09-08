import React from 'react';
import styled from  'styled-components';
import {ButtonCheckout} from '../Button';
import {OrderListItem} from './OrderListItem';
import {totalPriceItems} from '../Functions/secondaryFunctions';
import {Currency} from '../Functions/secondaryFunctions';
import {projection} from '../Functions/secondaryFunctions';


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

const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    toppings:['topping2', arr => arr.length > 0 ? arr.filter(obj => obj.checked).map(obj => obj.name) : 'No toppings'],
    choices: ['choices3', item => item ? item : 'No choices'],
}


export const Order = ({ orders, setOrders, setOpenItem, authentificaion, login, firebaseDatabase }) => {

    const dataBase = firebaseDatabase();

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));
        dataBase.ref('orders').push().set({
            nameClient: authentificaion.displayName,
            email: authentificaion.email,
            order: newOrder
        });
        setOrders([]);
    }

    const total = orders.reduce((result, order)=> totalPriceItems(order)+result, 0);
    const totalCounter = orders.reduce((result, order)=> order.count+result, 0);

    const deleteOrderItem = index => {
        const newOrder = orders.filter((item,i) => index !== i);
        setOrders(newOrder);
        // setOrders(orders.filter(item => item !== orders[index]));
    }

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderStatus>Вы еще ничего не выбрали</OrderStatus>
            <OrderContent>
                { orders.length ?
                    <OrderList>
                        {orders.map((order, index) => <OrderListItem
                            key={index}
                            order={order}
                            deleteOrderItem={deleteOrderItem}
                            index={index}
                            setOpenItem={setOpenItem}
                        />)}
                    </OrderList> :
                    <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{Currency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout onClick={() => {
                if (authentificaion) {
                    sendOrder();
                }
                else {
                    login();
                }
            }}>ОФОРМИТЬ</ButtonCheckout>
        </OrderStyled>
    )
}