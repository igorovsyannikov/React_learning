import React from 'react';
import styled from  'styled-components';
import {ListItem} from './ListItem';
import {Banner} from './Banner';
import {useFetch} from '../hooks/useFetch'
import loaderSrc from '../../image/loader.gif'

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-left: 380px;
`;
const SectionMenu = styled.section`
    padding: 30px;
`;
const Loader = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 9000;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Menu = ({setOpenItem}) => {


    const res = useFetch();
    const dbMenu = res.response;


    return (
        <MenuStyled>
            <Banner/>
            { res.response ?
                <>
            <SectionMenu>
                <h2>Бургеры</h2>
                <ListItem
                    itemList={dbMenu.burger}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
            <SectionMenu>
                <h2>Закуски / Напитки</h2>
                <ListItem
                    itemList={dbMenu.other}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
                </> : res.error ?
                    <div>Sorry, we will fix it soon...</div> :
                    <Loader>
                        <div>
                            <img src={loaderSrc} alt="loader"/>
                            <div>Loading...</div>
                        </div>
                    </Loader>

            }
        </MenuStyled>
    )
}