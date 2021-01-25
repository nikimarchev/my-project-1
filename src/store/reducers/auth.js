const initialState = {
  token: null,
  userId: null,
  isReg: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isReg: action.isReg
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.idToken,
        userId: action.userId
      }
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        userId: null,
        isReg: null
      }
    default:
      return state;
  }
}

export default reducer