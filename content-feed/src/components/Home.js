import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentUser from './ContentItem'
import NavBar from './NavBar'
import LoginAndReg from './LoginAndReg'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  render() {
    return(

      <div class="home">
        
        <NavBar />

        <h1>Hello Django, from React!</h1>

        <h2><u>Welcome to the Homepage [USER LOGGEDIN]!!!</u></h2>
        
      </div>
    )
  }
}

export default Home