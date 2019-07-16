import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import userService from '../../utils/userService'
import './App.css';
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import HomePage from '../HomePage/HomePage'
import ContactPage from '../ContactPage/ContactPage'
import ContentPage from '../ContentPage/ContentPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    }
  }

  handleLogout = () => {
    userService.logOut();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact path='/' render={() =>
                <HomePage
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              } />
              <Route exact path='/signup' render={({ history }) =>
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              } />
              <Route exact path='/login' render={({ history }) =>
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              } />
              <Route exact path='/content-library' render={() =>
                <ContentPage
                user={this.state.user}
                handleLogout={this.handleLogout}
                />
              } />
              <Route exact path='/contact' render={({ history }) =>
                <ContactPage
                  history={history}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  contacts={this.state.contacts}
                  handleUpdateContacts={this.handleUpdateContacts}
                />
              } />
            </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
