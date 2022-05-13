import React from "react";
import { ButtonGroup, Col, Container, Row, Button } from "react-bootstrap";
import "./css/At2.css"
import at2_text from "./Ressources/At2.json"
import p5 from "p5";
import SketchObj from "./cv/obj_detect.js";
import SketchPose from "./cv/pose_detect.js";
import SketchFace from "./cv/face_detect.js";
import SketchHand from "./cv/hand_detect.js";
const at2_title = require("./img/at2.png");
const at2_logo = require("./img/at2_logo.png");

class At2 extends React.Component {
    constructor(props) {
        super(props);
        this.cvRef = React.createRef()
    }
    SketchObj = SketchObj;
    SketchPose = SketchPose;
    SketchFace = SketchFace;
    SketchHand = SketchHand;

    start = () => {
        // Check if a sketch has already been started
        if (this.cvP5) {
            // exit if a sketch has already been started
            return;
        }
        this.cvP5 = new p5(this.SketchObj, this.cvRef.current);
    };

    objDetector = () => {
        this.cvP5.remove();
        this.cvP5 = new p5(this.SketchObj, this.cvRef.current);
    };

    PoseNet = () => {
        this.cvP5.remove();
        this.cvP5 = new p5(this.SketchPose, this.cvRef.current);
    };

    Facemesh = () => {
        this.cvP5.remove();
        this.cvP5 = new p5(this.SketchFace, this.cvRef.current);
    };

    HandPose = () => {
        this.cvP5.remove();
        this.cvP5 = new p5(this.SketchHand, this.cvRef.current);
    };

    stopModel = () => {
        this.cvP5.remove();
        this.cvP5.removeElements();
        // reload the page
        window.location.reload();
    };


    render() {
        return (
            <Container className="at2">
                <Row className="at2_row1">
                    <img className='at2_title' src={at2_title} alt='at2' />
                </Row>
                <Row className="at2_row2">
                    <Col sm={4}>
                        <img className='at2_logo rotate' src={at2_logo} alt='at2_logo' />
                    </Col>
                    <Col>
                        <h2 className="at2_op">Objectifs pédagogiques</h2>
                        <p className="at2_text">{at2_text.text.paragraph1}</p>
                        <p className="at2_text">{at2_text.text.paragraph2}</p>
                    </Col>
                </Row>
                <Row className="at2_row3">
                    <Col>
                        <h2 className="at2_act">Activité</h2>
                    </Col>
                    <Col>
                        <ButtonGroup className="at2_button_grp">
                            <Button className="" onClick={this.start}>start</Button>
                            <Button className="" onClick={this.objDetector}>objDetector</Button>
                            <Button className="" onClick={this.PoseNet}>PoseNet</Button>
                            <Button className="" onClick={this.Facemesh}>Facemesh</Button>
                            <Button className="" onClick={this.HandPose}>HandPose</Button>
                            <Button className="" onClick={this.stopModel}>stop</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="at2_row4">
                    <div className="rect1">
                        <div ref={this.cvRef} className="rect2"></div>
                        <div ></div>

                    </div>
                </Row>
            </Container>
        )
    }
}

export default At2;