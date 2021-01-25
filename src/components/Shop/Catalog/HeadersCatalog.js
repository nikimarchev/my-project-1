import React from 'react'
import './Catalog.css'
import Item from '../Item/Item'

const HeadersCatalog = () => {
  return (
    <ul className="catalog">
      <h1>HEADERS</h1>
      <li>
        <Item
          className="item"
          img="https://images.holley.com/583x/bh13241_01.jpg"
          description='1968-1974 GM C-10/20 2WD Trucks Gen-V LT Swap, Tube Size 1-7/8", Collector Size 3", Natural Finish'
          price="1700">
          HOOKER BLACKHEART LONG TUBE HEADERS - STAINLESS
          </Item>
      </li>
      <li>
        <Item
          img="https://images.holley.com/583x/bh2352_01.jpg"
          description="1987-2006 Jeep Wrangler YJ/TJ/LJ with Gen III Hemi Engine Swap - Mid-Length Headers for - Use w/ Y-Pipe BH2354"
          price="1200">
          HOOKER BLACKHEART GEN III HEMI SWAP MID-LENGTH HEADERS - STAINLESS
          </Item>
      </li>
      <li>
        <Item
          img="https://images.holley.com/583x/70301411-rhkr_011838.jpg"
          description="2014-2019* Silverado/Sierra (*classic body) 5.3L V8 Stainless Steel Shorty Headers"
          price="1000">
          HOOKER BLACKHEART SHORTY HEADERS
          </Item>
      </li>
      <li>
        <Item
          img="https://images.holley.com/583x/70301301-rhkr_01.jpg"
          description="72010-2015 Camaro SS 6.2L-V8 304SS 1-7/8 Shorty Header - Natural Finish, 50 State Smog Legal, C.A.R.B. EO# D-115-27"
          price="1100">
          HOOKER BLACKHEART SHORTY HEADERS
          </Item>
      </li>
    </ul >
  )
}

export default HeadersCatalog
