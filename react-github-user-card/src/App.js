import React from 'react';
import './App.css';
import axios from "axios";
import CardList from "./CardList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      followers: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/ryanZiegenfus')
    .then (res => this.setState({users: res}))
    .then(res => axios.get(this.state.users.data.followers_url).then(response => this.setState({followers: response})))
    .then(res => {console.log(this.state.users.data, this.state.followers.data)})
  }

  render() {
    return (
      <div className="App">
        <CardList user={this.state.users.data} followers={this.state.followers.data}/>
      </div>
    );
  }

}

export default App;
