import React, { Component } from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import  {NavBar } from './Components/NavBar/NavBar' ;
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import {ModalItem} from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from "./Components/hooks/useOpenItem";
import { useOrders} from "./Components/hooks/useOrders";
import { useAuth } from "./Components/hooks/useAuth";
import { useTitle } from "./Components/hooks/useTitle";
import { useOrderConfirm } from "./Components/hooks/useOrderConfirm";
import { OrderConfirm } from "./Components/Order/OrderConfirm";
import { Context } from "./Components/Functions/context";

const firebaseConfig = {
    apiKey: "AIzaSyCOwYpceJPabxP5YV1bRmHsgFYHmXs9ueM",
    authDomain: "reactlesson-4a009.firebaseapp.com",
    databaseURL: "https://reactlesson-4a009.firebaseio.com",
    projectId: "reactlesson-4a009",
    storageBucket: "reactlesson-4a009.appspot.com",
    messagingSenderId: "509202363354",
    appId: "1:509202363354:web:ff5147d72cb30aea5bc6e3"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const authFirebase = firebase.auth;
  const auth = useAuth(authFirebase);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
        auth,
        openItem,
        orders,
        orderConfirm,
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/>
        { openItem.openItem && <ModalItem/> }
        { orderConfirm.openOrderConfirm &&
            <OrderConfirm
                firebaseDatabase={firebase.database}/>}
      <div className="App">
        <h1>Hello react</h1>
      </div>
    </Context.Provider>
  );
}

export default App;
