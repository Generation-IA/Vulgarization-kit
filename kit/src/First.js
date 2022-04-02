import React from 'react';
import logo from './img/Logo_group.svg';
import button1 from './img/button-1.png';
import button2 from './img/button-2.png';
import './css/First.css';
import { Container, Col, Row, Button } from "react-bootstrap";
class First extends React.Component {
    constructor(props) {
        super(props)
}

    render() {
        return (
            <Container>
                <Row>
                    <img class="chbutton" src={button1}></img>
                </Row>
                <Row>
                    <img class="chbutton" src={button2}></img>
                </Row>
                <Row>
                    <div class="center">
                        <img src={logo} alt="logo"></img>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default First;