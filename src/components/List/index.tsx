import React, { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import * as Style from './style'
import { TypeList, EnumTabs } from '../../containers/Home/state'
import { getDateDiff } from '../../utils'
import Loading from '../Loading'
interface ListProps extends RouteComponentProps {
  data: TypeList[]
  loading: boolean
}

class List extends Component<ListProps> {
  handleGoDetail = (id: string) => {
    this.props.history.push('/detail/' + id)
  }
  render() {
    const props = this.props
    return (
      <div className="vh-parent">
        {<Loading show={props.loading} />}
        {props.data &&
          props.data.map((item, i) => {
            return (
              <Style.ListItem key={i} onClick={() => this.handleGoDetail(item.id)}>
                <div className="fl-left w-30 h-30 bg-red">
                  <img className="w-p100 h-p100" src={item.author.avatar_url} alt="" />
                </div>
                <div className="fl-left w-70 text-center">
                  <span className="fs-14" style={{ color: '#9e78c0' }}>
                    {item.reply_count}
                  </span>
                  <span className="fs-10">/</span>
                  <span className="fs-10" style={{ color: '#b4b4b4' }}>
                    {item.visit_count}
                  </span>
                </div>
                <div className="fl-left mr-4">{<Style.Tag>{EnumTabs[item.tab]}</Style.Tag>}</div>
                <div className="fl-right">
                  <Style.SmallAvatar className="bg-red dspl-inbl">
                    {/* <img src={item.} alt="" /> */}
                    <span style={{ color: '#778087' }} />
                  </Style.SmallAvatar>
                  <div className="dspl-inbl w-66 text-right pr-10 fs-12 vtal-md" style={{ color: '#778087' }}>
                    {getDateDiff(item.last_reply_at)}
                  </div>
                </div>
                <Style.Title>{item.title}</Style.Title>
              </Style.ListItem>
            )
          })}
      </div>
    )
  }
}

export default withRouter(List)
