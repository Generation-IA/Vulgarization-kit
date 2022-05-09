import React from "react";
import p5 from "p5";
import SketchObj from "./cv/obj_detect.js";
import SketchPose from "./cv/pose_detect.js";
import SketchFace from "./cv/face_detect.js";
import SketchHand from "./cv/hand_detect.js";
import SentimentModule from "./sentimentModule.js";
import CharRNNmodule from "./CharRNNModule.js";
import { Container, Col, Row, Button } from "react-bootstrap";
import img from "./img/at1.svg";
import side from "./img/side_logo.png";
import title from "./img/at1.svg";
import "./css/At1.css";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

class At1 extends React.Component {
  constructor(props) {
    super(props);
    this.cvP5 = React.createRef();
    this.nlpRef = React.createRef();
    this.CharRNNRef = React.createRef();
  }

  // Variable with fake lorem ipsum text
  text =
    "A la fin de cet atelier, tu sauras définir ce qu'est l'IA et savoir où tu en rencontres dans ta vie quotidienne.";
  SentimentModule = SentimentModule;
  CharRNNmodule = CharRNNmodule;

  start = () => {
    this.cvP5 = new p5(this.SentimentModule, this.cvP5.current);
  };

  sentimentAnalysis = () => {
    this.cvP5.remove();
    this.cvP5 = new p5(this.SentimentModule, this.cvP5.current);
  };

  charRNN = () =>{
    this.cvP5.remove();
    this.cvP5 = new p5(this.CharRNNmodule, this.cvP5.current);
  } 

  render() {
    return (
      <Container>
        <Row>
          <img class="titleimg" src={img}></img>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2>Objectifs Pedagogiques</h2>
              </Col>
              <Col sm={1}>{/* Button for text to speach */}</Col>
            </Row>
            <Row>
              <p class="bodytext">
                {this.text}
                <br />
                <br />
                Ut sem risus, ornare a scelerisque ut, ultrices id urna. Vivamus
                mollis faucibus ante, non cursus orci vestibulum non. Aliquam
                sed magna et odio pharetra laoreet non sit amet mauris.
                Curabitur malesuada vestibulum risus, sed accumsan lacus semper
                sit amet. Nullam hendrerit massa a ipsum feugiat, vitae rutrum
                urna pellentesque. In vitae posuere nibh
              </p>
            </Row>
          </Col>
          <Col sm={4}>
            <ParallaxProvider>
              <Parallax
                className="custom-class"
                translateX={["40%", "0%"]}
                tagOuter="figure"
              >
                <img class="side" src={side}></img>
              </Parallax>
            </ParallaxProvider>
          </Col>
        </Row>
        <Row>
          <h2 class="act">Activité</h2>
        </Row>
        <Row>
          <div class="rect1">
            <div ref={this.cvP5} class="rect2"></div>
            {/* <Button onClick={this.start}>Start</Button> */}
          </div>
        </Row>
        <Row>
          <center>
            <h1 class="nlp">Nlp modules here !</h1>
            <Col>
              <Button ref={this.cvP5} onClick={this.start}>Démarrer</Button>
              <div id='nlpDiv'></div>
            </Col>
            <Col>
              <Button ref={this.cvP5}>charRNN</Button>
              <div id='charRNNDiv'></div> 
            </Col>
          </center>
        </Row>
      </Container>
    );
  }
}

export default At1;
