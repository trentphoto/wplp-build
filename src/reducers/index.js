import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  page: pageReducer,
  search: searchReducer
})
