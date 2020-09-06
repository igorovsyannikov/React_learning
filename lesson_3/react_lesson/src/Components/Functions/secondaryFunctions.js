import React from 'react';


export const totalPriceItems = order => {
    const countTopping = order.topping2 && order.topping2.filter(item => item.checked).length;
    const priceTopping = (order.price * 0.1) * countTopping;
    return  (order.price + priceTopping) * order.count;
};

export const Currency = value => {
    return value.toLocaleString('ru-RU',
        {style: 'currency', currency: 'RUB'})
}
