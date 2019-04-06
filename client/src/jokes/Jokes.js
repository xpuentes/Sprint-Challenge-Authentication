import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
  state = {
    jokes: []
  }

  componentDidMount(){
    const headers = {
      authorization: localStorage.getItem('jwt')
    };
    const endpoint = 'http://localhost:3300/api/jokes';
    axios.get(endpoint, { headers })
         .then(res => {
           console.log(res.data);
           this.setState({jokes: res.data});
         })
         .catch(err => {
           console.log(err);
         });
  }

  render() {
    return (
      <>
        <h2>Jokes</h2>
        <ul>
          {this.state.jokes.map(jokes =>
            <li key={jokes.id}>{jokes.joke}</li>
          )}
        </ul>
      </>
    );
  }
}

export default Jokes;
