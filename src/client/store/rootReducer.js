import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import Locale from './Locale'

export default combineReducers({
  router: routerReducer,
  Locale
})
