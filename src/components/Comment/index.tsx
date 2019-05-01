import React from 'react'
import * as style from './style'
import { TypeReplyItem } from '../../containers/Home/state'
import { getDateDiff } from '../../utils'
interface Props {
  list: TypeReplyItem[]
}
export default function(props: Props) {
  return (
    <div className="mt-30">
      <style.CommentTop>{props.list.length} 回复</style.CommentTop>
      {props.list &&
        props.list.map((item, i) => {
          return (
            <style.CommentItem key={item.id}>
              <style.CommentAvatar>
                <img className="w-max-p100 h-max-p100" src={item.author && item.author.avatar_url} />
              </style.CommentAvatar>
              <style.CommnetUserInfo>
                {item.author && item.author.loginname} {i + 1}楼 {getDateDiff(item.create_at)}
              </style.CommnetUserInfo>
              <div className="ml-50" dangerouslySetInnerHTML={{ __html: item.content }} />
            </style.CommentItem>
          )
        })}
    </div>
  )
}
