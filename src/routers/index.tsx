import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../views/Home'
// import Detail from '../views/Detail'
// import About from '../views/About'
import NotFund from '../views/NotFund'

function RouterList() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:type" exact component={Home} />
        {/* <Route path="/detail/about" component={About} /> */}
        {/* <Route path="/detail" component={Detail} /> */}
        <Route path="/404" component={NotFund} />
      </Switch>
    </Router>
  )
}

export { RouterList }
