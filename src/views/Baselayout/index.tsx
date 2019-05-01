import React, { Component } from 'react'
import { withRouter, Route } from 'react-router'
import Header from '../../components/Header'
import Copyright from '../../components/Copyright'
import * as style from './style'

const Baselayout = function({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div style={{ background: '#e1e1e1' }}>
          <Header />
          <style.Main>
            <style.Sidebar className="bg-red">123</style.Sidebar>
            <div className="mr-300">
              <Component {...matchProps} />
            </div>
            <style.Content />
          </style.Main>
          <Copyright />
        </div>
      )}
    />
  )
}

export default withRouter(Baselayout)
