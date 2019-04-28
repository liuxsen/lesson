import React from 'react'
import Header from '../../components/Header'
import { RouteWithSubRoutes } from '../../routers'
import Copyright from '../../components/Copyright'
import List from '../../components/List'
import * as style from './style'
export interface Props {
  list: []
}

function Hello(props: any) {
  return (
    <div style={{ background: '#e1e1e1' }}>
      <Header />
      <style.Main>
        <style.Sidebar className="bg-red">123</style.Sidebar>
        <style.Content>
          <List />
        </style.Content>
      </style.Main>
      {props.routes.map((route: any, i: number) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Copyright />
    </div>
  )
}

export default Hello
