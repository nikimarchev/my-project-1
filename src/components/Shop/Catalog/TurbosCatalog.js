import React from 'react'
import { useSelector } from 'react-redux'
import './Catalog.css'
import Item from '../Item/Item'

const TurbosCatalog = () => {
  const data = useSelector(state => state.products.filter(({ category }) => category === 'turbos'))

  return (
    <>
      <h1 className="type">TURBOS</h1>
      <ul className="catalog">
        {
          data.map(item => (
            <li key={item.img}>
              <Item
                className="item"
                name={item.name}
                img={item.img}
                description={item.description}
                price={item.price}>
              </Item>
            </li>
          ))
        }
      </ul >
    </>
  )
}

export default TurbosCatalog
