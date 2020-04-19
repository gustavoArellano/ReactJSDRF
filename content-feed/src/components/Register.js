import React, { Component } from 'react';
import axios from 'axios';
import DjangoCSRFToken from 'django-react-csrftoken';
import { Redirect } from "react-router-dom";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class Regiseter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            UserName: '',
            City: '',
            State: '',
            ZipCode: '',
            Password: '',
            ConfirmPassword: '',
            FirstNameError: '',
            LastNameError: '',
            EmailError: '',
            UserNameError: '',
            CityError: '',
            StateError: '',
            ZipCodeError: '',
            PasswordError: '',
            redirect: false
        }
    
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeZipCode = this.onChangeZipCode.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        // this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChangeFirstName(event) {
        this.setState({
            FirstName: event.target.value
        })
    }

    onChangeLastName(event) {
        this.setState({
            LastName: event.target.value
        })
    }

    onChangeEmail(event) {
        this.setState({
            Email: event.target.value
        })
    }

    onChangeUserName(event) {
        this.setState({
            UserName: event.target.value
        })
    }

    onChangeCity(event) {
        this.setState({
            City: event.target.value
        })
    }

    onChangeState(event) {
        this.setState({
            State: event.target.value
        })
    }

    onChangeZipCode(event) {
        this.setState({
            ZipCode: event.target.value
        })
    }

    onChangePassword(event) {
        this.setState({
            Password: event.target.value
        })
    }

    // onChangeConfirmPassword(event) {
    //     this.setState({
    //         ConfirmPassword: event.target.value
    //     })
    // }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Email: this.state.Email,
            UserName: this.state.UserName,
            City: this.state.City,
            State: this.state.State,
            ZipCode: this.state.ZipCode,
            Password: this.state.Password
        }

        console.log(user)

        axios.post('http://localhost:8000/api/user/', user)
            .then(response => (
                console.log(response.data))
            )
            .then(() => this.setState({redirect: true}))
            .catch(error => {
                this.setState({FirstNameError: error.response.data.FirstName})
                this.setState({LastNameError: error.response.data.LastName})
                this.setState({EmailError: error.response.data.Email})
                this.setState({UserNameError: error.response.data.UserName})
                this.setState({CityError: error.response.data.City})
                this.setState({StateError: error.response.data.State})
                this.setState({ZipCodeError: error.response.data.ZipCode})
                this.setState({PasswordError: error.response.data.Password})
            })

    }

    render() {

        if(this.state.redirect === true) {
            return <Redirect to = {{pathname: "/home"}}/>
        }

        return(
            <div className="RegisterContainer">

                <h1><u>Register: </u></h1>

                    
                <form onSubmit={this.onSubmit}>
                    
                    <DjangoCSRFToken />

                    <label>First Name:</label>
                    <input type="text" required value={this.FirstName} onChange={this.onChangeFirstName}/>
                    <p className="error-message">{ this.state.FirstNameError }</p>

                    <label>Last Name:</label>
                    <input type="text" required value={this.LastName} onChange={this.onChangeLastName}/>
                    <p className="error-message">{ this.state.LastNameError }</p>

                    <label>Email:</label>
                    <input type="text" required value={this.Email} onChange={this.onChangeEmail}/>
                    <p className="error-message">{ this.state.EmailError }</p>

                    <label>Username:</label>
                    <input type="text" required value={this.UserName} onChange={this.onChangeUserName}/>
                    <p className="error-message">{ this.state.UserNameError }</p>

                    <label>City:</label>
                    <input type="text" required value={this.City} onChange={this.onChangeCity}/>
                    <p className="error-message">{ this.state.CityError }</p>

                    <label>State:</label>
                    <input type="text" required value={this.State} onChange={this.onChangeState}/>
                    <p className="error-message">{ this.state.StateError }</p>

                    <label>Zip Code:</label>
                    <input type="text" required value={this.ZipCode} onChange={this.onChangeZipCode}/>
                    <p className="error-message">{ this.state.ZipCodeError }</p>

                    <label>Password:</label>
                    <input type="password" required value={this.Password} onChange={this.onChangePassword}/>
                    <p className="error-message">{ this.state.PasswordError }</p>

                    {/* <label>Confirm Password:</label>
                    <input type="password" required value={this.ConfirmPassword} onChange={this.onChangeConfirmPassword}/>
                    <p className="error-message">{ this.state.ConfirmPasswordError }</p> */}

                    <button className="btn btn-primary" type="submit">Submit</button>
                    
                </form>

            </div>
        )
    }
}

export default Regiseter