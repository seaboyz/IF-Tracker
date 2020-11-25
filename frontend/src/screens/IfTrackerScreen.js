import React, { useState } from 'react'

import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import SplitPane from '../components/SplitPane'
import FastsHistory from '../components/FastsHistory'
import FastForm from '../components/FastForm'

function HomeScreen() {
    const formInitialState = {
        start: '',
        finish: '',
        weight: '',
        feeling: '',
        comment: '',
    }
    const [formState, setForm] = useState(formInitialState)
    const [fasts, setFasts] = useState([])

    function handleChange(event) {
        setForm({ ...formState, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()

        setFasts([formState, ...fasts])
        setForm(formInitialState)
    }
    return (
        <div>
            <SplitPane
                left={<FastsHistory fasts={fasts} />}
                right={
                    <FastForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        start={formState.start}
                        finish={formState.finish}
                        weight={formState.weight}
                        feeling={formState.feeling}
                        comment={formState.comment}
                    />
                }
            />
        </div>
    )
}

export default HomeScreen
