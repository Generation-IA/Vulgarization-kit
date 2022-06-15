import React from "react"
import { Container, Row } from 'react-bootstrap'
import body_text from './Ressources/Resum1.json'
import './css/Resum1.css'

import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import TextScramble from './effects/TextScramble';


class Resum1 extends React.Component {
    render() {
        return (
            <Container>
                <Row>

                    <h1 className='title_resum1'>EN RÉSUMÉ</h1>

                </Row>
                <Row>
                    <ul>
                        <p class="underlined"> {body_text.text.paragraph1} </p>
                    </ul>
                    <ul ><p class="underlined"> {body_text.text.paragraph2} </p></ul>
                    <ul className='text_resum1_p3'><p class="underlined">{body_text.text.paragraph3} </p></ul>

                </Row>

            </Container>

        )

    }
}
export default Resum1