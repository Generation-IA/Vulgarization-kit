import React from "react"
import { Container, Row } from 'react-bootstrap'
import body_text from './Ressources/Resum1.json'
import './css/Resum1.css'

import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import TextScramble from './effects/TextScramble';


class Resum2 extends React.Component {
    render() {
        return (
            <Container>
                <Row>

                    <h1 className='title_resum2'>EN RÉSUMÉ</h1>

                </Row>
                <Row>
                    <ul>
                        <a class="underlined"> {body_text.text.paragraph1} </a>
                    </ul>
                    <ul ><a class="underlined"> {body_text.text.paragraph2} </a></ul>
                    <ul className='text_resum2_p3'><a class="underlined">{body_text.text.paragraph3} </a></ul>

                </Row>

            </Container>

        )

    }
}
export default Resum2