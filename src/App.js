import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './app.css'
import AddButton from './AddButton'
import ToggleButton from './ToggleButton'

const localStorageKey = 'wolfadex-mke-todo'

const ifKeyThen = next => e => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    next(e)
  }
}

const saveLocally = list => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(list))
}

class App extends Component {
  constructor (props) {
    super(props)

    let storedList = window.localStorage.getItem(localStorageKey)

    if (storedList) {
      try {
        storedList = JSON.parse(storedList)

        this.state = {
          list: storedList,
          showAdd: false,
        }
      } catch (e) {
        this.state = {
          list: [],
          showAdd: false,
        }
      }
    } else {
      this.state = {
        list: [],
        showAdd: false,
      }
    }
  }

  handleAdd = newItem => {
    this.setState(({ list }) => {
      const newList = [...list, { text: newItem, done: false }]

      saveLocally(newList)

      return {
        list: newList,
        showAdd: false,
      }
    })
  }

  toggleDone = i => () => {
    this.setState(({ list }) => {
      const newList = [
        ...list.slice(0, i),
        {
          ...list[i],
          done: !list[i].done,
        },
        ...list.slice(i + 1),
      ]

      saveLocally(newList)

      return {
        list: newList,
      }
    })
  }

  handleDelete = i => () => {
    this.setState(({ list }) => {
      const newList = [
        ...list.slice(0, i),
        ...list.slice(i + 1),
      ]

      saveLocally(newList)

      return {
        list: newList,
      }
    })
  }

  render () {
    const {
      list,
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
