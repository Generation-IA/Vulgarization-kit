import React from 'react';
import './css/Presentation.css';
import insta from './img/insta-1.png';
import { Container, Col, Row, Button } from "react-bootstrap";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

class Presentation extends React.Component {
    constructor(props) {
        super(props)
    }

    text = () => {
        return (
            <p className='textpres'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis dui, elementum eget viverra ac, lobortis volutpat urna. Integer scelerisque id dui ut condimentum. Vestibulum iaculis in eros id viverra. Ut lacinia dolor sed lobortis elementum. Curabitur non varius felis, varius placerat massa. Donec orci velit, mattis non condimentum eu, feugiat eu dui. Ut sem risus, ornare a scelerisque ut, ultrices id urna. Vivamus mollis faucibus ante, non cursus orci vestibulum non. Aliquam sed magna et odio pharetra laoreet non sit amet mauris. Curabitur malesuada vestibulum risus, sed accumsan lacus semper sit amet. Nullam hendrerit massa a ipsum feugiat, vitae rutrum urna pellentesque. In vitae posuere nibh.
            </p>
        )
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={6}>
                        <Row>
                            <h1 className='titlepres'>Présentation du projet</h1>
                        </Row>
                        <Row>
                            {this.text()}
                        </Row>
                    </Col>
                    <Col>
                        <ParallaxProvider>
                            <Parallax
                                className="custom-class"
                                translateY={['100px', '0px']}
                                tagOuter="figure"
                            >
                                <img src={insta} alt="insta" className='insta'></img>
                            </Parallax>
                        </ParallaxProvider>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Presentation;