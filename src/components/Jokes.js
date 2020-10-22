import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";

import Joke from "./Joke";

const Jokes = ({ numberOfJokes, firstName, lastName }) => {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const { data } = await axios.get(
        `https://api.icndb.com/jokes/random/${numberOfJokes}/limitTo=explicit?firstName=${firstName}&lastName=${lastName}`
      );
      setjokes(data.value);
    };
    fetchJokes();
  }, []);

  return (
    <Container className="my-5">
      {jokes.map((joke) => (
        <Joke id={joke.id} joke={joke.joke} />
      ))}
    </Container>
  );
};

Jokes.defaultProps = {
  numberOfJokes: 3,
  firstName: "John",
  lastName: "Doe",
};
Jokes.propTypes = {
  numberOfJokes: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Jokes;
