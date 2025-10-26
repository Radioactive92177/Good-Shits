import React from "react";
import { Container } from "react-bootstrap";
import Joke from "./Joke";

const Jokes = ({ jokes }) => {
  return (
    <Container className="my-5">
      {jokes.map((joke) => (
        <Joke key={joke.id} id={joke.id} joke={joke.joke} />
      ))}
    </Container>
  );
};

export default Jokes;
