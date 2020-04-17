import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import LoginAndReg from './components/LoginAndReg'


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {

    return(

      <Router>

        <div className="App">

        <Switch>

          <Route path="/" exact component = {LoginAndReg} />

          <Route path="/Home" exact component = {Home} />

        </Switch>

        </div>

    </Router>
    )
  }

}

export default App;
