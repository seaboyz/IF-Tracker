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
    <Form
      className='px-4 py-3 mx-auto my-5 border border-secondary'
      style={{ width: '18rem' }}
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <Form.Group>
        <Form.Label for='start'>start</Form.Label>
        <Form.Control
          type='datetime-local'
          name='start'
          id='start'
          value={start}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for='finish'>finish:</Form.Label>
        <Form.Control
          type='datetime-local'
          name='finish'
          id='finish'
          value={finish}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for='weight'>weight:</Form.Label>
        <Form.Control
          type='number'
          name='weight'
          id='weight'
          placeholder='123 LB'
          value={weight}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for='feeling'>feeling:</Form.Label>
        <Form.Control
          type='number'
          name='feeling'
          id='feeling'
          placeholder='1-10'
          value={feeling}
          onChange={handleChange}
          min='1'
          max='10'
        />
      </Form.Group>
      <Form.Group>
        <Form.Label for='comment'>comment:</Form.Label>
        <Form.Control
          as='textarea'
          type='text'
          name='comment'
          id='comment'
          placeholder='How do you feel?'
          value={comment}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className='brn-primary ' type='submit'>
        Submit
      </Button>
      {/* A click on a reset button resets all the form widgets to their default value immediately. From a UX point of view, this is considered bad practice, so you should avoid using this type of button unless you really have a good reason to include one. */}
      {/* <Button
        className='btn-success mx-2'
        type='reset'
        style={{ background: 'darkred' }}
      >
        Reset
      </Button> */}
    </Form>
  )
}

export default FastForm
