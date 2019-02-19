import { combineReducers } from 'redux' 
import { isLoadingReducer } from './isLoadingReducer.js'
import { hasErroredReducer } from './hasErroredReducer.js'
import { userReducer } from './userReducer.js'

export const rootReducer = combineReducers({
  loading: isLoadingReducer, 
  errored: hasErroredReducer, 
  user: userReducer
})