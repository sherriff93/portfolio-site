// OnSubmit doesn't work

import React, { Component } from 'react'
import './WordForm.css'

class WordForm extends Component {
  constructor(props) {
    super(props)
    const {inputsArray} = this.props
    // var inputsArray = {}
    // for (var i = 0; i < numberOfInputs; i++) {
    //   inputsArray['input' + String(i + 1)] = ''
    // }
    this.state = {
      inputsArray: inputsArray
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    var {inputsArray} = this.state
    inputsArray = inputsArray.map(function (input, index) {
      let thisID = "input" + index
      return (
        <label key={ index }>
          {input.label}:
          <input type="text" id={thisID} value={input.value} onChange={(e) => this.handleChange(index,e)} />
        </label>
      )
    }.bind(this))

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {inputsArray}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

  // Custom functions
  handleChange(index,e) {
    const {inputsArray} = this.state
    inputsArray[index].value = e.target.value
    this.setState({inputsArray: inputsArray})
  }

  handleSubmit(e) {
    var targetValue = this.state.input1
    if (targetValue) {
      this.props.onSubmit(targetValue)
      this.setState({input1: ''})
      document.getElementById("word-input").focus()
    }
    e.preventDefault()
  }
}

export default WordForm
