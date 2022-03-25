import React from "react";
import p5 from "p5";
import SketchObj from "./cv/obj_detect.js";
import SketchPose from "./cv/pose_detect.js";
import SketchFace from "./cv/face_detect.js";
import SketchHand from "./cv/hand_detect.js";
import First from "./First.js";
import Buttons from "./Buttons.js"
import Decouverte from "./Decouverte.js";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Button } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cvRef = React.createRef();
  }

  SketchObj = SketchObj;
  SketchPose = SketchPose;
  SketchFace = SketchFace;
  SketchHand = SketchHand;

  start = () => {
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
  };

  render() {
    return (
      <div class="center">
        <First></First>
        <div></div>
        <h2 class="at1">Atelier n'2</h2>
        <Buttons></Buttons>
        <Container fluid>
          <Row>
            <div class="rect1">
              <div ref={this.cvRef} class="rect2"></div>
            </div>
          </Row>
        </Container>
        <Decouverte></Decouverte>
      </div>
    );
  }
}

export default App;
