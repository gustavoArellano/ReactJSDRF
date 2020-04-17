import React, { Component } from 'react';
import '../static/css/ContentItem.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar'
import '../App.css';
import { Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const Item = props => (
    <Row className="ContentItem">
        <Col xs="12" sm="6">
            <Card className="Card">
                <CardImg className="CardImage" src={props.item.image}></CardImg>
                <CardBody>
                    <CardTitle>
                        { props.item.title }
                    </CardTitle>
                    <CardText>
                        { props.item.description }
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    </Row>
)

class ContentItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/item/')
          .then(results => this.setState({ items: results.data }))
    }

    itemList() {
        return this.state.items.map(item => { 
          return <Item item={item} key={item.id} />
        })
      }

    render() {
        return(
            <div>
                <NavBar />

                <h2>Items:</h2>

                { this.itemList() }
            </div>
        )
    }
}

export default ContentItem