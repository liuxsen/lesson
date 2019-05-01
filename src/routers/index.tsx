import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFund from '../views/NotFund'
import Baselayout from '../views/Baselayout'
import { Home } from '../views/Home'

function RouterList() {
  return (
    <Router>
      <Switch>
        <Baselayout path="/" component={Home} />
        {/* <Route path="/" component={Baselayout} /> */}
        {/* <Route path="/detail/:id" component={Detail} />
        <Route path="/:type" exact component={Home} />
        <Route path="/detail/about" component={About} /> */}
        <Route path="/404" component={NotFund} />
      </Switch>
    </Router>
  )
}

export { RouterList }
