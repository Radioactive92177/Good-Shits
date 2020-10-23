import React, { Component } from "react";
import UserInput from "./components/UserInput";
import axios from "axios";
import Jokes from "./components/Jokes";

class App extends Component {
  state = { jokes: [] };

  onFormSubmit = async (dataArray) => {
    const { data } = await axios.get(
      `https://api.icndb.com/jokes/random/${dataArray[0]}/limitTo=explicit?firstName=${dataArray[1]}&lastName=${dataArray[2]}`
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
