import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import SignUp from './signup/SignUp';
import LogIn from './login/LogIn';
import Jokes from './jokes/Jokes';

import './App.css';

class App extends Component {

  signout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <header>
          <nav>
            <NavLink to='/signup'>Sign Up</NavLink>
            &nbsp; | &nbsp;
            <NavLink to='/login'>Sign In</NavLink>
            &nbsp; | &nbsp;
            <NavLink to='/jokes'>Jokes</NavLink>
            &nbsp; | &nbsp;
            <button onClick={this.signout}>Sign Out</button>
          </nav>
        </header>
        <main>
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route path='/jokes' component={Jokes} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
