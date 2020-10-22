import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Joke from "./Joke";
const Jokes = () => {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const { data } = await axios.get(
        `https://api.icndb.com/jokes/random/3/limitTo=explicit?firstName=Chuck&lastName=Norris`
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

export default Jokes;
