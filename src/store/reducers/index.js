import { combineReducers } from 'redux'
import authReducer from './auth'
import cartReducer from './cart'
import productsReducer from './products'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer
})

export default rootReducer;