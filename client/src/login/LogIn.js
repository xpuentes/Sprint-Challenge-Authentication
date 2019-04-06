import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoginForm = styled.form`
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 200px;
  margin: 0 auto;
  background: lightgray;
`
const Inputs = styled.input`
  border: none;
  border-radius: 3px;
  margin-bottom: 5px;
  font-size: 20px;
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  border-radius: 3px;
  margin-top: 10px;
`

class LogIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:3300/api/login';

    axios.post(endpoint, this.state)
         .then(res => {
           localStorage.setItem('jwt', res.data.token);
           this.props.history.push('/jokes');
         })
         .catch(err => {
           console.log(err);
         });
  }

  render() {
    return (
      <>
        <h2>Log In</h2>
        <LoginForm onSubmit={this.handleSubmit}>
          <Inputs
            name = 'username'
            id = 'username'
            placeholder = 'Username'
            value = {this.state.username}
            onChange = {this.handleInputChange}
            type = 'text'
          />
          <Inputs
            name = 'password'
            id = 'password'
            placeholder = 'Password'
            value = {this.state.password}
            onChange = {this.handleInputChange}
            type = 'password'
          />
          <div>
            <Button type='submit'>Sign In</Button>
          </div>
        </LoginForm>
      </>
    );
  }
}

export default LogIn;
