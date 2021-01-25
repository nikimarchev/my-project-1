import React from 'react'
import './Catalog.css'
import Item from '../Item/Item'

const RimsCatalog = () => {
  return (
    <ul className="catalog">
      <h1>RIMS</h1>
      <li>
        <Item
          className="item"
          img="https://cdn4.wheelbasealloys.com/product-images/product-791473_71213_600.jpg"
          description="18 Inch Set of 4 alloy wheels"
          price="1200">
          AVA Phoenix (Special Offer) Hyper Silver
        </Item>
      </li>
      <li>
        <Item
          className="item"
          img="https://cdn4.wheelbasealloys.com/product-images/product-767092_70525_900.jpg"
          description="18 Inch Set of 4 alloy wheels"
          price="1400">
          Romac Radium Gloss Black
        </Item>
      </li>
      <li>
        <Item
          className="item"
          img="https://cdn4.wheelbasealloys.com/product-images/product-87631_76217_900.jpg"
          description="18 Inch Set of 4 alloy wheels"
          price="1300">
          Wheelworld WH31 Silver
        </Item>
      </li>
      <li>
        <Item
          className="item"
          img="https://cdn4.wheelbasealloys.com/product-images/product-374930_75370_900.jpg"
          description="18 Inch Set of 4 alloy wheels"
          price="2100">
          Proline PXD Grey Glossy
        </Item>
      </li>
    </ul>
  )
}

export default RimsCatalog
