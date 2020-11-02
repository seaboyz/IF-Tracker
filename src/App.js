import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import FastCard from './components/FastCard'

import fastCardBackgroudColors from './components/fastCardBackgroudColors'

function App() {
  return fastCardBackgroudColors
    .slice(0, 7) // number of Fast cards show on the landing page
    .map((variant, idx) => <FastCard variant={variant} idx={idx} />)

}

export default App
