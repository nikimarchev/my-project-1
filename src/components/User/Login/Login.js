import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import './Login.css'
import * as actions from '../../../store/actions/auth'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const dispatch = useDispatch();
  const login = (email, password) => dispatch(actions.login(email, password));
  const submitHandler = event => {
    event.preventDefault();
    login(email, password)
  }

  return (
    <div className='loginForm'>
      {isAuthenticated && <Redirect to='/' />}
      <h1>LOGIN</h1>
      <form onSubmit={submitHandler}  >
        <label>
          Email
          <input
            type='email'
            placeholder='Email address'
            value={email}
            onChange={e => { setEmail(e.target.value) }} />
        </label>
        <label>
          Password
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => { setPassword(e.target.value) }} />
        </label>
        <button type="submit">LOGIN</button>
        <button type="submit" onClick={() => history.push('/register')} > REGISTER</button>
      </form >
    </div>
  )
}

export default Login
