import React from 'react'
import { useSelector } from 'react-redux';
import './Cart.css'
import ItemCart from './ItemCart'

const Cart = () => {
  const token = localStorage.getItem('token');
  const items = useSelector(state => state.order);
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

  const totalPrice = items.reduce((acc, p) => acc + +p.price, 0);

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
