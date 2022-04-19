import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./css/At2.css"
import at2_text from "./Ressources/At2.json"
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import computer vision sketchs
import SketchObj from './cv/obj_detect'
const at2_title = require("./img/at2.png");
const at2_logo = require("./img/at2_logo.png");

class At2 extends React.Component<{}, {}> {
    cvRef = React.createRef<HTMLDivElement>()






    render() {
        return (
            <Container className="at2">
                <Row className="at2_row1">
                    <img className='at2_title' src={at2_title} alt='at2' />
                </Row>
                <Row className="at2_row2">
                    <Col sm={4}>
                        <ParallaxProvider>
                            <Parallax
                                className="custom-class"
                                rotate={[-360, 360]}
                            >
                                <img className='at2_logo' src={at2_logo} alt='at2_logo' />
                            </Parallax>
                        </ParallaxProvider>
                    </Col>
                    <Col>
                        <h2 className="at2_op">Objectifs pédagogiques</h2>
                        <p className="at2_text">{at2_text.text.paragraph1}</p>
                        <p className="at2_text">{at2_text.text.paragraph2}</p>
                    </Col>
                </Row>
                <Row className="at2_row3">
                    <h2 className="at2_act">Activité</h2>
                </Row>
                <Row className="at2_row4">
                    <div className="at2_canvas">
                        <div ref={this.cvRef} className="rect2"></div>
                        <div ></div>
                        
                    </div>
                </Row>
            </Container>
        )
    }
}

export default At2;