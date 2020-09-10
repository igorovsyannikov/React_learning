import React from 'react';
import styled from  'styled-components';

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 90;
`;

export const OrderTitle = styled.h2`
    text-align: center;
`;

export const Total = styled.div`
    display: flex;
    margin: 0 30px 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;