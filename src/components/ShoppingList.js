import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../context/ContextProvider';
import { ListItem } from './ListItem';
import Axios from 'axios';
export const ShoppingList = () => {
  const [items, setItems] = useContext(GlobalContext);
  let [, , modalTaggle, setModalToggle] = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    let mounted = true;
    const fetchData = async () => {
      const res = await Axios.get('api/items');
      if (mounted) {
        setItems(res.data);
      }
    };
    fetchData();
    setLoading(false);
    return () => {
      mounted = false;
    };
  }, [items, setItems]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div
      className={'shopping-list'}
      style={{
        width: '80%',
        margin: '2rem auto 0rem auto'
      }}
    >
      <button
        style={{
          backgroundColor: '#434343',
          color: '#fff',
          border: 'none',
          borderRadius: '0.3rem',
          outline: 'none',
          padding: '0.5rem 1rem',
          marginBottom: '2rem'
        }}
        onClick={() => setModalToggle(!modalTaggle)}
      >
        Add Item
      </button>
      {items.map(item => (
        <ListItem key={item._id} item={item} />
      ))}
    </div>
  );
};
