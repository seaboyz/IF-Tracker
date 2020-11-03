import React from 'react'

import { Card } from 'react-bootstrap'

function FastCard({ id, date,start, finish, weight, feeling, comment }) {

  return (
    <Card
      bg='primary'
      // key={id}
      text='white'
      style={{ width: '18rem' }}
      className='mb-2 mx-auto'
    >
      <Card.Header>
      {/* need to be converted to mm-dd-yyyy */}
        {date.slice(0,10)}
      </Card.Header>
      <Card.Body>
        <Card.Title>Intermittent</Card.Title>
        <Card.Title>
          From {start} To {finish}
        </Card.Title>
        <Card.Title>{weight} LB</Card.Title>
        <Card.Title>Feeling {feeling}</Card.Title>
        <Card.Title>Comments {comment}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default FastCard
