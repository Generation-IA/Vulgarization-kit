import React from "react"
import { Container, Row } from 'react-bootstrap'
import './css/Sondage.css';
import RGF from 'react-google-forms'
import img from "./img/retourdexperience.png";
import img2 from "./img/Endpage.png";
import sondagebutton from "./img/Bouton-repondre_sondage.png";



class Sondage extends React.Component{
    constructor(props) {
        super(props);
        this.display_boolean = false
    }
    revealSurvey = () => {
        // reveal the text
        if (this.display_boolean == false) {
        document.getElementById("survey").style.display = "block";
        this.display_boolean = true
        }else{
            document.getElementById("survey").style.display = "none";
            this.display_boolean = false
        }
    }

    render(){
            
        return(
            
            <Container>
                
            <Row>
                <img class="titleimg" src={img}></img>
            </Row>
                
            <Row>
                <h1 class='title'>Sondage</h1>
            </Row>
            <Row>
            <p class='text'>
                        Merci à tous et à toutes d'avoir testé notre version protype de notre kit!
                        L'équipe de Génration IA espère qu'il vous a plus tant dans l'aspect visuel, interactif que sur l'aspect pédagogique!
                        Le site étant toujours dans sa phase de prototype, nous nous améliorons sur les retours de vos expériences.
                        Ainsi, merci de bien vouloir consacrer quelques minutes à répondre à cette petite enquête, l'information communiquée nous sera très utile pour améliorer notre kit.
                        Ce dernier est parfaitement anonyme et ne dure que quelques minutes.

                    </p>
            </Row>

            <Row>
            <img class="surveybuttonimg" src={sondagebutton} onClick={this.revealSurvey}></img>

            </Row>
            <Row>
            
            <iframe id = "survey" style={{display: "none"}}  src="https://docs.google.com/forms/d/e/1FAIpQLSeiHQFkoiDKQCZY-FUJHN0n-N4NkrsFh2SAaNBh8VhAXRjE8Q/viewform?embedded=true" width="640" height="1002" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
            
            </Row>
            <Row>
                <img class="titleimgendpage" src={img2}></img>
            </Row>




        </Container>
        )

    }
}
export default Sondage