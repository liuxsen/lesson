import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import connect from '../../containers/Home'
import List from '../../components/List'
import * as style from './style'
import TopNav from '../../components/TopNav'

// 扩展 params
export interface HomeRouterPrams {
  type: string
}

export interface HomeRouteProp extends RouteComponentProps<HomeRouterPrams> {}

export interface HomeProps extends HomeRouteProp {
  list: []
}

export class Home extends Component<HomeProps> {
  componentDidMount() {
    // this.fetchList(this.props.match.params.type)
  }
  componentWillReceiveProps(nextProps: HomeProps) {
    if (this.props.match.url !== nextProps.match.url) {
      this.fetchList(nextProps.match.params.type)
    }
  }
  componentDidUpdate() {
    // this.fetchList()
  }
  fetchList = (type: string) => {
    const props: any = this.props
    props.initListAction({
      page: 1,
      tab: type,
      limit: 10
    })
  }
  render() {
    const props: any = this.props
    return (
      <div>
        <TopNav />
        {/* <List loading={props.data.loading} data={props.data.list} /> */}
      </div>
    )
  }
}

export default connect(Home)
