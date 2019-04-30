import search from '../../static/img/search.png'

import styled from 'styled-components'
export const NavBar = styled.div`
  margin-bottom: 0;
  z-index: 9;
  width: 100%;
  position: relative;
  background: #444;
  font-size: 13px;
  padding: 5px;
`

export const Wrapper = styled.div`
  max-width: 1400px;
  min-width: 960px;
  width: 100%;
  margin: auto;
  overflow: hidden;
`

export const NavLog = styled.div`
  float: left;
  width: 120px;
  padding: 3px 20px;
  height: 34px;
  line-height: 34px;
  color: #ccc;
  font-weight: 700;
`

export const NavSearch = styled.input`
  padding: 3px 5px 3px 22px;
  color: #666;
  border: 0;
  margin-top: 2px;
  margin-bottom: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  padding-left: 12px;
  background: #888 url(${search}) no-repeat 4px center;
  border-radius: 15px;
  width: 206px;
  padding: 3px 0px 3px 25px;
  height: 20px;
  margin-top: 10px;
  color: #fff;
  transition: ease-in 500ms;
  &:hover {
    background-color: #fefefe;
    color: #333;
  }
  &:focus {
    background-color: #fefefe;
    outline-width: 0;
    color: #333;
  }
`
export const NavItem = styled.li`
  list-style-type: none;
  color: #ccc;
  float: left;
  margin-right: 10px;
  cursor: pointer;
`
