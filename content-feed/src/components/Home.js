import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'


class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  render() {
    return(

      <div className="home">
        
        <NavBar />

        <h1>Hello Django, from React!</h1>

        <h2><u>Welcome to the Homepage [USER LOGGEDIN]!!!</u></h2>
        
      </div>
    )
  }
}

export default Home