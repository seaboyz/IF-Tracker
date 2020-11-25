import React from "react";
import "../index.css";

import { Form, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <div className="container contactForm ">
      <div className="row justify-content-center mx-auto">
        <div className="col-4">
            <h1 className="text-center mb-4">Contact Form</h1>
          <Form>
            <Form.Control
              className="mb-3 input "
              type="text"
              placeholder="Name"
              for="name"
            ></Form.Control>
            <Form.Control
              className="mb-3 input "
              type="email"
              placeholder="Email"
              for="email"
            ></Form.Control>
            <Form.Control className="mb-3" as="textarea" rows={3} placeholder="Message" for="message"/>
            <Button variant="primary" type="submit" className="button">
    Submit
  </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
