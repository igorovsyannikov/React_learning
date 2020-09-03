import React, { Component } from 'react';
import  {NavBar } from './Components/NavBar/NavBar' ;
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import {ModalItem} from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from "./Components/hooks/useOpenItem";
import { useOrders} from "./Components/hooks/useOrders";

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} {...openItem}/>
      <Menu {...openItem}/>
        { openItem.openItem && <ModalItem {...openItem} {...orders}/> }
      <div className="App">
        <h1>Hello react</h1>
      </div>
    </>
  );
}

export default App;
