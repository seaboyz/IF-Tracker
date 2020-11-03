import React from 'react'

import { Card } from 'react-bootstrap'

function FastCard({ id, start, finish, weight, feeling, comment }) {
  return (
    <Card
      bg='primary'
      key={id}
      text='white'
      style={{ width: '18rem' }}
      className='mb-2 mx-auto'
    >
      <Card.Header>
        <div>Date</div>
      </Card.Header>

      <Card.Body>
        <Card.Title>Intermittent</Card.Title>
        <Card.Title>
          From {start}To {finish}
        </Card.Title>
        <Card.Title>{weight} LB</Card.Title>
        <Card.Title>Feeling {feeling}</Card.Title>
        <Card.Title>Comments {comment}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default FastCard
