import util from './utils'
import pathToRegexp from 'path-to-regexp'
const Api = [
  {
    method: 'get',
    url: '/api/v1/topics'
  }
]

// 主题首页
export interface getTopicList {
  page: number
  tab: 'ask' | 'share' | 'job' | 'good'
  limit: number
  mdrender?: boolean // ture 渲染markdown false 不渲染markdown
}
export const getTopicList = (params: getTopicList) => {
  return util({
    method: 'get',
    url: '/api/v1/topics',
    params
  })
}

// 主题详情
export interface getTopicDetail {
  id: string
  mdrender: boolean // ture 渲染markdown false 不渲染markdown
  accesstoken: String // 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。
}
export const getTopicDetail = (params: getTopicDetail) => {
  const baseUrl = '/api/v1/topic/:id'
  const toPath = pathToRegexp.compile(baseUrl)
  const realUrl = toPath({
    id: params.id
  })
  return util({
    method: 'get',
    url: realUrl
  })
}

// 收藏主题
export interface collectTopic {
  accesstoken: string
  id: string // 文章id
}
export const collectTopic = (options: collectTopic) => {
  const baseUrl = '/api/v1/topic_collect/collect'
  return util({
    method: 'post',
    url: baseUrl,
    data: options
  })
}

// 取消收藏
export interface delCollectTopic {
  accesstoken: string
  id: string // 文章id
}
export const delCollectTopic = (options: delCollectTopic) => {
  const baseUrl = '/api/v1/topic_collect/de_collect'
  return util({
    method: 'post',
    url: baseUrl,
    data: options
  })
}
