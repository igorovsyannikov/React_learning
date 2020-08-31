import React from 'react';


export const totalPriceItems = order => order.price * order.count;

export const Currency = item => {
    return item.toLocaleString('ru-RU',
        {style: 'currency', currency: 'RUB'})
}

