import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import connect from '../../containers/Home'
import { Tag, Title, SubTitle } from './style'
import { TypeTopicDetail } from '../../containers/Home/state'
import Loading from '../../components/Loading'
import { getDateDiff } from '../../utils'
import Comment from '../../components/Comment'
import { token } from '../../config'
export interface DetailRouterParams {
  id: string
}
export interface DetailRouteProp extends RouteComponentProps<DetailRouterParams> {
  detail: TypeTopicDetail
  getTopicDetailAction: Function
  collectTopicAction: Function
  delCollectTopicAction: Function
}

class Detail extends Component<DetailRouteProp> {
  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchDetail(id)
  }
  handleCollectUpdate = () => {
    const id = this.props.match.params.id
    const isCollect = this.props.detail.data.is_collect
    if (isCollect) {
      this.props.delCollectTopicAction({ topic_id: id, accesstoken: token })
    } else {
      this.props.collectTopicAction({ topic_id: id, accesstoken: token })
    }
  }
  fetchDetail = (id: string) => {
    this.props.getTopicDetailAction({
      id
    })
  }
  render() {
    const props = this.props
    return (
      <div>
        <div className="bg-white pst-rlt" style={{ borderRadius: '3px 3px 0 0' }}>
          <Loading show={this.props.detail.loading} />
          <div className="p-10" style={{ borderBottom: '1px solid #eaeaea' }}>
            <Title>
              {/* <Tag>{this.props.detail}</Tag> */}
              <span className="ml-10">{this.props.detail.data.title}</span>
            </Title>
            <div
              onClick={() => {
                this.handleCollectUpdate()
              }}
              className={`fl-right color-white lh-18 p-10 rounded-4 cs-pt ${(props.detail.data.is_collect && 'bg-btn-disable') || 'bg-btn-color'}`}
            >
              {(props.detail.data.is_collect && '取消收藏') || '收藏'}
            </div>
            <SubTitle>
              <span>
                发布于
                <span className="mlr-10">{getDateDiff(props.detail.data.create_at)}</span>
              </span>
              <span className="mr-4 ml-4">作者 {props.detail.data.author && props.detail.data.author.loginname}</span>
              <span className="mr-4">{props.detail.data.visit_count} 次浏览</span>
              <span>
                来自
                <span className="ml-8">{props.detail.data.tab}</span>
              </span>
            </SubTitle>
          </div>
          <div className="p-10" dangerouslySetInnerHTML={{ __html: this.props.detail.data.content }} />
        </div>
        {props.detail.data.replies && <Comment list={props.detail.data.replies} />}
      </div>
    )
  }
}

export default connect(Detail)
