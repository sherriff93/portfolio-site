import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../css/Test.css';

import {questionAnswered} from '../actions/actions'

import WordForm from './WordForm'

class Test extends Component {
  constructor(props) {
    super()
    this.labels = ['Spanish']
    this.onSubmit = this.onSubmit.bind(this)
  }

  render() {
    console.log('test rerender')
    const {english} = this.props,
      {labels} = this

    return (
      <div>
        <p>{english}</p>
        <WordForm labels={labels} onSubmit={this.onSubmit} />
      </div>
    )
  }

  // Custom Functions
  onSubmit (guess) {
    const {english, spanish} = this.props,
      {labels} = this

    let isCorrect = 0
    if (guess[labels[0]].toLowerCase() === spanish.toLowerCase()) {
      alert('Correct')
      isCorrect = 1
    }
    this.props.onSubmit(english, isCorrect)
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmit: (english, isCorrect) => {
          dispatch(questionAnswered(english, isCorrect))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Test)
