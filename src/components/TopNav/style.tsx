import styled from 'styled-components'

export const TopWraper = styled.ul`
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
`

export const TopNavItem = styled.li`
  margin: 0 10px;
  color: #80bd01;
  list-style: none;
  margin: 0;
  display: inline-block;
  cursor: pointer;
  &.active {
    background-color: #80bd01;
    color: #fff;
    padding: 3px 4px;
    border-radius: 3px;
    & > a {
      color: #fff;
    }
  }
  & > a {
    text-decoration: none;
    color: #80bd01;
  }
  &:last-child {
    margin: 0;
  }
  &:hover {
    color: #08c;
  }
`
// export const TopNavWraper = styled.
