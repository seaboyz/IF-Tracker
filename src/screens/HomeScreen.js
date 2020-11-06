import React, { useEffect } from 'react'
import shortid from 'shortid'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import SplitPane from './components/SplitPane'
import FastsHistory from './components/FastsHistory'
import FastForm from './components/FastForm'

function HomeScreen() {
  const [newFast, setNewFast] = useState({
    start: '',
    finish: '',
    weight: '',
    feeling: '',
    comment: '',
  })
  const [fasts, setFasts] = useState([])

  function handleChange(event) {
    // using one handler to update the all the inputs
    const newFast = {
      ...this.state.newFast,
      // computed property name [..]
      [event.target.name]: event.target.value,
    }
    this.setState({ newFast })

    return <div></div>
  }
}

export default HomeScreen
