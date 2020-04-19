import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NavBar from './NavBar'


const User = props => (

    <div className="user-card">

        <img src={props.user.Image} alt=""/>

        <p>{ props.user.FirstName } { props.user.LastName }</p>

        <p>{ props.user.Email }</p>

        <p>{ props.user.ZipCode }</p>

    </div>

);

const Empty = () => (
    <h1 className="empty">There are no users registerd!!!</h1>
)

class ContentUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/user/')
          .then(results => this.setState({ users: results.data }))
    }

    userList() {
        return this.state.users.map(user => { 
            if (user.length === 0) {
                return <Empty />
            } else {
                return <User user={user} key={user.id} />
            }
        })
      }

    render() {
        return(

            <div className="App">
                <NavBar />


                <h2>Users:</h2>

                { this.userList() }

            </div>
        )
    }
}

export default ContentUser