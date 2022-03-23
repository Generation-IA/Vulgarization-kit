import React from "react";
import p5 from "p5";
import SketchObj from "./cv/obj_detect.js";
import SketchPose from "./cv/pose_detect.js";
import SketchFace from "./cv/face_detect.js";
import SketchHand from "./cv/hand_detect.js";
import First from "./First.js";
import Decouverte from "./Decouverte.js";
import "bootstrap/dist/css/bootstrap.css";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
import { Container, Col, Row, Button } from "react-bootstrap";

// function that returns window size
function getWindowSize() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  };
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.cvRef = React.createRef();
  }

  // Log the window size
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  // Log on the console the window size
  updateWindowDimensions = () => {
    const { width, height } = getWindowSize();
    console.log(`Window size: ${width}x${height}`); // eslint-disable-line no-console
  };


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
        <h2 class="at1">Atelier n'1</h2>

        {/* <Button variant="primary">ta mere la pute</Button> */}

        {/* <Container fluid>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container> */}

        {/* <button class='button button1'
          type="button"
          onClick={this.start}
        >Start</button>

        <button class='button button0'
          type="button"
          onClick={this.objDetector}
        >Object Detector</button>

        <button class='button button0'
          type="button"
          onClick={this.PoseNet}
        >PoseNet</button>

        <button class='button button0'
          type="button"
          onClick={this.Facemesh}
        >Facemesh</button>

        <button class='button button0'
          type="button"
          onClick={this.HandPose}
        >HandPose</button>

        <button class='button button2'
          type="button"
          onClick={this.stopModel}
        >Stop</button> */}

        <Container fluid>
          <Row>
            <Col>
              <button class="button button1" type="button" onClick={this.start}>
                Start
              </button>
            </Col>
            <Col>
              <button
                class="button button0"
                type="button"
                onClick={this.objDetector}
              >
                Object Detector
              </button>
            </Col>
            <Col>
              <button
                class="button button0"
                type="button"
                onClick={this.PoseNet}
              >
                PoseNet
              </button>
            </Col>
            <Col>
              <button
                class="button button0"
                type="button"
                onClick={this.Facemesh}
              >
                Facemesh
              </button>
            </Col>
            <Col>
              <button
                class="button button0"
                type="button"
                onClick={this.HandPose}
              >
                HandPose
              </button>
            </Col>
            <Col>
              <button
                class="button button2"
                type="button"
                onClick={this.stopModel}
              >
                Stop
              </button>
            </Col>
          </Row>
        </Container>
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
