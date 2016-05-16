import React from 'react'

const NEST_URL = `https://home.nest.com/login/oauth2?client_id=9f7aea83-66fb-46e1-ade2-e3750d2e9d49&state=1234`
const WINDOW_SPECS = "width=400, height=400, top=100, left=100"

export default (message) => {
  let response

  switch(message) {
    case 'link nest':
      window.open(NEST_URL, '', WINDOW_SPECS)
      response = <span>Logging you in...</span>
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