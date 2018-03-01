import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Item.css'

import {deleteWord} from '../actions/actions'

class Item extends Component {
  render () {
    console.log('item rerender')
    const {english, onDelete} = this.props
    return (
      <li>
        <div className="item">
          <span className="name">{english}</span>
          <span className="delete" onClick={() => onDelete(english)}> x </span>
        </div>
      </li>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onDelete: (value) => {
          dispatch(deleteWord(value))
        }
    }
}

export default connect(
  null,
  mapDispatchToProps
)(Item)
