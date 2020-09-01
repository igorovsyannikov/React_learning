import React from 'react';
import styled from  'styled-components';
import {ButtonCheckout} from '../Button';
import {CountItem} from "./CountItem";
import {useCount} from "../hooks/useCount"
import {Currency} from '../Functions/secondaryFunctions';
import {totalPriceItems} from '../Functions/secondaryFunctions';
import {Toppings} from "./Toppings";
import {useToppings} from "../hooks/useTopping";

const Overlay = styled.div`
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
const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    position: relative;
            
`;
const Banner = styled.div`
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
    width: 100%;
`;
const TextWrapper = styled.div`
    font-family: Pacifico, cursive;
    font-size: 30px; 
    display: flex;
    justify-content: space-between;
`;
const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100% - 300px);
  padding: 0 37px 20px;
`;
const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

    const counter = useCount();
    const toppings = useToppings(openItem);


    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }
    const order = {
        ...openItem,
        count: counter.count,
        toppings: toppings.toppings
    };


    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null);
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
        <Modal>
            <Banner img={openItem.img}/>
            <HeaderContent>
                <TextWrapper>
                    <div>
                        {openItem.name}
                    </div>
                    <div>
                        {Currency(openItem.price)}
                    </div>
                </TextWrapper>
                <CountItem {...counter}/>
                {openItem.toppings && <Toppings {...toppings}/>}
                <TotalPriceItem>
                    <span>Цена:</span>
                    <span>{Currency(totalPriceItems(order))}</span>
                </TotalPriceItem>
            </HeaderContent>
            <ButtonCheckout onClick={addToOrder} >Добавить</ButtonCheckout>
        </Modal>
    </Overlay>
    )

}



