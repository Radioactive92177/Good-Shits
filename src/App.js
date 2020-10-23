import React, { Component } from "react";
import UserInput from "./components/UserInput";
import axios from "axios";
import Jokes from "./components/Jokes";

class App extends Component {
  state = { jokes: [] };

  onFormSubmit = async (jokeData) => {
    console.log(jokeData);
    const { data } = await axios.get(
      `https://api.icndb.com/jokes/random/${jokeData["numberOfJokes"]}/limitTo=explicit?firstName=${jokeData["firstName"]}&lastName=${jokeData["lastName"]}`
    );
    this.setState({ jokes: data.value });
  };

  render() {
    return (
      <>
        <UserInput onSubmit={this.onFormSubmit} />
        <Jokes jokes={this.state.jokes} />
      </>
    );
  }
}

export default App;
