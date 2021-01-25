import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className="Item">
      <h2>{props.children}</h2>
      <img src={props.img} />
      <div>{props.description}</div>
      <h3>{props.price}лв.</h3>
    </div>
  )
}

export default Item
