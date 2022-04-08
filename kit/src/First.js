import React from 'react';
import logo from './img/Logo_group.svg';
import button1 from './img/button-1.png';
import button2 from './img/button-2.png';
import button3 from './img/button-3.png';
import './css/First.css';
import { Container, Col, Row, Button } from "react-bootstrap";
class First extends React.Component {
    constructor(props) {
        super(props)
}

    render() {
        return (
            <Container>

                <Row className='top'>
                    <Col>
                    </Col>
                    <Col sm={2}>
                        <Row>
                            <img className="chbutton" src={button1}></img>
                        </Row>
                        <Row>
                            <img className="chbutton" src={button2}></img>
                        </Row>
                    </Col>
                </Row>
                <Row>
                        <img src={logo} alt="logo" className='logo'></img>
                </Row>
                <Row className='logorow'>
                    <Col></Col>
                    <Col>
                        <img className="decouv" src={button3}></img>
                    </Col>
                    <Col></Col>
                    
                </Row>
            </Container>
        )
    }
}

export default First;