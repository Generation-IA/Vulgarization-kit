import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Button } from "react-bootstrap";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
            <button class="button button0" type="button" onClick={this.PoseNet}>
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
    );
  }
}

export default Buttons;
