import React from "react";
import { createPopper } from '@popperjs/core';
import p5 from "p5";
import SketchObj from "./cv/obj_detect.js";
import SketchPose from "./cv/pose_detect.js";
import SketchFace from "./cv/face_detect.js";
import SketchHand from "./cv/hand_detect.js";
import { Container, Col, Row, Button } from "react-bootstrap";
import img from "./img/at1.svg";
import side from "./img/side_logo.png";
import ai_compositionimg from "./img/AI_composition.png";
import title from "./img/at1.svg";
import "./css/At1.css";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import Reveal from 'react-text-reveal';
import { motion } from "framer-motion";



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


// Function that reveals the text

class At1 extends React.Component {
    constructor(props) {
        super(props);
        this.cvRef = React.createRef();
        this.display_boolean5 = false

    }

    // Variable with fake lorem ipsum text
    

    revealText1 = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("text1").style.display = "block";
            document.getElementById("text2").style.display = "none";
            document.getElementById("text3").style.display = "none";
            this.display_boolean5 = true
        } else {
            document.getElementById("text1").style.display = "none";
            this.display_boolean5 = false
        }
    }

    revealText2 = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("text1").style.display = "none";
            document.getElementById("text2").style.display = "block";
            document.getElementById("text3").style.display = "none";
            this.display_boolean5 = true
        } else {
            document.getElementById("text2").style.display = "none";
            this.display_boolean5 = false
        }
    }

    revealText3 = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("text1").style.display = "none";
            document.getElementById("text2").style.display = "none";
            document.getElementById("text3").style.display = "block";
            this.display_boolean5 = true
        } else {
            document.getElementById("text3").style.display = "none";
            this.display_boolean5 = false
        }
    }
    // revealText4 = () => {
    //     // reveal the text
    //     if (this.display_boolean5 === false) {
    //         document.getElementById("text4").style.display = "block";
    //         this.display_boolean5 = true
    //     } else {
    //         document.getElementById("text4").style.display = "none";
    //         this.display_boolean5 = false
    //     }
    // }
    revealText5 = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("text5").style.display = "block";
            document.getElementById("8h").style.display = "block";
            this.display_boolean5 = true
        }

        else {
            document.getElementById("text5").style.display = "none";
            document.getElementById("8h").style.display = "none";
            document.getElementById("8h45").style.display = "none";
            document.getElementById("12h30").style.display = "none";
            document.getElementById("18h").style.display = "none";
            document.getElementById("19h").style.display = "none";
            document.getElementById("PrincipauxMythes").style.display = "none";
            this.display_boolean5 = false
        }

    }
    revealText8h = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("8h").style.display = "block";
            document.getElementById("8h45").style.display = "none";
            document.getElementById("12h30").style.display = "none";
            document.getElementById("18h").style.display = "none";
            document.getElementById("19h").style.display = "none";
            this.display_boolean5 = true
        }

        else {
            document.getElementById("8h").style.display = "none";
            this.display_boolean5 = false
        }

    }
    revealText8h45 = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("8h").style.display = "none";
            document.getElementById("8h45").style.display = "block";
            document.getElementById("12h30").style.display = "none";
            document.getElementById("18h").style.display = "none";
            document.getElementById("19h").style.display = "none";
            this.display_boolean5 = true
        }

        else {
            document.getElementById("8h45").style.display = "none";
            this.display_boolean5 = false
        }

    }

    revealText12h30 = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("8h").style.display = "none";
            document.getElementById("8h45").style.display = "none";
            document.getElementById("12h30").style.display = "block";
            document.getElementById("18h").style.display = "none";
            document.getElementById("19h").style.display = "none";
            this.display_boolean5 = true
        }

        else {
            document.getElementById("12h30").style.display = "none";
            this.display_boolean5 = false
        }

    }

    revealText18h = () => {
        // reveal the text
        if (this.display_boolean5 == false) {
            document.getElementById("8h").style.display = "none";
            document.getElementById("8h45").style.display = "none";
            document.getElementById("12h30").style.display = "none";
            document.getElementById("18h").style.display = "block";
            document.getElementById("19h").style.display = "none";
            this.display_boolean5 = true
        }

        else {
            document.getElementById("18h").style.display = "none";
            this.display_boolean5 = false
        }

    }

    revealText19h = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("8h").style.display = "none";
            document.getElementById("8h45").style.display = "none";
            document.getElementById("12h30").style.display = "none";
            document.getElementById("18h").style.display = "none";
            document.getElementById("19h").style.display = "block";
            this.display_boolean5 = true
        }

        else {
            document.getElementById("19h").style.display = "none";
            this.display_boolean5 = false
        }

    }

    revealText6PrincipauxMythes = () => {
        // reveal the text
        if (this.display_boolean5 === false) {
            document.getElementById("text5").style.display = "none";
            document.getElementById("8h").style.display = "none";
            document.getElementById("8h45").style.display = "none";
            document.getElementById("12h30").style.display = "none";
            document.getElementById("18h").style.display = "none";
            document.getElementById("19h").style.display = "none";
            document.getElementById("PrincipauxMythes").style.display = "block";
            document.getElementById("text1").style.display = "block";
            this.display_boolean5 = true
        }

        else {

            document.getElementById("PrincipauxMythes").style.display = "none";
            document.getElementById("text1").style.display = "none";
            document.getElementById("text2").style.display = "none";
            document.getElementById("text3").style.display = "none";
            this.display_boolean5 = false
        }

    }



    render() {
        return (

            <Container>


                <Row>
                    <img class="titleimg" src={img}></img>
                </Row>

                <Row>


                    <Row>
                        <Col >

                            <h1 class="act">Objectifs Pedagogiques</h1>
                            <p class="bodytext"> A la fin de cet atelier, tu sauras définir ce qu’est l’<strong>intelligence artificielle (IA)</strong> et où tu en rencontres dans ta vie quotidienne.<br /><br />

                                Nous vivons dans un monde hyperconnecté dans lequel chaque interaction, de l'appel téléphonique à l'achat en passant par l'affichage d'une page web, s'ajoute à un océan de données sans fin. Avec l'arrivée de l'Internet des objets (IoT), les voitures, les réfrigérateurs, les vêtements... ceux-ci génèrent des millions de données supplémentaires chaque jour ! <br /><br />

                                L’objectif de ce premier épisode est de faire le point sur les mythes qui existent autour de l’IA, et de découvrir dans quelles mesures l’IA intervient dans notre quotidien. </p>

                        </Col>
                        <Col sm={4}>
                            <ParallaxProvider>



                                <Parallax
                                    className="custom-class"
                                    translateX={['40%', '0%']}
                                    tagOuter="figure"
                                >

                                    <img class="side" src={side}></img>
                                </Parallax>

                            </ParallaxProvider>

                        </Col>



                    </Row>

                </Row>
                <Row>
                    
                    <h1 class="act" >Activité</h1>

                </Row>
                <Row>
                    <div class="rect1">
                        <div ref={this.cvRef} class="rect2"></div>
                    </div>
                </Row>
                <Row>
                <Row>
                    <h1 class="act" >Explications</h1>
                </Row>
                    <Row>
                        <h2 class="h2_lesshigh">Définition de l’IA </h2>
                    </Row>
                    <Row>
                        <p>
                            Toute technologie informatique algorithmique qui permet de résoudre des problèmes complexes qu'on aurait cru réservés à l'intelligence humaine, en simulant des capacités humaines comme la perception et le raisonnement, sans toutefois accéder à la notion de conscience.
                        </p>
                    </Row>
                    <Row>
                    <p>
                        Afin de découvrir les deux chapitres de cet épisode, clique sur les deux boutons ci-dessous pour les faire apparaitre!
                        </p>
                    </Row>
                    <Row>
                        <Col>
                            <button class="collapsible" onClick={this.revealText5}><center><p class='buttontextexplanation'>Une journée type</p></center></button>
                        </Col>
                        <Col>
                            <button class="collapsible2" onClick={this.revealText6PrincipauxMythes}><center><p class='buttontextexplanation'>Principaux Mythes de l'IA</p></center></button>
                        </Col>

                    </Row>
                    <Row>


                        <div class="btn-group" id="text5" style={{ display: "none" }}>

                            <center><h2 class="h2_lesshigh"> I. L’intelligence artificielle: tout autour de toi </h2></center>

                            <p>Voici une journée type en lien avec l’IA issue d’OpenClassroom, la fondation Abeona et l’institut Montaigne. </p>
                            <p><center>Clique sur les differents boutons correspondant à un moment de la journée pour découvrir la présence de l'IA dans ton quotidien! </center> </p>
                            <button onClick={this.revealText8h} ><strong>8h</strong></button>
                            <button onClick={this.revealText8h45}><strong>8h45</strong></button>
                            <button onClick={this.revealText12h30}><strong>12h30</strong></button>
                            <button onClick={this.revealText18h}><strong>18h</strong></button>
                            <button onClick={this.revealText19h}><strong>19h</strong></button>
                        </div>

                        <p id="8h" style={{ display: "none" }}>
                            <br /><br />
                            <strong> 8 h : Un réveil en douceur !  </strong>
                            <br /><br />

                            Il est 8 h du matin, tu navigues peut-être sur un réseau social tel que <strong>Facebook, Instagram, Tik Tok, LinkedIn</strong> ou <strong>Twitter</strong>.

                            Quel que soit le réseau que tu utilises, toutes ces plateformes appliquent des techniques d'intelligence artificielle à leurs services.

                            Tu fais défiler ton fil d’actualité pour découvrir les nouvelles du jour et les contributions de ton réseau.  <br /><br />

                            <strong style={{ color: "Salmon" }}>Sais-tu que ton fil d'actualité est unique ? </strong>Il est complètement construit et affiché pour toi, et ce en fonction de nombreux paramètres (par exemple : tes intérêts, les personnes que tu suis, les posts que tu as "likés"). Ainsi, lorsque tu fais défiler ce fil d'actualité, il ne s'agit pas d'un contenu fixe mais bien d’un contenu personnalisé. Des techniques sont mises en œuvre afin de te fournir l'information la plus pertinente, à travers des contenus ciblés selon ton profil : des articles, des vidéos, des posts de ton réseau, et aussi des publicités.
                        </p>

                        <p id="8h45" style={{ display: "none" }}>
                            <br /><br />
                            <strong>  8 h 45 : Direction le lycée   </strong>
                            <br /><br />
                            Tu montes dans ton transport habituel pour rejoindre ton lycée, et choisis ton application musicale préférée, par exemple Spotify ou Deezer. En un clic, tu peux découvrir des dizaines de chansons et de podcasts recommandés !

                            Cette <strong>recommandation</strong> d’œuvres est permise par l’IA. Une sélection de contenus est suggérée en fonction de ton profil.

                            Tu trouveras par exemple la liste de lecture "Découvertes de la semaine", ces nouveaux titres à écouter, mis à jour chaque lundi par Spotify.  Pour constituer cette playlist, un programme d'IA a analysé tes écoutes récentes, et celles d’autres utilisateurs aux goûts proches des tiens.
                        </p>


                        <p id="12h30" style={{ display: "none" }}>
                            <br /><br />
                            <strong>   12 h 30 : L’heure de manger est arrivée !   </strong>


                            Tu rejoins tes ami(e)s pour la pause déjeuner, et l’un d’eux vous propose de tester cette boulangerie qui vient d’ouvrir au bout de la rue (pour changer de la cantine) ! Vous acceptez et, pour faire baver vos amis, vous décidez de prendre une photo de votre dessert.

                            Lorsque tu prends ta photo, l'appareil se calibre automatiquement en fonction de la scène qui va être photographiée. Derrière tes clichés réussis, il y a une application d’IA qui optimise les paramétrages de l'appareil photo pour toi.

                            Tu fais également une story avec tes ami(e)s. Lorsque tu publies votre photo, la plateforme te suggère d'identifier les personnes présentes sur celle-ci.

                            Si le cliché présente des individus qui font partie de ton cercle proche, leur identification t’est proposée automatiquement. L'<strong>identification</strong>  des visages est aussi une fonctionnalité facilitée par l’IA.
                        </p>

                        <p id="18h" style={{ display: "none" }}>
                            <br /><br />
                            <strong>    18 h : Retour à la maison    </strong>


                            Quel que soit ton moyen de locomotion, tu t’appuies peut-être sur des applis comme Google Maps ou Waze. Très pratiques, elles savent fournir des informations de trafic en temps réel. Mieux, elles savent désormais anticiper les retards (par exemple de bus ou de train).

                            Pour cela, elles utilisent l’intelligence artificielle et les données disponibles (positions des bus en temps réel, météo, etc.).
                        </p>
                        <p id="19h" style={{ display: "none" }}>
                            <br /><br />
                            <strong>   19 h : Minute shopping     </strong>

                            Le e-commerce, c’est des millions de produits à portée de clic. Tu as peut-être déjà effectué tes achats sur la Fnac ou Amazon, par exemple. Ces acteurs utilisent l’IA pour t’offrir la meilleure expérience d’achat.
                        </p>
                        {/*                                         Myths part  */}
                        
                        <div  id="PrincipauxMythes" style={{ display: "none" }}>
                            <Row>
                                <center><h2 class="h2_lesshigh"> II. Mythes autour de l’intelligence artificielle </h2></center>  <br /><br /> <br /><br />
                                <br></br>
                                <p>
                                    Aujourd’hui, de plus en plus de personnes découvrent le monde de l’IA. On peut imaginer que pour certaines personnes l’arrivée de l’intelligence artificielle dans leur vie effraie ou trouble les pensées en faussant certaines informations. Voici quelques mythes que tu as surement dû entendre à propos de l’IA.  </p>
                            </Row>
                            <Row>
                            
                            <center>
                                <br></br>
                            <       button class="collapsible3" onClick={this.revealText1}><center>Mythe Numéro 1</center></button> 
                            <       button class="collapsible3" onClick={this.revealText2}><center>Mythe Numéro 2</center></button>
                            <       button class="collapsible3" onClick={this.revealText3}><center>Mythe Numéro 3</center></button>
                            </center> 
                            <Row>

                                <p id="text1" style={{ display: "none" }}>
                            
                                    <h3 class="h3_lesshigh"><strong> <center>Mythe N°1 « L’IA, plus intelligente qu’un humain. »</center> </strong> </h3>
                                    Les technologies capables de résoudre un problème plus efficacement ou plus rapidement que l’homme existent déjà, mais uniquement sur des tâches très spécifiques : résolution de jeux (AlphaGo de DeepMind), traduction de textes en diverses langues, reconnaissance d’images, détection d’anomalies sur des images (par exemple la détection d’anomalies sur des IRM) etc.  <br></br>

                                    Cependant, l’intelligence n’est pas seulement une puissance cognitive, c’est aussi la capacité à s’adapter et à se généraliser. Alors que l’IA permet l’apprentissage automatique de tâches précises, la généralisation à toutes les tâches que réalisent un humain dans sa vie quotidienne n’est pas encore possible.  <br></br>

                                    Pourquoi ? Parce que les programmes d’aujourd’hui ne sont pas dotés de conscience ni de compréhension du contexte.
                                    <br></br>
                                    <a href="https://www.journaldugeek.com/dossier/lintelligence-artificielle-nexiste-interview-de-luc-julia-cocreateur-de-siri/" >Interview de Luc Julia</a>, concepteur de l’assistant vocal Siri :   <br></br>
                                    « Ce qu’on appelle IA généralisée, ça n’existe pas et avec les techniques actuelles, cela n’existera jamais. Ce qu’on appelle IA faible, c’est l’IA d’aujourd’hui, c’est ce qu’on fait avec du machine learning, du deep learning et cela n’a rien à voir avec de l’intelligence. C’est là que se situe l’erreur.   <br></br>
                                    Il suffit d’ailleurs de regarder les chiffres : Deep Mind [l’ordinateur qui est aussi fort que le meilleur joueur du monde au jeu de go], c’est […] 440 kWh. L’humain en face, c’est 20 Wh. Et [l’humain] sait faire bien d’autres choses que de jouer au go ! Cela prouve qu’il s’agit d’approches complètement différentes et qu’il est ridicule de penser qu’on est proche de l’intelligence. C’est également flagrant si l’on regarde du côté de la vision. On a construit des systèmes capables de reconnaître des chats avec un taux de réussite de 95% en leur fournissant 100 000 images de chats. Alors qu’un enfant n’a besoin que de deux images de chat pour en reconnaître un toute sa vie, avec un taux de réussite de 100%. »
                                </p>
                            </Row>


                            <Row>
                                
                                <p id="text2" style={{ display: "none" }}>
                                    <h3 class="h3_lesshigh"><strong> <center>Mythe N°2 : « L’IA, c’est du Machine Learning. » </center> </strong> </h3>
                                    <p>
                                    Bien que les définitions et les visions divergent, le Machine Learning doit être vu comme une branche de l’IA, fournissant les algorithmes nécessaires à l’exécution de certaines tâches. Alors que l’IA peut être vue comme une discipline, le Machine Learning est une branche de cette discipline. L’IA peut donc être créé sans Machine Learning. Par exemple, 70% du processus de pilotage automatique d’avion est réalisé par moteurs d’inférence. Cette approche déterministe est nécessaire pour prévenir les utilisateurs, ici les pilotes, lorsqu’un scénario non programmé est rencontré. La distinction est identique pour le Deep Learning, qui est une sous-entité du Machine Learning.
                                    <br></br>
                                    </p>
                                    <p>
                                    <center><img width="auto" height="250" src={ai_compositionimg}></img></center>
                                    </p>
                                    <p>
                                    Plus généralement, alors que les données sont nécessaires pour l’entraînement de modèles de Machine Learning, l’IA en est moins dépendante car elle peut recourir à des algorithmes déterministes, moins « datavores » ou utiliser des modèles déjà entraînés, comme le GoogleNet.
                                    </p>
                                </p>
                            </Row>


                            <Row>
                                <p id="text3" style={{ display: "none" }}>
                                    <h3 class="h3_lesshigh"><strong> <center>Mythe N°3 : « L’IA, c’est la Data.  </center> </strong> </h3>
                                    La question de la prépondérance des données ou de l’algorithme est sans cesse débattue et la réponse ne peut pas être binaire. La quantité et la qualité des données qui alimentent un algorithme de Machine Learning ont un impact direct sur la justesse des prédictions, comme le met en avant le directeur de la recherche de Google, Peter Norvig : « Nous n’avons pas de meilleurs algorithmes. Nous avons seulement plus de données » . Cette citation est à nuancer : l’ajout de plus de données ne va pas toujours améliorer l’algorithme, voire pourrait le dégrader, c’est le principe du fléau de la dimension. La qualité des données ajoutées compte autant que leur quantité.
                                     </p> <br /><br />
                            </Row>
            
                            </Row>
                        </div>


                    </Row>



{/* 
     <Row>

                        <center><h2>Définition de l’IA et applications  </h2></center>  <br /><br />

                    </Row>
                    <Row>
                        <p>
                            « L'IA est la partie de l'informatique consacrée à la conception de systèmes informatiques intelligents. E. Feigenbaum. »  <br /><br />

                            « L'IA est l'étude des concepts qui permettent de rendre les machines intelligentes. Winston. »  </p>                        </Row>
                    <Row>

                        <h4>Définition de l'intelligence artificielle : </h4> <p>L'intelligence artificielle (IA, ou AI en anglais pour Artificial Intelligence) consiste à mettre en œuvre un certain nombre de techniques visant à permettre aux machines d'imiter une forme d'intelligence réelle. L'IA se retrouve implémentée dans un nombre grandissant de domaines d'application.  </p>

                        <Row>
                            <       button class="collapsible" onClick={this.revealText4}><center>Applications et devenir</center></button>
                            <p id="text4" style={{ display: "none" }}>
                                L'IA, quelques exemples d’usage
                                La vision artificielle, par exemple, permet à la machine de déterminer précisément le contenu d'une image pour ensuite la classer automatiquement selon l'objet, la couleur ou le visage repéré. Ce classement est notamment utilisé en médecine, dans la sécurité et dans de divers domaines.

                                Les algorithmes sont en mesure d'optimiser leurs calculs au fur et à mesure qu'ils effectuent des traitements. C'est ainsi que les filtres antispam deviennent de plus en plus efficaces au fur et à mesure que l'utilisateur identifie un message indésirable ou au contraire traite les faux-positifs.

                                La reconnaissance vocale a le vent en poupe avec des assistants virtuels capables de transcrire les propos formulés en langage naturel puis de traiter les requêtes soit en répondant directement via une synthèse vocale, soit avec une traduction instantanée ou encore en effectuant une requête relative à la commande. <br /><br />

                                L'intelligence artificielle, un potentiel infini

                                Les possibilités de l'IA semblent s'accroître de manière exponentielle.
                                Ces dernières années, nous sommes passés du simple chatbot à l'utilisation de l'intelligence artificielle pour l'aide à la prise de décisions cruciales, que ce soit dans le domaine médical ou militaire.
                                Avec des champs d'applications si divers, les besoins en experts des données se font sentir dans nombre de secteurs d'activité. C'est notamment le cas des acteurs de la Banque et des assurances qui n'ont pas hésité à se préparer aux métiers de demain, avec des écoles spécialisées et des formations pour devenir Data Analyst par exemple.

                                Alors qu'en 2015 le marché de l'intelligence artificielle pesait 200 millions de dollars, on estime qu'en 2025, il s'élèvera à près de 90 milliards de dollars. <br /><br /> </p>         </Row>
                    </Row> */}

                </Row>
            </Container>

        )
    }
}

export default At1;