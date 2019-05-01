import * as types from './types'

import { defaultStat } from './state'

export default function HomeReducer(state = defaultStat, actions: any) {
  const type = actions.type
  const modelName = actions.type.split('/')[1]
  switch (type) {
    case types.INIT_LIST:
      return {
        ...state,
        list: {
          ...state.list,
          data: [...actions.payload]
        }
      }
    case types.DETAIL_GET_DETAIL:
      return {
        ...state,
        detail: {
          ...state.detail,
          data: {
            ...actions.payload
          }
        }
      }
    case types.COLLECT_TOPIC:
      return {
        ...state,
        detail: {
          ...state.detail,
          data: {
            ...state.detail.data,
            is_collect: true
          }
        }
      }
    case types.DEL_COLLECT_TOPIC:
      return {
        ...state,
        detail: {
          ...state.detail,
          data: {
            ...state.detail.data,
            is_collect: false
          }
        }
      }
    case `home/${modelName}/pending`:
      return {
        ...state,
        [modelName]: {
          ...state[modelName],
          loading: true
        }
      }
    case `home/${modelName}/success`:
      return {
        ...state,
        [modelName]: {
          ...state[modelName],
          loading: false
        }
      }
    case `home/${modelName}/reject`:
      return {
        ...state,
        [modelName]: {
          ...state[modelName],
          loading: false,
          err: actions.payload
        }
      }
    default:
      return defaultStat
  }
}
