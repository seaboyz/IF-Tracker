import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import IfTrackerScreen from './screens/IfTrackerScreen'
import ResourcesScreen from './screens/ResourcesScreen'

function App() {
    return (
        <Router>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/iftracker' component={IfTrackerScreen} />
            <Route path='/resources' component={ResourcesScreen} />
        </Router>
    )
}

export default App
