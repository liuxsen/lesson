import * as types from './types'

import { defaultStat } from './state'

export default function HomeReducer(state = defaultStat, actions: any) {
  const type = actions.type
  switch (type) {
    case types.INIT_LIST:
      return {
        ...state,
        list: actions.payload
      }
    case types.PENDING:
      return {
        ...state,
        loading: true
      }
    case types.SUCCESS:
      return {
        ...state,
        loading: false
      }
    case types.REJECT:
      return {
        ...state,
        loading: false,
        err: actions.payload
      }
    default:
      return defaultStat
  }
}
