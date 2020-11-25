import React from 'react'

import shortid from 'shortid'

import FastCard from './FastCard'

function FastsHistory({ fasts }) {
    return fasts.map(fast => (
        <FastCard
            key={shortid()}
            date={fast.finish}
            start={fast.start}
            finish={fast.finish}
            weight={fast.weight}
            feeling={fast.feeling}
            comment={fast.comment}
        />
    ))
}

export default FastsHistory
