import React from 'react'
import { useSelector } from 'react-redux';
import './Cart.css'
import ItemCart from './ItemCart'

const Cart = () => {
  const token = localStorage.getItem('token');
  const cart = useSelector(state => state.cart);
  const items = useSelector(state => state.products.filter(({ id }) => state.cart[id]));
  
  const totalPrice = items.reduce((acc, p) => acc + +p.price * cart[p.id], 0);
  const list = items.map(item => (
    <li key={item.id}>
      <ItemCart
        className="item"
        item={item}
      />
    </li>
  ))

  return (
    <>
      {
        token ?
          <div className="uselessDiv">
            <h1 className="type">CART</h1>
            {
              items.length > 0 ?
                <ul className="container">
                  {list}
                </ul>
                : <p className="empty">EMPTY CART</p>
            }
            {
              items.length > 0 &&
              <div className="checkoutDiv">
                <button className="checkout">CHECKOUT</button>
                <p className="totalPrice">Total price: {totalPrice}лв.</p>
              </div>
            }
          </div>
          : <p className="empty">YOU SHOULD BE AUTHENTICATED</p>
      }

    </>
  )
}

export default Cart
