import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../views/Home'
import Detail from '../views/Detail'
import About from '../views/About'

function RouteWithSubRoutes(route: any) {
  console.log(route)
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

const routes = [
  {
    path: '/',
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
  }
]

export { routes, RouteWithSubRoutes }
