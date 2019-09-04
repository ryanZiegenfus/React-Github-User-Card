import React from 'react';
import './App.css';
import axios from "axios";
import CardList from "./CardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personal: {data: ""},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/ryanZiegenfus')
    .then (res => this.setState({personal: res}))
    axios.get('https://api.github.com/users/ryanZiegenfus/followers')
    .then (res => this.setState({followers: res.data}))
  }

  render() {
      return (
        <div className="App">
          <CardList user={this.state.personal} followers={this.state.followers}/>
        </div>
      );
  }
}

export default App;
