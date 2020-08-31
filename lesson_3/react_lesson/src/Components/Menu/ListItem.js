import React from 'react';
import styled from  'styled-components';
import {Currency} from '../Functions/secondaryFunctions';

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const Item = styled.li`
    width: 400px;
    height: 155px;
    background-image: url(${({img}) => img});
    background-position: center;
    background-size: cover;
    margin: 30px 30px 0 0 ;
    font-size: 30px;
    padding: 15px;
    color: #fff;
    z-index: 1;
    position: relative;
    transition: box-shadow .3s ease;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #000;
        opacity: .5;
        z-index: -1;
        transition: opacity .3s ease;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 50px 30px rgba(0,0,0,1);
        &:after {
            opacity: 0;
        }
    }
`;

export const ListItem = ({itemList, setOpenItem}) => (
    <List>
        {itemList.map(item => ( 
            <Item 
                key = {item.id}
                img = {item.img}
                onClick={() => setOpenItem(item)}
                >
                <p>{item.name}</p>
                <p>{Currency(item.price)}</p>
            </Item>
        ))}
    </List>
);