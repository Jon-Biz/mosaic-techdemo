import "babel-polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'

require('./style.css')

import Message from './Message.js'
import responseGenerator from './responseGenerator.js'

const log = [ {type:'computer',text:'How may I help you?'} ]

class MosaicCLI extends Component{


  constructor(props) {
    super(props);
    this.state = { log }
  }

  onSubmit(event) {

    log.push({
      type:'user'
    , time: new Date().toString()
    , text:this.state.value
    })

    this.setState({log})

    const response = responseGenerator(this.state.value)

    setTimeout(() => {
      if(response) log.push(response)
      this.setState({log})
    }, 500)
  }

  onChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    const log = this.state.log
    const onChange = this.onChange.bind(this)
    const onSubmit = this.onSubmit.bind(this)

    const logStyle = {
      maxWidth: '30em'
    }

    const inputBoxStyle = {
      position: 'absolute'
    , bottom: '1em'
    , width: '90%'
    , display: 'flex'
    }

    const inputStyle = {
      width: '100%'
    }

    return (
      <div>
        <h1>Mosaic CLI</h1>
          <div style={logStyle}>
            { log.map(message => <Message key={message.time} {...message} />) }
          </div>
          <div style={inputBoxStyle}>
            <input style={inputStyle} type="text" onChange={onChange} />
            <button onClick={onSubmit} >
              Enter
            </button>
          </div>
      </div>
    )
  }
}

const content = document.getElementById('app')

ReactDom.render(<MosaicCLI />, content)
