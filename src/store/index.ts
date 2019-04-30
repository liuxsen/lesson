import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import HomeReducer from '../containers/Home/reducers'

const newWindow: any = window
const composeEnhancers = newWindow['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose

const reducer = combineReducers({
  home: HomeReducer
})

const middleware = applyMiddleware(...[ReduxThunk])
const store = createStore(reducer, composeEnhancers(middleware))

export default store
