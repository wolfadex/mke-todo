import React, { Component } from 'react'

export default class AddButton extends Component {
  static getDerivedStateFromProps (nextProps, prevState) {
    if (!nextProps.showAdd && prevState.nextItem !== '') {
      return {
        nextItem: '',
      }
    }

    return null
  }

  state = {
    nextItem: '',
  }

  handleChange = e => {
    this.setState({
      nextItem: e.target.value.substr(0, 22),
    })
  }

  handleDone = e => {
    if (e.keyCode === 13) {
      this.setState({
        nextItem: '',
      })
      this.props.onDone(this.state.nextItem)
    } else {
      console.log(e.keyCode)
    }
  }

  render () {
    const {
      className,
      showAdd,
      onDone,
      onClick,
      onKeyDown,
      ...otherProps
    } = this.props
    const {
      nextItem,
    } = this.state
    const addProps = { ...otherProps }

    if (!showAdd) {
      addProps.onClick = onClick
      addProps.onKeyDown = onKeyDown
    }

    return (
      <li
        {...addProps}
        className={`${className} add-button button`}
        tabIndex="0"
      >
        {!showAdd && '+'}
        {
          showAdd &&
          <input
            autoFocus
            type="text"
            value={nextItem}
            onChange={this.handleChange}
            onKeyDown={this.handleDone}
          />
        }
      </li>
    )
  }
}
