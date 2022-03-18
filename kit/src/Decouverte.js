import React from 'react';
import logo from './img/Rectangle 35.svg';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Button} from "react-bootstrap";

class Decouverte extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <img src={logo}></img>
                </Row>
                
                <Row>
                    <Col>
                    </Col>
                </Row>
                
            </Container>
        )

    }
}

export default Decouverte;