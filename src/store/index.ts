import { createStore, compose, combineReducers } from 'redux'
// import { homeReducers } from '../views/Home/store'

const newWindow: any = window
const composeEnhancers = newWindow['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose

const reducer = combineReducers({
  // home: homeReducers
})

const store = createStore(reducer, composeEnhancers())

export default store
