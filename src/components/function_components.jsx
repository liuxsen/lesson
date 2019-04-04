import React from 'react'

export default function ProfilePage(props) {
  const showMessage = () => {
    alert('Followed ' + props.user)
  }

  const handleClick = () => {
    setTimeout(showMessage, 3000)
  }

  return <button onClick={handleClick}>Follow</button>
}
