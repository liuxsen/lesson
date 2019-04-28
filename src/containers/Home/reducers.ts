import * as types from './types'

import { defaultStatus } from './state'

export default (state = defaultStatus, actions: any) => {
  const type = actions.type
  switch (type) {
    case types.INIT_LIST:
      return {
        ...state,
        list: actions.payload
      }
    default:
      return defaultStatus
  }
}
