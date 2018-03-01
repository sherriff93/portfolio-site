import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/DictionaryView.css'

import {addWord} from '../actions/actions'

import WordForm from './WordForm'
import List from './List'

class DictionaryView extends Component {
  constructor() {
    super()
    this.labels = ['English', 'Spanish']
  }

  render() {
    console.log('view rerender')
    const {name, items, linkPath, onSubmit} = this.props
    const {labels} = this
    return (
      <div>
        {name}
        <Link to={linkPath}>Test</Link>
        <WordForm labels={labels} onSubmit={(values) => onSubmit(values, name)} />
        <List items={items} />
      </div>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmit: (values, name) => {
          dispatch(addWord(values, name))// TODO This needs to be generalised to addDictionaries, addWords
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DictionaryView)
