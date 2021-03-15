import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Item.css'
import * as actions from '../../../store/actions/order'

const Item = ({ name, img, description, price }) => {
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(actions.addToCart({ img, price, name }));
  }

  return (
    <div className="Item">
      <h2>{name}</h2>
      <img src={img} alt="img" />
      <div>{description}</div>
      <h3>{price}лв.</h3>
      {
        isAuthenticated ?
          <button onClick={addHandler}>Add to cart</button>
          : <h4 className="shouldLogin">You should login to purchase</h4>
      }
    </div>
  )
}

export default Item
