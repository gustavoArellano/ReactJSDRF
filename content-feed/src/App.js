import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentItem from './components/ContentItem'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return(
      <div>

        <h1>Hello Django, from React!</h1>

        <ContentItem />

      </div>
    )
  }

}



export default App;
