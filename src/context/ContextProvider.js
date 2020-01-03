import React, { useState, createContext } from 'react';
export const GlobalContext = createContext();
export const GlobalProvider = props => {
  let [modalTaggle, setModalToggle] = useState(false);
  const [items, setItems] = useState([]);
  return (
    <GlobalContext.Provider
      value={[items, setItems, modalTaggle, setModalToggle]}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
