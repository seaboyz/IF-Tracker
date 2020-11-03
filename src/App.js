import React, { Component } from 'react'

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import FastsHistory from './components/FastsHistory'
import FastForm from './components/FastForm'

class App extends Component {
  render() {
    return (
      <div>
        <FastForm />
        <FastsHistory />
      </div>
    )
  }
}

export default App
