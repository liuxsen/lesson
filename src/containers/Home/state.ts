// 作者
export interface TypeAuthor {
  loginname: string
  avatar_url: string
}
export enum EnumTabs {
  'all' = '全部',
  'good' = '精华',
  'share' = '分享',
  'ask' = '问答',
  'job' = '招聘',
  'dev' = '测试'
}
export interface TypeBase {
  loading: boolean
  err: {}
}
// 列表
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
// 回复
export interface TypeReplyItem {
  id: string
  create_at: string
  author: TypeAuthor
  content: string
  ups: string[]
  is_uped: boolean
  reply_id: string
}
// 文章详细
export interface TypeTopicDetailData extends TypeList {
  replies: TypeReplyItem[]
  is_collect: boolean
  loading: boolean
}
export interface TypeTopicDetail {
  loading: boolean
  err: {}
  data: TypeTopicDetailData
}
export interface TypeDefaultState {
  collect: TypeBase
  list: {
    loading: boolean
    type: string
    err: {}
    data: TypeList[]
  }
  detail: TypeTopicDetail
  [key: string]: any // 必须包括所用成员类型
}

// export const defaultStat: TypeDefaultState = {
//   loading: false,
//   err: {},
//   type: 'all',
//   data: [] // 保存列表页数据
// }

export const defaultStat: TypeDefaultState = {
  collect: {
    loading: false,
    err: {}
  },
  detail: {
    loading: false,
    err: {},
    data: {} as TypeTopicDetailData
  },
  list: {
    loading: false,
    type: 'all',
    err: {},
    data: []
  }
}
