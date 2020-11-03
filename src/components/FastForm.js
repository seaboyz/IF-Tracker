import React from 'react'
import { Button, Form } from 'react-bootstrap'

function FastForm({
  handleSubmit,
  handleChange,
  start,
  finish,
  weight,
  feeling,
  comment,
}) {
  return (
    <Form onSubmit={handleSubmit} autoComplete='off'>
      <Form.Group>
        <Form.Label for='start'>start</Form.Label>
        <Form.Control
          type='text'
          name='start'
          id='start'
          value={start}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for='finish'>finish:</Form.Label>
        <Form.Control
          type='text'
          name='finish'
          id='finish'
          value={finish}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for='weight'>weight:</Form.Label>
        <Form.Control
          type='weight'
          name='weight'
          id='weight'
          value={weight}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for='feeling'>feeling:</Form.Label>
        <Form.Control
          type='feeling'
          name='feeling'
          id='feeling'
          value={feeling}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for='comment'>comment:</Form.Label>
        <Form.Control
          type='comment'
          name='comment'
          id='comment'
          value={comment}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
      <Button
        className='btn-success'
        type='reset'
        style={{ background: 'darkred' }}
      >
        Reset
      </Button>
    </Form>
  )
}

export default FastForm
