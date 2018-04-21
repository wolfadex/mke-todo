import React, { Component } from 'react'

const ifKeyThen = next => e => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    next(e)
  }
}

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
    showAdd: false,
  }

  componentDidMount () {
    window.addEventListener('keydown', this.stopAdding)
    window.addEventListener('click', this.stopAdding)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.stopAdding)
    window.removeEventListener('click', this.stopAdding)
  }

  stopAdding = e => {
    if (e.keyCode === 27) {
      this.stopAdd()
    }
  }

  stopAdd = () => {
    this.setState({
      showAdd: false,
      nextItem: '',
    })
  }

  showAdd = () => {
    this.setState({
      showAdd: true,
    })
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
      onDone,
      onClick,
      onKeyDown,
      ...otherProps
    } = this.props
    const {
      nextItem,
      showAdd,
    } = this.state
    const addProps = { ...otherProps }

    if (!showAdd) {
      addProps.onClick = this.showAdd
      addProps.onKeyDown = ifKeyThen(this.showAdd)
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
            onBlur={this.stopAdd}
          />
        }
      </li>
    )
  }
}
