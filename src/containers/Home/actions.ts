import * as types from './types'

export const initListActions = (data: { list: any }) => {
  return {
    type: types.INIT_LIST,
    payload: data.list
  }
}

// 抛出actions函数的类型以供mapDispatchToProps使用
export interface HomeActionsType {
  initListActions: Function
}
