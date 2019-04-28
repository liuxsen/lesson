import React from 'react'
import { RouteWithSubRoutes } from '../../routers'

function Detail(props: any) {
  return (
    <div>
      <h4>detail</h4>
      {props.routes.map((route: any, i: number) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  )
}

export default Detail
