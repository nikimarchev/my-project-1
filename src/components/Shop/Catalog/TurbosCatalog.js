import React from 'react'
import './Catalog.css'
import Item from '../Item/Item'

const TurbosCatalog = () => {
  return (
    <ul className="catalog">
      <h1>TURBOS</h1>
      <li>
        <Item
          className="item"
          img="https://www.garrettmotion.com/wp-content/uploads/2020/02/Garrett_Performance_G_Series_G57_Turbocharger.jpg"
          description="Supports up to 3000 horsepower"
          price="12700">
          Garrett G-Series G57-3000
          </Item>
      </li>
      <li>
        <Item
          img="https://www.garrettmotion.com/wp-content/uploads/2020/02/Garrett_Performance_G_Series_G57_Turbocharger.jpg"
          description="38mm TURBOCHARGER"
          price="1800">
          Garrett GT2052 Turbocharger
          </Item>
      </li>
      <li>
        <Item
          img="https://www.garrettmotion.com/wp-content/uploads/2019/02/GTX4709-GTX5009-Gen-II-quarter.jpg"
          description="76mm AND 80mm TURBOCHARGER"
          price="1800">
          Garrett GTX5009R GEN II Turbocharger
          </Item>
      </li>
      <li>
        <Item
          img="https://www.garrettmotion.com/wp-content/uploads/2019/02/GTX4709-GTX5009-Gen-II-quarter.jpg"
          description="76mm AND 80mm TURBOCHARGER"
          price="1800">
          Garrett GTX5009R GEN II Turbocharger
          </Item>
      </li>
    </ul>
  )
}

export default TurbosCatalog
