import reducres from './reducers'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { TypeDefaultState, defaultStat } from './state'
import * as actions from './actions'
import { getTopicList } from '../../api'

const mapStateToProps = (state: any) => {
  return {
    data: state.home
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    initListAction: (options: getTopicList) => {
      dispatch(actions.initListAction(options))
    }
  }
}

// 抛出 connect 方法
export default connect(
  mapStateToProps,
  mapDispatchToProps
)
