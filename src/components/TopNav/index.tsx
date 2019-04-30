import React from 'react'
import * as Style from './style'
import { Link, withRouter } from 'react-router-dom'

import { HomeRouteProp } from '../../views/Home'

const topBars = [
  {
    title: '全部',
    path: '/all'
  },
  {
    title: '精华',
    path: '/good'
  },
  {
    title: '分享',
    path: '/share'
  },
  {
    title: '问答',
    path: '/ask'
  },
  {
    title: '招聘',
    path: '/job'
  },
  {
    title: '客户端测试',
    path: '/dev'
  }
]

const TopNav = function(props: HomeRouteProp) {
  return (
    <Style.TopWraper>
      {topBars.map((nav, i) => {
        const isActiveTab = props.match.url === nav.path
        return (
          <Style.TopNavItem className={`mr-20 ${isActiveTab ? 'active' : ''}`} key={nav.path}>
            <Link to={nav.path}>{nav.title}</Link>
          </Style.TopNavItem>
        )
      })}
    </Style.TopWraper>
  )
}

export default withRouter(TopNav)
