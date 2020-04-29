import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Characters from './components/Characters/Characters'

import { GlobalContextProvider } from './context/GlobalState'
import { ThemeContextProvider } from './context/ThemeContext';
import Background from './modal/Background';
function App() {


  return (
    <ThemeContextProvider>
      <GlobalContextProvider>
        <Background>
          <div className="App" >
            <Header />
            <Characters />
          </div>
        </Background>
      </GlobalContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
