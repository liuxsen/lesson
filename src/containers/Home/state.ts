export interface TypeAuthor {
  loginname: string
  avatar_url: string
}
export interface TypeList {
  id: string
  author_id: string
  tab: 'ask' | 'share' | 'job' | 'good'
  content: string
  title: string
  last_reply_at: Date
  good: boolean
  top: boolean
  reply_count: number
  visit_count: number
  create_at: Date
  author: TypeAuthor
}
export interface TypeDefaultState {
  loading: boolean
  type: string
  err: {}
  list: TypeList[]
}

export const defaultStat: TypeDefaultState = {
  loading: false,
  err: {},
  type: 'all',
  list: [] // 保存列表页数据
}
