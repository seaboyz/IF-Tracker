import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import FastsHistory from './components/FastsHistory'
import FastForm from './components/FastForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fasts: [],
      newFast: {},
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // using one handler to update the all the inputs
    const newFast = {
      ...this.state.newFast,
      [event.target.name]: event.target.value,
    }
    this.setState({ newFast })
  }

  handleSubmit(event) {
    event.preventDefault()
    const fasts = [
      ...this.state.fasts,
      {
        id: Date.now(),
        ...this.state.newFast,
      },
    ]
    const newFast = {}
    this.setState({ fasts, newFast })
  }

  render() {
    return (
      <div>
        <FastForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          start={this.state.newFast.start}
          finish={this.state.newFast.finish}
          weight={this.state.newFast.weight}
          feeling={this.state.newFast.feeling}
          comment={this.state.newFast.comment}
        />
        <FastsHistory fasts={this.state.fasts}/>
      </div>
    )
  }
}

export default App
