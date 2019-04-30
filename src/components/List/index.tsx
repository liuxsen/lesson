import React from 'react'
import * as Style from './style'
import { TypeList } from '../../containers/Home/state'
import { getDateDiff } from '../../utils'
interface ListProps {
  data: TypeList[]
}
export default function List(props: ListProps) {
  return (
    <div>
      {props.data &&
        props.data.map((item, i) => {
          return (
            <Style.ListItem key={i}>
              <div className="fl-left w-30 h-30 bg-red">
                <img className="w-p100 h-p100" src={item.author.avatar_url} alt="" />
              </div>
              <div className="fl-left w-70 text-center">
                <span className="fs-14" style={{ color: '#9e78c0' }}>
                  {item.reply_count}
                </span>
                <span className="fs-10">/</span>
                <span className="fs-10" style={{ color: '#b4b4b4' }}>
                  {item.visit_count}
                </span>
              </div>
              <div className="fl-left mr-4">
                {item.top && <Style.Tag>置顶</Style.Tag>}
                {!item.top && <Style.Tag>{item.tab}</Style.Tag>}
              </div>
              <div className="fl-right">
                <Style.SmallAvatar className="bg-red dspl-inbl">
                  {/* <img src={item.} alt="" /> */}
                  <span style={{ color: '#778087' }} />
                </Style.SmallAvatar>
                <div className="dspl-inbl w-66 text-right pr-10 fs-12 vtal-md" style={{ color: '#778087' }}>
                  {getDateDiff(item.last_reply_at)}
                </div>
              </div>
              <div className="">{item.title}</div>
            </Style.ListItem>
          )
        })}
    </div>
  )
}
