import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import FastsHistory from './components/FastsHistory'
import FastForm from './components/FastForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fasts: [],
      // newFast: {},
      // initialize the newFast with properties of empty string instead of empty object 
      // newFast is the empty object,
      // after the first rendering 
      // start={this.state.newFast.start} 
      // start={undefined}
      // undefined is passed to the FastForm component
      // the value atrribute become undefined 
      // Because of that, the input field will become uncontrolled.
      //  uncontrolled components, where form data is handled by the DOM itself.
      // In a controlled component, form data is handled by a React component.
      // the reason refernce to the following link
      // https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
      // https://reactjs.org/docs/uncontrolled-components.html
      newFast: { start: '', finish: '', weight: '', feeling: '', comment: '' },
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
      // add newFast on top of fasts
      // so in this way the fastsHistory always shows the latest fast first.
      {
        id: Date.now(),
        date: new Date().toString(),
        ...this.state.newFast,
      },
      ...this.state.fasts,
    ]
    // const newFast = {}
    // rest the newFast with properties of empty string instead of empty object 
      // the reason refernce to the following link
      // https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro
    const newFast = {
      start: '',
      finish: '',
      weight: '',
      feeling: '',
      comment: '',
    }
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
        <FastsHistory fasts={this.state.fasts} />
      </div>
    )
  }
}

export default App
