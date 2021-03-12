import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import './Header.css'
import * as actions from '../../store/actions/auth'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  let history = useHistory();
  const dispatch = useDispatch();
  const logout = (email, password) => {
    history.push('/')
    dispatch(actions.logout(email, password))
  };

  const hideNav = () => {
    setNavOpen(false);
  }

  return (
    <div>
      <ul className="header" >
        <NavLink to="/" className="mainPage" onClick={hideNav}>qCar- Services for cars</NavLink>
        <button className="buttons" onClick={() => setNavOpen(open => !open)}>Shop & Service</button>
        {isAuthenticated && <NavLink to="/cart" className="cart" onClick={hideNav}>Cart</NavLink>}
        {
          isAuthenticated ?
            <button className="buttons" onClick={logout}>Logout</button>
            : <button className="buttons" onClick={() => history.push('/login')}>Login</button>
        }
      </ul>
      {
        navOpen &&
        <div className="navContainer" >
          <ul className="navigation">
            <NavLink to="/category" className="navigationItem" onClick={hideNav}>Tuning parts</NavLink>
            <NavLink to="/service" className="navigationItem" onClick={hideNav}>Service</NavLink>
          </ul>
        </div >
      }
    </div>
  )
}

export default Header
