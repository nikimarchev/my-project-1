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
            <li key={item.id}>
              <Item
                className="item"
                item={item}
              />
            </li>
          ))
        }
      </ul >
    </>
  )
}

export default TurbosCatalog
