import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/ContextProvider';
import axios from 'axios';
export const Modal = () => {
  const [itemName, setItemName] = useState('');
  let [, , modalTaggle, setModalToggle] = useContext(GlobalContext);
  const addItem = e => {
    e.preventDefault();
    if (itemName !== '') {
      axios
        .post('api/items', {
          name: itemName
        })
        .then(() => setModalToggle(!modalTaggle))
        .catch(err => console.log(err));
    }
  };
  return (
    <div
      className={'modal'}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.281)'
      }}
    >
      <div
        style={{
          padding: '1rem',
          width: '25rem',
          margin: '2rem auto',
          border: '1px solid #111',
          backgroundColor: '#fff',
          color: '#333'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}
        >
          <h4>Add To Shopping List</h4>
          <span onClick={() => setModalToggle(!modalTaggle)}>x</span>
        </div>
        <form onSubmit={addItem}>
          <input
            type="text"
            placeholder={'Add shopping item...'}
            onChange={e => setItemName(e.target.value)}
            value={itemName}
            style={{
              width: '100%',
              fontSize: '1rem',
              padding: '0.5rem 1rem'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#434343',
              color: '#fff',
              border: 'none',
              borderRadius: '0.3rem',
              outline: 'none',
              padding: '0.5rem 1rem',
              marginTop: '1rem'
            }}
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};
