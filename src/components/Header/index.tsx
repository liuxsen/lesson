import React, { Component } from 'react'

import * as Style from './style'
import Logo from '../../static/img/cnodejs_light.svg'
import { navs } from './nav'

export default class Header extends Component {
  handleChange = (e: any) => {
    console.log(e.target.value)
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
            <ul className="ovfl-hd fl-right">
              {navs.map((nav, i) => (
                <Style.NavItem key={i}>{nav.title}</Style.NavItem>
              ))}
            </ul>
          </Style.Wrapper>
        </Style.NavBar>
      </div>
    )
  }
}
