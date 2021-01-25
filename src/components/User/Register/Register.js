import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './Register.css'
import * as actions from '../../../store/actions/auth'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isRegistered = useSelector(state => state.auth.isReg);

  const dispatch = useDispatch();
  const register = (email, password) => dispatch(actions.register(email, password));

  const submitHandler = event => {
    event.preventDefault();
    register(email, password);
  }

  if (isRegistered) {
    <Redirect to='/login' />
  }

  return (
    <div className='registerForm'>
      <h1>REGISTER</h1>
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
        <button type="submit">REGISTER</button>
      </form >
    </div>
  )
}

export default Register
