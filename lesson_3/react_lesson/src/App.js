import React, { Component } from 'react';
import {NavBar} from './Components/NavBar' ;
import {Menu} from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';



function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu/>
        <div className="App">
          <h1>Hello react</h1>
        </div>
    </>
  );
}

export default App;
