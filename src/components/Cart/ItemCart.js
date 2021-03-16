import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'
import * as actions from '../../store/actions/cart'

const ItemCart = ({ item: { name, img, price, id } }) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.cart[id]);
  const removeHandler = () => {
    dispatch(actions.removeFromCart(id));
  }

  return (
    <div className="item">
      <h3>{name}</h3>
      <img src={img} alt="img" />
      <h3>{price}лв.</h3>
      <h3>{count} pieces.</h3>
      <button className="removeBtn" onClick={removeHandler}>REMOVE</button>
    </div>
  )
}

export default ItemCart
