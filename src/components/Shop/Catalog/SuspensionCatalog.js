import React from 'react'
import { useSelector } from 'react-redux'
import './Catalog.css'
import Item from '../Item/Item'

const SuspensionCatalog = () => {
  const data = useSelector(state => state.products.filter(({ category }) => category === 'suspension'))

  return (
    <>
      <h1 className="type">SUSPENSION</h1>
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

export default SuspensionCatalog
