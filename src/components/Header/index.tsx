import React from 'react'

import * as Style from './style'
import Logo from '../../static/img/cnodejs_light.svg'
import search from '../../static/img/search.png'
import { navs } from './nav'

export default function Header() {
  return (
    <div>
      <Style.NavBar>
        <Style.Wrapper>
          <Style.NavLog>
            <img className="w-p100 h-p100 fl-left" src={Logo} />
          </Style.NavLog>
          <form className="fl-left">
            <input
              className="mt-6 ptb-3 pl-5 pr-22 rounded-15 w-206 ptb-3 pl-5 pr-22 h-20"
              style={{ background: `#888 url(${search}) no-repeat left center`, border: 0 }}
            />
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
