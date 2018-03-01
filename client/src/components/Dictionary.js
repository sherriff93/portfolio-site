import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/Dictionary.css'

import {deleteDictionary} from '../actions/actions'

class Dictionary extends Component {
  render () {
    console.log('dictionary rerender')
    const {dictionary, onDelete} = this.props
    const {path, name} = dictionary
    return (
      <li>
        <div className="dictionary">
          <span className="name"><Link to={path}>{name}</Link></span>
          <span className="delete" onClick={() => onDelete(name)}> x </span>
        </div>
      </li>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onDelete: (value) => {
          dispatch(deleteDictionary(value))
        }
    }
}

export default connect(
  null,
  mapDispatchToProps
)(Dictionary)
