import React from 'react';
import styled from  'styled-components';
import {ButtonCheckout} from './Button';

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
    font-family: Pacifico, curdive;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 37px;
    height: calc(100% - 300px);
`;



export const ModalItem = ({openItem, setOpenItem}) => {
    
    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) return null;
    return (
        <Overlay id="overlay" onClick={closeModal}>
        <Modal>
        <Banner img={openItem.img}/>
        <TextWrapper>
             <div>
                {openItem.name}
            </div>
            <div>
                {openItem.price.toLocaleString('ru-RU',
                {style: 'currency', currency: 'RUB'})}
            </div>
        </TextWrapper>
        <ButtonCheckout>Добавить</ButtonCheckout>
        </Modal>
    </Overlay>
    )

}



