import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Number of shits you wanna hear about you :</Form.Label>
          <Form.Control
            type="number"
            placeholder="1, 2, 3 ..."
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="John, Jane, Mary ..."
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Doe, Smith, Williams ..."
            required
          ></Form.Control>
        </Form.Group>

        <Button variant="warning" type="submit" size="lg">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default App;
