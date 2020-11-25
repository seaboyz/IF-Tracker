import React from 'react'
import ReactDOM from 'react-dom'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import HomeScreen from './screens/HomeScreen'

ReactDOM.render(
    <React.StrictMode>
        <HomeScreen />
    </React.StrictMode>,
    document.getElementById('root')
)
