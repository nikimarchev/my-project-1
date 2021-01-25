import React from 'react'
import { NavLink } from 'react-router-dom'
import './Category.css'

const Category = () => {
  return (
    <ul className="category">
      <NavLink to="/turbos" className="link">
        <div>
          <h2>Turbos</h2>
          <img src="https://race-shop.bg/125425-large_default/turbo-garrett-gtx3582r-gen-ii-851154-5004s-super-core.jpg" alt="img" />
        </div>
      </NavLink>
      <NavLink to="/headers" className="link">
        <div>
          <h2>Headers</h2>
          <img src="https://www.supersprint.com/public/img/30631.jpg" alt="img" />
        </div>
      </NavLink>
      <NavLink to="/suspension" className="link">
        <div>
          <h2>Suspension</h2>
          <img src="https://m.media-amazon.com/images/I/61UxeXHwbKL._AC_SS350_.jpg" alt="img" />
        </div>
      </NavLink>
      <NavLink to="/rims" className="link">
        <div>
          <h2>Rims</h2>
          <img src="https://d3tye5etyupvvn.cloudfront.net/img/bmw-wheels-rims-beyern-antler-5-lug-silver-mirror-cut-face-std-700.jpg" alt="img" />
        </div>
      </NavLink>
    </ul >
  )
}

export default Category
