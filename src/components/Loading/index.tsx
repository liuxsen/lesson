// 全局loading组件
import React from 'react'
import styled from 'styled-components'
import LoadingSvg from '../../static/img/loading.svg'
import { CSSTransition } from 'react-transition-group'
import './style.css'
const LoadingStyle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  text-align: center;
  & > img {
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`
export interface TypeLoadingComponentProps {
  show: boolean
}
export default function Loading(props: TypeLoadingComponentProps) {
  return (
    <CSSTransition in={props.show} timeout={300} classNames="fadein" unmountOnExit>
      <LoadingStyle>
        <img src={LoadingSvg} />
      </LoadingStyle>
    </CSSTransition>
  )
}
