import { combineReducers } from 'redux'
import authReducer from './auth'
import orderReducer from './order'

const rootReducer = combineReducers({
  auth: authReducer,
  order: orderReducer
})

export default rootReducer;