import { Dispatch } from 'redux'
import * as types from './Home/types'

export default function createAsyncAction(type: string, options: any, asyncAction: Function) {
  const TYPE_NAME = type.split('/')[0]
  const SUCCESS_TYPE = TYPE_NAME + '/success'
  const PENDING_TYPE = TYPE_NAME + '/pending'
  const REJECT_TYPE = TYPE_NAME + '/reject'
  return (dispatch: Dispatch) => {
    dispatch({
      type: PENDING_TYPE
    })
    return asyncAction(options)
      .then((res: any) => {
        dispatch({
          type: SUCCESS_TYPE
        })
        dispatch({
          type,
          payload: res.data
        })
      })
      .catch((err: any) => {
        dispatch({
          type: REJECT_TYPE,
          payload: err
        })
      })
  }
}
