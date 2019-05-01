import { getTopicList, getTopicDetail, collectTopic, delCollectTopic } from '../../api'
import { Dispatch } from 'redux'
import Promise from 'promise'
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

// 获取文章列表
export const initListAction = (options: getTopicList) => {
  return createAsyncAction(types.INIT_LIST, options, getTopicList)
}

// 获取文章详情
export const getTopicDetailAction = (options: getTopicDetail) => {
  return createAsyncAction(types.DETAIL_GET_DETAIL, options, getTopicDetail)
}

// 收藏文章
export const collectTopicAction = (options: collectTopic) => {
  return createAsyncAction(types.COLLECT_TOPIC, options, collectTopic)
}

// 取消收藏文章
export const delCollectTopicAction = (options: collectTopic) => {
  return createAsyncAction(types.DEL_COLLECT_TOPIC, options, delCollectTopic)
}
