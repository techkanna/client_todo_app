import React from 'react';

export const NavBar = () => {
  return (
    <div
      className={'nav-bar'}
      style={{
        height: '3rem',
        backgroundColor: '#232332',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem'
      }}
    >
      <h3>Shopping List</h3>
      <span style={{ color: '#aaa' }}>Github</span>
    </div>
  );
};
