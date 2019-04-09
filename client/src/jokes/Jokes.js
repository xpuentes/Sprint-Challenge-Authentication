import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const JokeBox = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 15px;
`

class Jokes extends React.Component {
  state = {
    jokes: [],
    current: 0
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
      <div>
        <h2>Jokes</h2>
        <div>
          {this.state.jokes.map(jokes =>
            <JokeBox key={jokes.id}>{jokes.joke}</JokeBox>
          )}
        </div>
      </div>
    );
  }
}

export default Jokes;
