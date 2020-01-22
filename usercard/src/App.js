import React from 'react';
import './App.css';
import Card from "./Followers"

class App extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/Tosinnijis1`)
    .then (response => response.json())

    .then (userData => {

      this.setState({ 
        ...this.state, user: userData
      })
      
    });

  }
  
    
  
  render() {
    return (
      <div className="App-header">
        <h1> User Card </h1>

          <Card user={this.state.user} />
    </div>






      

    )
  }
}

export default App;
