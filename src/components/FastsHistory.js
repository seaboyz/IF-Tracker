import React from 'react'

import FastCard from './FastCard'

function FastsHistory({ fasts }) {
  return fasts.map(fast => (
    <FastCard
      key={fast.id}
      id={fast.id}
      start={fast.start}
      finish={fast.finish}
      weight={fast.weight}
      feeling={fast.feeling}
      comment={fast.comment}
    />
  ))
}

export default FastsHistory
