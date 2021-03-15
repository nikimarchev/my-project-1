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

export default HeadersCatalog
