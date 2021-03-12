import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './Item.css'
import * as actions from '../../../store/actions/order'

const Item = (props) => {
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const dispatch = useDispatch();

  const addHandler = (img, description, price, name) => {
    dispatch(actions.addToCart({ img, description, price, name }));
  }

  return (
    <div className="Item">
      <h2>{props.children}</h2>
      <img src={props.img} alt="img" />
      <div>{props.description}</div>
      <h3>{props.price}лв.</h3>
      {
        isAuthenticated &&
        <button onClick={() => {
          addHandler(
            props.img,
            props.description,
            props.price,
            props.children
          )
        }}>Add to cart</button>
      }
    </div>
  )
}

export default Item
