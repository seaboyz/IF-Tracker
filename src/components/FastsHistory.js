import React from 'react'

import FastCard from './FastCard'

import fastCardBackgroudColors from './fastCardBackgroudColors'

function FastsHistory() {
  return fastCardBackgroudColors
    .slice(0, 7) // number of Fast cards show on the landing page
    .map((variant, idx) => <FastCard variant={variant} idx={idx} />)
}

export default FastsHistory
