import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class UserInput extends Component {
  state = {
    numberOfJokes: null,
    firstName: "",
    lastName: "",
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      numberOfJokes: this.state.numberOfJokes,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
  };

  render() {
    return (
      <Container className="my-3">
        <Form onSubmit={this.onFormSubmit}>
          <Form.Group>
            <Form.Label>Number of shits you wanna hear about you :</Form.Label>
            <Form.Control
              type="number"
              placeholder="1, 2, 3 ..."
              required
              onChange={(e) => {
                this.setState({ numberOfJokes: e.target.value });
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="John, Jane, Mary ..."
              required
              onChange={(e) => {
                this.setState({ firstName: e.target.value });
              }}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Doe, Smith, Williams ..."
              required
              onChange={(e) => {
                this.setState({ lastName: e.target.value });
              }}
            ></Form.Control>
          </Form.Group>

          <Button
            variant="warning"
            type="submit"
            size="lg"
            style={{ width: "100%", fontWeight: "900" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default UserInput;
