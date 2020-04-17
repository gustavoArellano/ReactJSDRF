import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import Register from './Register';

class LoginAndReg extends Component {
    constructor() {
      super()
      this.state = {}
    }
  
  
    render() {
  
      return(
    
          <div className="App">
            
            <Login />
  
            <Register />
  
          </div>
  
      )
    }
  
  }
  
  export default LoginAndReg;