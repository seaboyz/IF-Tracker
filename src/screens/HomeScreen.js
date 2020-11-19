import React, { useState } from 'react'

import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import SplitPane from '../components/SplitPane'
import FastsHistory from '../components/FastsHistory'
import FastForm from '../components/FastForm'

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
        setNewFast({ ...newFast, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()

        setFasts([
            // add newFast on top of fasts
            // so in this way the fastsHistory always shows the latest fast first.
            newFast,
            ...fasts,
        ])
        setNewFast({
            start: '',
            finish: '',
            weight: '',
            feeling: '',
            comment: '',
        })
    }
    return (
        <div>
            <SplitPane
                left={<FastsHistory fasts={fasts} />}
                right={
                    <FastForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        start={newFast.start}
                        finish={newFast.finish}
                        weight={newFast.weight}
                        feeling={newFast.feeling}
                        comment={newFast.comment}
                    />
                }
            />
        </div>
    )
}

export default HomeScreen
