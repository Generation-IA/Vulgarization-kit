import React from 'react';
import ia1 from './img/ia-1.svg';
import ia2 from './img/ia-2.svg';
import ia3 from './img/ia-3.svg';
import decouv from './img/Decouvrir.png';
import './css/Decouverte.css';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import Bounce from 'react-reveal/Bounce';

class Decouverte extends React.Component {

    // make fake text function
    text = () => {
        return <p className='atintro'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis dui,
            elementum eget viverra ac, lobortis volutpat urna. Integer scelerisque id
            dui ut condimentum. Vestibulum iaculis in eros id viverra. Ut lacinia dolor
            sed lobortis elementum.<br /><br />
        </p>
    }

    // make a function that moves the text accross the screen
    fly = () => {
        let text = document.querySelector('.atintro');
        let rect = text.getBoundingClientRect();
        let width = rect.width;
        let height = rect.height;

        // move the text from the left to the right
        if (rect.left < 0) {
            text.style.left = `${rect.left + width}px`;
        } else {
            text.style.left = `${rect.left - width}px`;
        }
        text.style.transform = `translate(${width}px, ${height}px)`;
    }

    // call the fly when user hovers over the page
    componentDidMount() {
        // const intro = document.querySelector('.atintro');
        // intro.addEventListener('mouseover', this.fly);
        // intro.addEventListener('mouseout', () => {
        //     intro.removeEventListener('mouseover', this.fly);
        // }
        // )
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2 class='title'>Module découverte</h2>
                </Row>
                <Row>
                    <p class='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin felis dui, elementum eget viverra ac, lobortis volutpat urna.
                        Integer scelerisque id dui ut condimentum. Vestibulum iaculis in
                        eros id viverra. Ut lacinia dolor sed lobortis elementum.
                        Curabitur non varius felis, varius placerat massa. Donec orci velit,
                        mattis non condimentum eu, feugiat eu dui. Ut sem risus,
                        ornare a scelerisque ut, ultrices id urna. Vivamus mollis faucibus
                        ante, non cursus orci vestibulum non. Aliquam sed magna et odio
                        pharetra laoreet non sit amet mauris. Curabitur malesuada vestibulum
                        risus, sed accumsan lacus semper sit amet. Nullam hendrerit massa a
                        ipsum feugiat, vitae rutrum urna pellentesque. In vitae posuere nibh.
                    </p>
                </Row>
                <Row>
                    <Col>
                        <img src={ia1} className='imglogo' alt='ia1'></img>
                        <h2 class='subtitle'>1 - L'IA AU QUOTIDIEN</h2>
                    </Col>
                    <Col>
                        <img src={ia2} className='imglogo' alt='ia2'></img>
                        <h2 class='subtitle'>2 - PROTECTION DES DONNÉES PERSONNELLES</h2>
                    </Col>
                    <Col>
                        <img src={ia3} className='imglogo' alt='ia3'></img>
                        <h2 class='subtitle'>3 - ÉTHIQUE ET TECHNOLOGIES</h2>
                    </Col>
                </Row>
                <Row>
                    <Bounce right>
                        <p className='atintro'><strong>ATELIER 1 - L'IA AU QUOTIDIEN</strong></p>
                        {this.text()}
                    </Bounce>
                </Row>
                <Row>
                    <Bounce left>
                        <p className='atintro'><strong>ATELIER 2 - PROTECTION DES DONNÉES PERSONNELLES</strong></p>
                        {this.text()}
                    </Bounce>

                </Row>
                <Row>
                    <Bounce right>
                        <p className='atintro'><strong>ATELIER 3 - ÉTHIQUE ET TECHNOLOGIES</strong></p>
                        {this.text()}
                    </Bounce>
                </Row>
                <img src={decouv} className='decouv' alt='decouv'></img>
            </Container>
        )
    }
}

export default Decouverte;