import React, { Component } from 'react';
import '../static/css/ContentItem.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const User = props => (
    <Row className="ContentItem">
        <Col xs="12" sm="6">
            <Card className="Card">
                <CardImg className="CardImage" src={props.user.Image}></CardImg>
                <CardBody>
                    <CardTitle>
                        Full Name: { props.user.FirstName } { props.user.LastName }
                    </CardTitle>
                    <CardText>
                        User Details: { props.user.Email } | {props.user.ZipCode}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    </Row>
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
          return <User user={user} key={user.id} />
        })
      }

    render() {
        return(
            <div>
                { this.userList() }
            </div>
        )
    }
}

export default ContentUser