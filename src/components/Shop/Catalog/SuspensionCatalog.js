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

export default SuspensionCatalog
