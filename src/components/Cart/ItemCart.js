import React from 'react'
import { useDispatch } from 'react-redux';
import './Cart.css'
import * as actions from '../../store/actions/order'

const ItemCart = ({ name, img, price }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(actions.removeFromCart(name));
  }

  return (
    <div className="item">
      <h3>{name}</h3>
      <img src={img} alt="img" />
      <h3>{price}лв.</h3>
      <button className="removeBtn" onClick={() => { removeHandler(name) }}>REMOVE</button>
    </div>
  )
}

export default ItemCart
