import React, { useContext } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { ShoppingList } from './components/ShoppingList';
import { GlobalContext } from './context/ContextProvider';
import { Modal } from './components/Modal';
function App() {
  const [, , modalTaggle] = useContext(GlobalContext);
  return (
    <div className="App" style={{ width: '100%' }}>
      {modalTaggle ? <Modal /> : ''}

      <NavBar />
      <ShoppingList />
    </div>
  );
}

export default App;
