import { getTopicList } from '../../api'
import { Dispatch } from 'redux'
import * as types from './types'
import createAsyncAction from '../create-async-action'
// export const initListAction = (options: getTopicList) => {
//   return (dispatch: Dispatch) => {
//     return getTopicList(options).then(res => {
//       dispatch({
//         type: types.INIT_LIST,
//         data: res.data
//       })
//     })
//   }
// }

export const initListAction = (options: getTopicList) => {
  return createAsyncAction(types.INIT_LIST, options, getTopicList)
}
