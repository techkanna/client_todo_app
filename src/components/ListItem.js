import React from 'react';

export const ListItem = ({ item }) => {
  const deleteItem = () => {
    console.log(item._id);
  };
  return (
    <div
      className={'List-item'}
      style={{
        padding: '0.5rem 1rem',
        border: '1px solid #999'
      }}
    >
      <p
        style={{
          fontSize: '1.3rem'
        }}
      >
        {' '}
        <span
          style={{
            display: 'inline-block',
            backgroundColor: 'red',
            color: '#fff',
            padding: '0.3rem 0.5rem',
            borderRadius: '0.3rem',
            marginRight: '1rem',
            fontSize: '1rem'
          }}
          onClick={deleteItem}
        >
          X
        </span>
        {item.name}
      </p>
    </div>
  );
};
