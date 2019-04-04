import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'

import FunctionComponents from './components/function_components'
import ClassComponents from './components/class_components'
class App extends Component {
  state = {
    user: 'Dan'
  }
  render() {
    return (
      <div>
        <label>
          <b>Choose profile to view: </b>
          <select value={this.state.user} onChange={e => this.setState({ user: e.target.value })}>
            <option value="Dan">Dan</option>
            <option value="Sophie">Sophie</option>
            <option value="Sunil">Sunil</option>
          </select>
        </label>
        <h1>Welcome to {this.state.user}’s profile!</h1>
        <div>
          <FunctionComponents user={this.state.user} />
          <b>function</b>
        </div>
        <div>
          <ClassComponents user={this.state.user} />
          <b>class</b>
        </div>
      </div>
    )
  }
}

export default hot(App)
