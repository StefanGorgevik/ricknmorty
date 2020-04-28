import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Characters from './components/Characters/Characters'

import { GlobalContextProvider } from './context/GlobalState'
function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Header />
        <Characters />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
