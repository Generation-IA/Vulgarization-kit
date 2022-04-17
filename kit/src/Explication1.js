import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './css/Explication1.css'
import body_text from './Ressources/Explication1.json'
class Explication1 extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1 className='title_expl1'>Explications</h1>
                </Row>
                <Row>
                    <p className='text_expl1_p1'>{body_text.text.paragraph1}</p>
                    <p className='text_expl1_p2'>{body_text.text.paragraph2}</p>
                    <p className='text_expl1_p3'>{body_text.text.paragraph3}</p>
                </Row>

            </Container>
        )
    }
}

export default Explication1;