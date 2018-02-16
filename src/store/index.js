import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import appReducer from '../reducers'
import navReducer from '../reducers/navigation'
import initialState  from '../initialState.json'

const combinedReducers = combineReducers({
  nav: navReducer,
  app: appReducer
})

const store = applyMiddleware(thunk)(createStore)(combinedReducers, initialState)
export default store