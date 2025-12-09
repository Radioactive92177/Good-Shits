import React, { Component } from "react";
import UserInput from "./components/UserInput";
import axios from "axios";
import Jokes from "./components/Jokes";

class App extends Component {
  state = { jokes: [] };

  onFormSubmit = async (jokeData) => {
    console.log(jokeData);
    const numberOfJokes = jokeData["numberOfJokes"];
    const firstName = jokeData["firstName"];
    const lastName = jokeData["lastName"];
    const fullName = `${firstName} ${lastName}`;
    
    try {
      // Fetch multiple jokes from JokeAPI
      const promises = [];
      for (let i = 0; i < numberOfJokes; i++) {
        promises.push(axios.get('https://v2.jokeapi.dev/joke/Any?safe-mode'));
      }
      
      const responses = await Promise.all(promises);
      const jokes = responses.map((response, index) => {
        let jokeText = '';
        
        // JokeAPI returns either a single joke or a two-part joke
        if (response.data.type === 'single') {
          jokeText = response.data.joke;
        } else {
          jokeText = `${response.data.setup} ${response.data.delivery}`;
        }
        
        // Replace "Chuck Norris" with the user's name
        jokeText = jokeText.replace(/Chuck Norris/gi, fullName);
        
        return {
          id: index + 1,
          joke: jokeText
        };
      });
      
      this.setState({ jokes });
    } catch (error) {
      console.error('Error fetching jokes:', error);
      this.setState({ 
        jokes: [{
          id: 1,
          joke: `Sorry ${fullName}, we couldn't fetch jokes at this time. Please try again later.`
        }]
      });
    }
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
