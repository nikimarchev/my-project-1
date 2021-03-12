import axios from 'axios'

export const registerSuccess = (isReg) => {
  return {
    type: 'REGISTER_SUCCESS',
    isReg: isReg
  }
}

export const loginSuccess = (token, userId) => {
  return {
    type: 'LOGIN_SUCCESS',
    idToken: token,
    userId: userId
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: 'LOGOUT'
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  }
}

export const register = (email, password) => {
  return dispatch => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBUx5LBG5aeq-w9TqycyUENew97dUpVDSA';
    axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(registerSuccess(true))
      })
      .catch(err => {
        alert(err.response.data.error.message.split('_').join(' '));
      })
  }
}

export const login = (email, password) => {
  return dispatch => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBUx5LBG5aeq-w9TqycyUENew97dUpVDSA';
    axios.post(url, authData)
      .then(response => {
        console.log(response);
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(loginSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(err => {
        alert(err.response.data.error.message.split('_').join(' '));
      })
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId')
        dispatch(loginSuccess(token, userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  }
}