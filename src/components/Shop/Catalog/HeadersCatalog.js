import React from 'react'
import { useSelector } from 'react-redux'
import './Catalog.css'
import Item from '../Item/Item'

const HeadersCatalog = () => {
  const data = useSelector(state => state.products.filter(({ category }) => category === 'headers'))

  return (
    <>
      <h1 className="type">HEADERS</h1>
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

export default HeadersCatalog
