import styled from 'styled-components'

export const ListItem = styled.div`
  padding-right: 10px;
  background: #fff;
  &:nth-child(1) {
    border-top: none;
  }
  padding-right: 10px;
  background: #fff;
  position: relative;
  padding: 10px 0 10px 10px;
  font-size: 14px;
  border-top: 1px solid #f0f0f0;
  line-height: 2em;
  &:hover {
    background: #f6f6f6;
  }
`

export const SmallAvatar = styled.div`
  height: 18px;
  width: 18px;
  vertical-align: middle;
  margin-right: 0.2em;
  border-radius: 3px;
`

export const Tag = styled.div`
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  display: inline-block;
  line-height: 14px;
`
