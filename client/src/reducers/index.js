import {combineReducers} from 'redux'
import product from './product'
import cart from './cart'
import filter from './filter'
export default combineReducers({product,cart,filter})