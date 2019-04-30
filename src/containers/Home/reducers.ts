import * as types from './types'

import { defaultStat } from './state'

export default function HomeReducer(state = defaultStat, actions: any) {
  const type = actions.type
  switch (type) {
    case types.INIT_LIST:
      return {
        ...state,
        list: actions.data
      }
    default:
      return defaultStat
  }
}
