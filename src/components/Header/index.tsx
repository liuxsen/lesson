import React, { Component } from 'react'

import * as Style from './style'
import Logo from '../../static/img/cnodejs_light.svg'
import { navs } from './nav'
import { withRouter, RouteComponentProps } from 'react-router'

class Header extends Component<RouteComponentProps> {
  handleChange = (e: any) => {
    console.log(e.target.value)
  }
  handleNav = (path: string) => {
    this.props.history.push(path)
  }
  render() {
    return (
      <div>
        <Style.NavBar>
          <Style.Wrapper>
            <Style.NavLog>
              <img className="w-p100 h-p100 fl-left" src={Logo} />
            </Style.NavLog>
            <form className="fl-left">
              <Style.NavSearch onChange={this.handleChange} />
            </form>
            <div className="ovfl-hd mt-10 fl-right">
              {navs.map((nav, i) => (
                <Style.NavItem onClick={() => this.handleNav(nav.path)} key={i}>
                  {nav.title}
                </Style.NavItem>
              ))}
            </div>
          </Style.Wrapper>
        </Style.NavBar>
      </div>
    )
  }
}

export default withRouter(Header)
