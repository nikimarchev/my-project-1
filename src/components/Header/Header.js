import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import './Header.css'
import * as actions from '../../store/actions/auth'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  const dispatch = useDispatch();
  const logout = (email, password) => dispatch(actions.logout(email, password));

  const hideNav = () => {
    setNavOpen(false);
  }

  let history = useHistory();
  let button;
  if (isAuthenticated) {
    button = <button className="buttons" onClick={logout}>Logout</button>
  } else {
    button = <button className="buttons" onClick={() => history.push('/login')}>Login</button>
  }

  let navigation;
  if (navOpen) {
    navigation =
      <div className="navContainer" >
        <ul className="navigation">
          <NavLink to="/category" className="navigationItem" onClick={hideNav}>Tuning parts</NavLink>
          <NavLink to="/service" className="navigationItem" onClick={hideNav}>Service</NavLink>
        </ul>
      </div >
  }

  return (
    <div>
      <ul className="header" >
        <NavLink to="/" className="mainPage" onClick={hideNav}>qCar- Services for cars</NavLink>
        <button className="buttons" onClick={() => setNavOpen(open => !open)}>Services we provide</button>
        {button}
      </ul>
      {navigation}
    </div>
  )
}

export default Header
