import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import store from './store'
import { RouterList } from './routers'

import './static/css/atom-common.min.css'
import './static/css/atom-pc.1.min.css'
import './static/css/atom-pc.2.min.css'
import './static/css/atom-pc.3.min.css'
import './static/css/atom-pc.4.min.css'
import './static/css/reset.css'
const App = () => (
  <div>
    <Provider store={store}>
      <RouterList />
    </Provider>
  </div>
)
export default hot(App)
