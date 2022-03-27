import React from 'react'
import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import NavBar from './Navbar';

function Shop({countCartItems, products, onAdd, cartItems, onRemove}) {
  return (
      <div>
        <NavBar />
        <Header countCartItems={countCartItems}></Header>
        <div className="row">
          <Main products={products} onAdd={onAdd}></Main>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </div>
      </div>
  )
}

export default Shop