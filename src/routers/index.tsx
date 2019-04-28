import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../views/Home'
import Detail from '../views/Detail'
import About from '../views/About'
import NotFund from '../views/NotFund'

function RouteWithSubRoutes(route: any) {
  console.log(route)
  return (
    <Route
      exact={route.exact || false}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

const routerList = [
  {
    path: '/',
    exact: true,
    component: Home,
    routes: [
      {
        path: '/detail',
        component: Detail,
        routes: [
          {
            path: '/detail/about',
            component: About
          }
        ]
      }
    ]
  },
  {
    path: '/404',
    component: NotFund
  }
]

function RouterList() {
  return (
    <Router>
      <Switch>
        {routerList.map((route, i) => {
          return <RouteWithSubRoutes key={i} {...route} />
        })}
      </Switch>
    </Router>
  )
}

export { RouterList, RouteWithSubRoutes }
