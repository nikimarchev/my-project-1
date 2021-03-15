import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Catalog.css'
import Item from '../Item/Item'

const HeadersCatalog = () => {
  const HOST = 'http://localhost:3000';
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${HOST}/data/headersData.json`)
      .then(response => {
        setData(response.data);
      })
  }, [])

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
