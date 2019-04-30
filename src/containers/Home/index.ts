import reducres from './reducers'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { TypeDefaultState, defaultStat } from './state'
import * as actions from './actions'
import { getTopicList } from '../../api'

// // export const HomeReducers = reducres

// export const homeReducers = reducres

// export const homeActions = actions

// 抛出 connect 方法

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
