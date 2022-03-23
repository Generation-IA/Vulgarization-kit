import React from 'react';
import logo from './img/Rectangle 35.svg';
import ia1 from './img/ia-1.svg';
import ia2 from './img/ia-2.svg';
import ia3 from './img/ia-3.svg';
import ia4 from './img/ia-4.svg';
import './css/Decouverte.css';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Button} from "react-bootstrap";

class Decouverte extends React.Component {
    constructor(props) {
        super(props)
    }

    // make fake text variable
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    render() {
        return (
            <Container className='align-items-center'>
                <Row>
                    <img src={logo}></img>
                    <h2 class='title'>Module découverte</h2>
                </Row>
                <Row>
                    <p class='text'> 
                        {this.text} {this.text}
                    </p>
                </Row>
                <Row>
                    <Col><img src={ia1} className='img' ></img></Col>
                    <Col><img src={ia2} className='img' ></img></Col>
                    <Col><img src={ia3} className='img' ></img></Col>
                    <Col><img src={ia4} className='img' ></img></Col>
                </Row>
                <Row>
                    <h2 className='pres' >Présentation rapide des ateliers</h2>
                </Row>
                <Row>
                    <p>
                        Atelier 1:<br></br> {this.text}
                        <br></br>Atelier 2:<br></br> {this.text}
                        <br></br>Atelier 3:<br></br> {this.text}
                        <br></br>Atelier 4:<br></br> {this.text}
                </p>
                </Row>
            </Container>
        )

    }
}

export default Decouverte;