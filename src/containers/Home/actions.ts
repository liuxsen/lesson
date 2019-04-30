import { getTopicList } from '../../api'
import { Dispatch } from 'redux'
import * as types from './types'

export const initListAction = (options: getTopicList) => {
  return (dispatch: Dispatch) => {
    return getTopicList(options).then(res => {
      dispatch({
        type: types.INIT_LIST,
        data: res.data
      })
    })
  }
}

// // 抛出actions函数的类型以供mapDispatchToProps使用
// export interface HomeActionsType {
//   initListActions: Function
// }
