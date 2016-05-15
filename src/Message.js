import React from 'react'

const userStyle = {
  textAlign: 'right'
}

const computerStyle = {
  textAlign: 'left'
}

const Message = (props) => {
  let result
  switch(props.type) {
    case('user'):
      result = (<div style={userStyle}>{props.text}</div>)
      break;
    case('computer'):
      result = (<div style={computerStyle}>{props.text}</div>)
      break;
  }

  return result
}

export default Message