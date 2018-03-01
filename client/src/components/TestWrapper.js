import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/TestWrapper.css'

import {setItems} from '../actions/actions'
import {resetScore} from '../actions/actions'

import Test from './Test'

class TestWrapper extends Component {
  constructor(props) {
    super(props)
    const {initialItems} = props
    this.props.setItems(initialItems)
  }

  render() {
    console.log('wrapper rerender')
    console.log(this.props.items)
    const {linkPath, items, score, resetScore} = this.props,
      inProgress = items.length > 0
    let english = null,
      spanish = null

    if (inProgress) {
      let item = items[Math.floor(Math.random()*items.length)]
      english = item.english
      spanish = item.spanish
    }

    return (
      <div>
        <Link to={linkPath} onClick={resetScore}>Back to Dictionary</Link>
        {inProgress ? (
          <Test english={english} spanish={spanish} />
        ) : (
          <p>Test Complete! You got {score} correct</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = function(store, ownProps) {
    return {
        items: store.testWrapperState.items,
        score: store.testWrapperState.score
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        setItems: (items) => dispatch(setItems(items)),
        resetScore: () => dispatch(resetScore())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestWrapper)
