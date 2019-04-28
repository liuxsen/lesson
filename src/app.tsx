import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import { routes, RouteWithSubRoutes } from './routers'
import './static/css/atom-common.min.css'
import './static/css/atom-pc.1.min.css'
import './static/css/atom-pc.2.min.css'
import './static/css/atom-pc.3.min.css'
import './static/css/atom-pc.4.min.css'

const App = () => (
  <div>
    <Provider store={store}>
      <Router>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Router>
    </Provider>
  </div>
)
export default hot(App)
