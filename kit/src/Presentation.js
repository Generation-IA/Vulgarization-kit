import React from 'react';
import './css/Presentation.css';
import insta from './img/insta-1.png';
import fb from './img/fb.svg';
import linkedin from './img/linkedin.svg';
import { Container, Col, Row, Button } from "react-bootstrap";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import TextScramble from './effects/TextScramble';

class Presentation extends React.Component {
    constructor(props) {
        super(props)
    }

    text = () => {
        const el = document.querySelector('.textpres');
        const fx = new TextScramble(el)

        setTimeout(() => {
            fx.setText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis dui, elementum eget viverra ac, lobortis volutpat urna. Integer scelerisque id dui ut condimentum. Vestibulum iaculis in eros id viverra. Ut lacinia dolor sed lobortis elementum. Curabitur non varius felis, varius placerat massa. Donec orci velit, mattis non condimentum eu, feugiat eu dui. Ut sem risus, ornare a scelerisque ut, ultrices id urna. Vivamus mollis faucibus ante, non cursus orci vestibulum non. Aliquam sed magna et odio pharetra laoreet non sit amet mauris. Curabitur malesuada vestibulum risus, sed accumsan lacus semper sit amet. Nullam hendrerit massa a ipsum feugiat, vitae rutrum urna pellentesque. In vitae posuere nibh.');
        }, 200)
    }

    // Call the text function when user sees the page
    componentDidMount() {

        // Create a event listener to call the text function when user hovers over the image
        const insta = document.querySelector('.toppres');
        // call the text function when user hovers over the image and remove the event listener when user leaves the image
        insta.addEventListener('mouseover', this.text);
        insta.addEventListener('mouseout', () => {
            insta.removeEventListener('mouseover', this.text);
        }
        )
        // call the text function everytime 20seconds
        // setInterval(this.text, 20000);
    }


    render() {
        return (
            <Container className='presentation'>
                <Row className='toppres'>
                    <Col sm={6}>
                        <Row>
                            <h1 className='titlepres'>Présentation du projet</h1>
                        </Row>
                        <Row>
                            <p className='textpres'>
                            </p>
                        </Row>
                        <Row>
                            <p className='join'>
                            rejoignez-nous :)
                            </p>
                        </Row>
                        <Row>
                            <Col>
                                <img src={fb} className='fb' alt='fb' />
                            </Col>
                            <Col>
                                <img src={linkedin} className='linkedin' alt='linkedin' />
                            </Col>
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