import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginAndReg from './components/LoginAndReg'
import Home from './components/Home'
import ContentUser from './components/ContentUser';
import ContentItem from './components/ContentItem'



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

            <Route path="/home" exact component = {Home} />

            <Route path="/users" exact component = {ContentUser} />

            <Route path="/items" exact component = {ContentItem} />
          </Switch>
        </div>
      </Router>


    )
  }

}

export default App;
