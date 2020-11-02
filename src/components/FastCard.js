import React, { useState } from 'react'

import { Card } from 'react-bootstrap'

function FastCard({ variant, idx }) {
  const [value, onChange] = useState(new Date())

  return (
    <Card
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem' }}
      className='mb-2 mx-auto'
    >
      <Card.Header>
        <div>Date</div>
      </Card.Header>

      <Card.Body>
        <Card.Title>Intermittent</Card.Title>
        <Card.Title>From 00:00 To 00:00 </Card.Title>
        <Card.Title>XXX LB</Card.Title>
        <Card.Title>Feeling Meter</Card.Title>
        <Card.Text>Comments...</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default FastCard
