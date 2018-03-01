import React, { Component } from 'react'
import './DictionaryList.css'

import Dictionary from '../Dictionary/Dictionary'

class DictionaryList extends Component {
  constructor(props) {
    super()
    this.state = {
      dictionaries: ['Harry Potter', 'Things I\'ve heard', 'Woofing']
    }
    this.onDelete = this.onDelete.bind(this)
  }

  render () {
    var dictionaries = this.state.dictionaries
    dictionaries = dictionaries.map(function (dictionary, index) {
      return (
        <Dictionary name={ dictionary } key={ index } onDelete={ this.onDelete } />
      )
    }.bind(this))

    return (
      <div id="dictionary-list">
        <ul>{ dictionaries }</ul>
      </div>
    )
  }

  // Custom functions
  onDelete (dictionary) {
    var updated = this.state.dictionaries.filter(function(val, index) {
      return dictionary !== val
    })
    //Below changes the component state
    this.setState({
      dictionaries: updated
    })
  }
}

export default DictionaryList;
