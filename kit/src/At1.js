import React from "react";
import p5 from "p5";
import SketchObj from "./cv/obj_detect.js";
import SketchPose from "./cv/pose_detect.js";
import SketchFace from "./cv/face_detect.js";
import SketchHand from "./cv/hand_detect.js";
import { Container, Col, Row, Button } from "react-bootstrap";
import img from "./img/Rectangle 14.svg";

class At1 extends React.Component {
    constructor(props) {
        super(props);
        this.cvRef = React.createRef();
    }

    // Variable with fake lorem ipsum text


    render() {
        return (
            <Container>
                <Row>
                    <image src={img}></image>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h2>Object Detection</h2>
                            </Col>
                            <Col>
                                {/* Button for text to speach */}
                            </Col>
                        </Row>
                        <Row>


                    </Col>
                </Row>
            </Container>
        )
    }

}