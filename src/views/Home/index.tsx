import React from 'react'
import Header from '../../components/Header'
import Copyright from '../../components/Copyright'
import { RouteWithSubRoutes } from '../../routers'
export interface Props {
  list: []
}

function Hello(props: any) {
  return (
    <div>
      <Header />
      {props.routes.map((route: any, i: number) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Copyright />
    </div>
  )
}

export default Hello
