import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import './css/Resume2.css'

class Resume2 extends React.Component {
    coucou = () => {
        console.log("coucou")
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <p>Présentation du projet</p>
                    </Col>
                    <Col>
                        <p>Coucou</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Resume2
