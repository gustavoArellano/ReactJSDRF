import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentUser from './components/ContentUser'
import ContentItem from './components/ContentItem'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return(
      <div className="App">

        <h1>Hello Django, from React!</h1>
        <div className="users-container">
          <h2>Users:</h2>
          <ContentUser />
        </div>

        <div className="items-container">
          <h2>Items:</h2>
          <ContentItem />
        </div>
      </div>
    )
  }

}



export default App;
