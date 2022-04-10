import React from "react";
import p5 from "p5";
import SketchObj from "./cv/obj_detect.js";
import SketchPose from "./cv/pose_detect.js";
import SketchFace from "./cv/face_detect.js";
import SketchHand from "./cv/hand_detect.js";
import First from "./First.js";
import Presentation from "./Presentation.js";
import Decouverte from "./Decouverte.js";
import At1 from "./At1.js";
import "bootstrap/dist/css/bootstrap.css";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

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
        <First/>
        <Presentation/>
        <Decouverte/>
        <At1/>
      </div>
    );
  }
}

export default App;
