import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export class TodoItem extends Component {
  render() {
    return (
      <h2 style={{backgroundColor: '#fafafa'}}>{this.props.todo.title}</h2>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem