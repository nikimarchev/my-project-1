import { combineReducers } from 'redux'
import authReducer from './auth'
import orderReducer from './order'
import productsReducer from './products'

const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  products: productsReducer
})

export default rootReducer;