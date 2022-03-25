import React from "react";
import logo from "./img/Logo_group.svg";
import "./css/First.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row, Button } from "react-bootstrap";

class First extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="hero text-center">
        <Container fluid id="hero text-center">
          <img class="main" src={logo} alt="logo" width="85" height="65"></img>
          {/* <h1 class="display-5 fw-bold">Génération IA</h1> */}
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Espace élève
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Espace professeur
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default First;
