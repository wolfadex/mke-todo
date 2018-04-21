import React, { Component } from 'react'

export default class ToggleButton extends Component {
  render () {
    const {
      isDone,
      className,
      ...otherProps
    } = this.props

    return (
      <div {...otherProps} className={`${className} toggle-outer`} tabIndex="0">
        {isDone && <div className="toggle-inner" />}
      </div>
    )
  }
}
