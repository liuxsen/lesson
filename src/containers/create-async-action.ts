import { Dispatch } from 'redux'
import * as types from './Home/types'

export default function createAsyncAction(type: string, options: any, asyncAction: Function) {
  const MODEL_NAME = type.split('/')[0]
  const TYPE_NAME = type.split('/')[1]
  const SUCCESS_TYPE = MODEL_NAME + '/' + TYPE_NAME + '/success'
  const PENDING_TYPE = MODEL_NAME + '/' + TYPE_NAME + '/pending'
  const REJECT_TYPE = MODEL_NAME + '/' + TYPE_NAME + '/reject'
  return (dispatch: Dispatch) => {
    dispatch({
      type: PENDING_TYPE
    })
    return asyncAction(options)
      .then((res: any) => {
        dispatch({
          type: SUCCESS_TYPE
        })
        if (res.success) {
          dispatch({
            type,
            payload: res.data
          })
        } else {
          dispatch({
            type: REJECT_TYPE,
            payload: res
          })
        }
      })
      .catch((err: any) => {
        dispatch({
          type: REJECT_TYPE,
          payload: err
        })
      })
  }
}
