import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './app.css'
import AddButton from './AddButton'
import ToggleButton from './ToggleButton'

const ifKeyThen = next => e => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    next(e)
  }
}

class App extends Component {
  state = {
    list: [],
    showAdd: false,
  }

  componentDidMount () {
    window.addEventListener('keydown', this.stopAdding)
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.stopAdding)
  }

  stopAdding = e => {
    if (e.keyCode === 27) {
      this.setState({
        showAdd: false,
      })
    }
  }

  showAdd = () => {
    this.setState({
      showAdd: true,
    })
  }

  handleAdd = newItem => {
    this.setState(({ list }) => ({
      list: [...list, { text: newItem, done: false }],
      showAdd: false,
    }))
  }

  toggleDone = i => () => {
    this.setState(({ list }) => ({
      list: [
        ...list.slice(0, i),
        {
          ...list[i],
          done: !list[i].done,
        },
        ...list.slice(i + 1),
      ],
    }))
  }

  handleDelete = i => () => {
    this.setState(({ list }) => ({
      list: [
        ...list.slice(0, i),
        ...list.slice(i + 1),
      ],
    }))
  }

  render () {
    const {
      list,
      showAdd,
    } = this.state
    const fullList = [...list]

    fullList.push({
      add: true,
    })
    fullList.push({})
    fullList.push({})

    while (fullList.length < 5) {
      fullList.push({})
    }

    if (fullList.length % 2 === 0) {
      fullList.push({})
    }

    return (
      <div className="app">
        <header className="mustard">
          <div className="white circle-top">
            MKE Todo
          </div>
        </header>
        <ul>
          {fullList.map(({ text, done, add } = {}, i) => {
            const colors = i % 2 === 0 ? 'process-blue' : 'national-flag-blue'
            if (add) {
              return (
                <AddButton
                  className={colors}
                  onClick={this.showAdd}
                  onKeyDown={ifKeyThen(this.showAdd)}
                  showAdd={showAdd}
                  onDone={this.handleAdd}
                />
              )
            }
            return (
              <li key={i} className={colors}>
                {
                  text &&
                  <ToggleButton
                    isDone={done}
                    className={`done-button ${i % 2 === 0 ? 'national-flag-blue' : 'process-blue'}`}
                    onClick={this.toggleDone(i)}
                    onKeyDown={ifKeyThen(this.toggleDone(i))}
                  />
                }
                {text && <span className={`list-item ${done ? 'done' : ''}`}>{text}</span>}
                {
                  text &&
                  <span
                    tabIndex="0"
                    className="delete-button button"
                    onClick={this.handleDelete(i)}
                    onKeyDown={ifKeyThen(this.handleDelete(i))}
                  >
                    x
                  </span>
                }
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default hot(module)(App)
