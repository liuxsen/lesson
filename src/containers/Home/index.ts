import reducres from './reducers'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import * as actions from './actions'
import { getTopicList, getTopicDetail, collectTopic, delCollectTopic } from '../../api'

const mapStateToProps = (state: any) => {
  return {
    list: state.home.list,
    detail: state.home.detail
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    initListAction: (options: getTopicList) => {
      return dispatch(actions.initListAction(options))
    },
    getTopicDetailAction: (options: getTopicDetail) => {
      return dispatch(actions.getTopicDetailAction(options))
    },
    collectTopicAction: (options: collectTopic) => {
      return dispatch(actions.collectTopicAction(options))
    },
    delCollectTopicAction: (options: delCollectTopic) => {
      return dispatch(actions.delCollectTopicAction(options))
    }
  }
}

// 抛出 connect 方法
export default connect(
  mapStateToProps,
  mapDispatchToProps
)
