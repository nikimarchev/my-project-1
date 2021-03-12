import React from 'react'
import { useSelector } from 'react-redux';
import './Cart.css'
import ItemCart from './ItemCart'

const Cart = () => {
  const token = localStorage.getItem('token');
  const items = useSelector(state => state.order.items);
  const list = items.map(item => (
    <li key={item.img}>
      <ItemCart
        className="item"
        name={item.name}
        img={item.img}
        description={item.description}
        price={item.price}>
      </ItemCart>
    </li>
  ))

  return (
    <>
      {
        token ?
          <div className="uselessDiv">
            <h1 className="type">CART</h1>
            <div className="container">
              {items.length > 0 ? list : <p className="empty">EMPTY CART</p>}
            </div>
            {items.length > 0 && <button className="checkout">CHECKOUT</button>}
          </div>
          : <p className="empty">YOU SHOULD BE AUTHENTICATED</p>
      }

    </>
  )
}

export default Cart
