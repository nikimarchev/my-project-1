import React from 'react'
import './Catalog.css'
import Item from '../Item/Item'

const SuspensionCatalog = () => {
  return (
    <ul className="catalog">
      <h1>SUSPENSION</h1>
      <li>
        <Item
          className="item"
          img="https://www.bimmerworld.com/B12Coilover_Insert_Generic.jpg"
          description="BILSTEIN damper and EIBACH Pro-Kit performance spring road-tested and fine-tuned to perfectly complement each other"
          price="1399">
          Bilstein B12 (Sportline) Front and Rear - 46-190932 - E34
        </Item>
      </li>
      <li>
        <Item
          className="item"
          img="https://www.bimmerworld.com/MCS_E9X_1WNR_All_WM-2.jpg"
          description="Ultra-premium single-adjustable monotube damper with street-perfect manners and race-winning performance. Rear coil-over design."
          price="3999">
          MCS 1-Way Non-Remote Damper Set - F22, F30, F32 (Coil Over Rear)
        </Item>
      </li>
      <li>
        <Item
          className="item"
          img="https://www.bimmerworld.com/E30_ISCSuspension_1000.jpg"
          description="Street coil overs are low on price but high on quality and features!"
          price="999">
          ISC N1 Street Sport Coil Over Kit - E30 318i/325e/325i/M3 Late (51mm Strut)
        </Item>
      </li>
    </ul>
  )
}

export default SuspensionCatalog
