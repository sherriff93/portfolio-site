import React, { Component } from 'react'
import './AddDictionary.css'

class AddDictionary extends Component {
  render() {
    return (
      <form id="add-dictionary" onSubmit={ this.handleSubmit }>
        <input type="text" required ref="newItem"/>{/* String refs are now deprecated */}
        <input type="submit" value="Hit Me" />
      </form>
    )
  }

  // Custom functions
  handleSubmit (e) {
    e.preventDefault()
    this.props.onAdd(this.refs.newItem.value)
  }
}

export default AddDictionary;
