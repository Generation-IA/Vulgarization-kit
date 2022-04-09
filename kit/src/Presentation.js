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
            <Container>
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

class TextScramble {
    constructor(el) {
        this.el = el
        this.chars = '!<>-_\\/[]{}—=+*^?#%$~________'
        this.update = this.update.bind(this)
    }
    setText(newText) {
        const oldText = this.el.innerText
        const length = Math.max(oldText.length, newText.length)
        const promise = new Promise((resolve) => this.resolve = resolve)
        this.queue = []
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
        }
        cancelAnimationFrame(this.frameRequest)
        this.frame = 0
        this.update()
        return promise
    }
    update() {
        let output = ''
        let complete = 0
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
                complete++
                output += to
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar()
                    this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
            } else {
                output += from
            }
        }
        this.el.innerHTML = output
        if (complete === this.queue.length) {
            this.resolve()
        } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
}