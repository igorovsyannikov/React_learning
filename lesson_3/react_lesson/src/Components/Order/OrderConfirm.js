import React from 'react';
import styled from  'styled-components';
import {Overlay} from "../Style/StyledComponents";
import { OrderTitle } from '../Style/StyledComponents';
import { Total } from "../Style/StyledComponents";
import {TotalPrice} from "../Style/StyledComponents";
import {ButtonCheckout} from '../Button';
import {projection} from '../Functions/secondaryFunctions';
import {totalPriceItems} from '../Functions/secondaryFunctions';
import {Currency} from '../Functions/secondaryFunctions';


const rulesData = {
    itemName: ['name'],
    price: ['price'],
    count: ['count'],
    toppings:['topping2', arr => arr.length > 0 ? arr.filter(obj => obj.checked).map(obj => obj.name) : 'No toppings'],
    choices: ['choices3', item => item ? item : 'No choices'],
}

const sendOrder = (dataBase, orders, authentificaion) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
        nameClient: authentificaion.displayName,
        email: authentificaion.email,
        order: newOrder
    });
}

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;


export const OrderConfirm = ({
    orders,
    setOrders,
    authentificaion,
    setOpenOrderConfirm,
    firebaseDatabase
                             }) => {
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order)=> totalPriceItems(order)+result, 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentificaion.displayName}</OrderTitle>
                <Text>Осталось только подтвердить заказ</Text>
                <Total>
                    <span>Итого:</span>
                    <TotalPrice>{Currency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={() => {
                    sendOrder(dataBase, orders, authentificaion);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>
                    Подтвердить
                </ButtonCheckout>
            </Modal>
        </Overlay>
    )
}