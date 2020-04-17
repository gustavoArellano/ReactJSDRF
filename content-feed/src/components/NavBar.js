import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class NavBar extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <div className="nav-bar">
                <ul>
                    <h5>
                        <Link to="/home" className="nav-link">ReactDjango</Link>
                    </h5>

                    <li>
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>

                    <li>
                        <Link to="/users" className="nav-link">Users</Link>
                    </li>

                    <li>
                        <Link to="/items" className="nav-link">Items</Link>
                    </li>

                    <li>
                        <Link to="/" className="nav-link">Logout</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;