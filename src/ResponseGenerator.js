import React from 'react'

const Login = (props) => {
  return <div>Boom!</div>
}

export default (message) => {

  let response

  switch(message) {
    case 'login':
      response = <Login />
    break;
    default:
      response = <span>{message}? That's nice.</span>
  }
  return {
    type: 'computer'
  , time: new Date().toISOString()
  , text: response
  }
}