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
                            <p class="bodytext"> A la fin de cet atelier, tu sauras d??finir ce qu???est l???<strong>intelligence artificielle (IA)</strong> et o?? tu en rencontres dans ta vie quotidienne.<br /><br />

                                Nous vivons dans un monde hyperconnect?? dans lequel chaque interaction, de l'appel t??l??phonique ?? l'achat en passant par l'affichage d'une page web, s'ajoute ?? un oc??an de donn??es sans fin. Avec l'arriv??e de l'Internet des objets (IoT), les voitures, les r??frig??rateurs, les v??tements... ceux-ci g??n??rent des millions de donn??es suppl??mentaires chaque jour !???<br /><br />

                                L???objectif de ce premier ??pisode est de faire le point sur les mythes qui existent autour de l???IA, et de d??couvrir dans quelles mesures l???IA intervient dans notre quotidien.???</p>

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
                    
                    <h1 class="act" >Activit??</h1>

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
                        <h2 class="h2_lesshigh">D??finition???de l???IA </h2>
                    </Row>
                    <Row>
                        <p>
                            Toute technologie informatique algorithmique qui permet de r??soudre des probl??mes complexes qu'on aurait cru r??serv??s ?? l'intelligence humaine, en simulant des capacit??s humaines comme la perception et le raisonnement, sans toutefois acc??der ?? la notion de???conscience.
                        </p>
                    </Row>
                    <Row>
                    <p>
                        Afin de d??couvrir les deux chapitres de cet ??pisode, clique sur les deux boutons ci-dessous pour les faire apparaitre!
                        </p>
                    </Row>
                    <Row>
                        <Col>
                            <button class="collapsible" onClick={this.revealText5}><center><p class='buttontextexplanation'>Une journ??e type</p></center></button>
                        </Col>
                        <Col>
                            <button class="collapsible2" onClick={this.revealText6PrincipauxMythes}><center><p class='buttontextexplanation'>Principaux Mythes de l'IA</p></center></button>
                        </Col>

                    </Row>
                    <Row>


                        <div class="btn-group" id="text5" style={{ display: "none" }}>

                            <center><h2 class="h2_lesshigh"> I. L???intelligence artificielle: tout autour de toi </h2></center>

                            <p>Voici une journ??e type en lien avec l???IA issue d???OpenClassroom, la fondation Abeona et l???institut Montaigne. </p>
                            <p><center>Clique sur les differents boutons correspondant ?? un moment de la journ??e pour d??couvrir la pr??sence de l'IA dans ton quotidien! </center> </p>
                            <button onClick={this.revealText8h} ><strong>8h</strong></button>
                            <button onClick={this.revealText8h45}><strong>8h45</strong></button>
                            <button onClick={this.revealText12h30}><strong>12h30</strong></button>
                            <button onClick={this.revealText18h}><strong>18h</strong></button>
                            <button onClick={this.revealText19h}><strong>19h</strong></button>
                        </div>

                        <p id="8h" style={{ display: "none" }}>
                            <br /><br />
                            <strong> 8 h : Un r??veil en douceur !??? </strong>
                            <br /><br />

                            Il est 8 h du matin, tu navigues peut-??tre sur un r??seau social tel que <strong>Facebook, Instagram, Tik Tok, LinkedIn</strong> ou <strong>Twitter</strong>.

                            Quel que soit le r??seau que tu utilises, toutes ces plateformes appliquent des techniques d'intelligence artificielle ?? leurs services.

                            Tu fais d??filer ton fil d???actualit?? pour d??couvrir les nouvelles du jour et les contributions de ton r??seau.??? <br /><br />

                            <strong style={{ color: "Salmon" }}>Sais-tu que ton fil d'actualit?? est unique ? </strong>Il est compl??tement construit et affich?? pour toi, et ce en fonction de nombreux param??tres (par exemple : tes int??r??ts, les personnes que tu suis, les posts que tu as "lik??s"). Ainsi, lorsque tu fais d??filer ce fil d'actualit??, il ne s'agit pas d'un contenu fixe mais bien d???un contenu personnalis??. Des techniques sont mises en ??uvre afin de te fournir l'information la plus pertinente, ?? travers des contenus cibl??s selon ton profil???: des articles, des vid??os, des posts de ton r??seau, et aussi des publicit??s.
                        </p>

                        <p id="8h45" style={{ display: "none" }}>
                            <br /><br />
                            <strong>  8 h 45 : Direction le lyc??e ??? </strong>
                            <br /><br />
                            Tu montes dans ton transport habituel pour rejoindre ton lyc??e, et choisis ton application musicale pr??f??r??e, par exemple Spotify ou???Deezer. En un clic, tu peux d??couvrir des dizaines de chansons et de podcasts recommand??s !

                            Cette <strong>recommandation</strong> d?????uvres est permise par l???IA. Une s??lection de contenus est sugg??r??e en fonction de ton profil.

                            Tu trouveras par exemple la liste de lecture "D??couvertes de la semaine", ces nouveaux titres ?? ??couter, mis ?? jour chaque lundi par Spotify.??? Pour constituer cette playlist, un programme d'IA a analys?? tes ??coutes r??centes, et celles d???autres utilisateurs aux go??ts proches des tiens.
                        </p>


                        <p id="12h30" style={{ display: "none" }}>
                            <br /><br />
                            <strong>   12 h 30 : L???heure de manger est arriv??e !???  </strong>


                            Tu rejoins tes ami(e)s pour la pause d??jeuner, et l???un d???eux vous propose de tester cette boulangerie qui vient d???ouvrir au bout de la rue (pour changer de la cantine) ! Vous acceptez et, pour faire baver vos amis, vous d??cidez de prendre une photo de votre dessert.

                            Lorsque tu prends ta photo, l'appareil se calibre automatiquement en fonction de la sc??ne qui va ??tre photographi??e. Derri??re tes clich??s r??ussis, il y a une application d???IA qui optimise les param??trages de l'appareil photo pour toi.

                            Tu fais ??galement une story avec tes ami(e)s. Lorsque tu publies votre photo, la plateforme te sugg??re d'identifier les personnes pr??sentes sur celle-ci.

                            Si le clich?? pr??sente des individus qui font partie de ton cercle proche, leur identification t???est propos??e automatiquement. L'<strong>identification</strong>  des visages est aussi une fonctionnalit?? facilit??e par l???IA.
                        </p>

                        <p id="18h" style={{ display: "none" }}>
                            <br /><br />
                            <strong>    18 h : Retour ?? la maison ???  </strong>


                            Quel que soit ton moyen de locomotion, tu t???appuies peut-??tre sur des applis comme Google Maps ou Waze. Tr??s pratiques, elles savent fournir des informations de trafic en temps r??el. Mieux, elles savent d??sormais anticiper les retards (par exemple de bus ou de train).

                            Pour cela, elles utilisent l???intelligence artificielle et les donn??es disponibles (positions des bus en temps r??el, m??t??o, etc.).
                        </p>
                        <p id="19h" style={{ display: "none" }}>
                            <br /><br />
                            <strong>   19 h : Minute shopping  ???  </strong>

                            Le e-commerce, c???est des millions de produits ?? port??e de clic. Tu as peut-??tre d??j?? effectu?? tes achats sur la Fnac ou Amazon, par exemple. Ces acteurs utilisent l???IA pour t???offrir la meilleure exp??rience d???achat.
                        </p>
                        {/*                                         Myths part  */}
                        
                        <div  id="PrincipauxMythes" style={{ display: "none" }}>
                            <Row>
                                <center><h2 class="h2_lesshigh"> II. Mythes autour de l???intelligence artificielle </h2></center>  <br /><br /> <br /><br />
                                <br></br>
                                <p>
                                    Aujourd???hui, de plus en plus de personnes d??couvrent le monde de l???IA. On peut imaginer que pour certaines personnes l???arriv??e de l???intelligence artificielle dans leur vie effraie ou trouble les pens??es en faussant certaines informations. Voici quelques mythes que tu as surement d?? entendre ?? propos de l???IA.  </p>
                            </Row>
                            <Row>
                            
                            <center>
                                <br></br>
                            <       button class="collapsible3" onClick={this.revealText1}><center>Mythe Num??ro 1</center></button> 
                            <       button class="collapsible3" onClick={this.revealText2}><center>Mythe Num??ro 2</center></button>
                            <       button class="collapsible3" onClick={this.revealText3}><center>Mythe Num??ro 3</center></button>
                            </center> 
                            <Row>

                                <p id="text1" style={{ display: "none" }}>
                            
                                    <h3 class="h3_lesshigh"><strong> <center>Mythe N??1 ?? L???IA, plus intelligente qu???un humain. ??</center> </strong> </h3>
                                    Les technologies capables de r??soudre un probl??me plus efficacement ou plus rapidement que l???homme existent d??j??, mais uniquement sur des t??ches tr??s sp??cifiques???: r??solution de jeux (AlphaGo de DeepMind), traduction de textes en diverses langues, reconnaissance d???images, d??tection d???anomalies sur des images (par exemple la d??tection d???anomalies sur des IRM) etc.  <br></br>

                                    Cependant, l???intelligence n???est pas seulement une puissance cognitive, c???est aussi la capacit?? ?? s???adapter et ?? se g??n??raliser. Alors que l???IA permet l???apprentissage automatique de t??ches pr??cises, la g??n??ralisation ?? toutes les t??ches que r??alisent un humain dans sa vie quotidienne n???est pas encore possible.  <br></br>

                                    Pourquoi???? Parce que les programmes d???aujourd???hui ne sont pas dot??s de conscience ni de compr??hension du contexte.
                                    <br></br>
                                    <a href="https://www.journaldugeek.com/dossier/lintelligence-artificielle-nexiste-interview-de-luc-julia-cocreateur-de-siri/" >Interview de Luc Julia</a>, concepteur de l???assistant vocal Siri???:   <br></br>
                                    ?????Ce qu???on appelle IA g??n??ralis??e, ??a n???existe pas et avec les techniques actuelles, cela n???existera jamais. Ce qu???on appelle IA faible, c???est l???IA d???aujourd???hui, c???est ce qu???on fait avec du machine learning, du deep learning et cela n???a rien ?? voir avec de l???intelligence. C???est l?? que se situe l???erreur.   <br></br>
                                    Il suffit d???ailleurs de regarder les chiffres???: Deep Mind [l???ordinateur qui est aussi fort que le meilleur joueur du monde au jeu de go], c???est [???] 440 kWh. L???humain en face, c???est 20 Wh. Et [l???humain] sait faire bien d???autres choses que de jouer au go???! Cela prouve qu???il s???agit d???approches compl??tement diff??rentes et qu???il est ridicule de penser qu???on est proche de l???intelligence. C???est ??galement flagrant si l???on regarde du c??t?? de la vision. On a construit des syst??mes capables de reconna??tre des chats avec un taux de r??ussite de 95% en leur fournissant 100 000 images de chats. Alors qu???un enfant n???a besoin que de deux images de chat pour en reconna??tre un toute sa vie, avec un taux de r??ussite de 100%.?????
                                </p>
                            </Row>


                            <Row>
                                
                                <p id="text2" style={{ display: "none" }}>
                                    <h3 class="h3_lesshigh"><strong> <center>Mythe N??2 : ?? L???IA, c???est du Machine Learning. ?? </center> </strong> </h3>
                                    <p>
                                    Bien que les d??finitions et les visions divergent, le Machine Learning doit ??tre vu comme une branche de l???IA, fournissant les algorithmes n??cessaires ?? l???ex??cution de certaines t??ches. Alors que l???IA peut ??tre vue comme une discipline, le Machine Learning est une branche de cette discipline. L???IA peut donc ??tre cr???? sans Machine Learning. Par exemple, 70% du processus de pilotage automatique d???avion est r??alis?? par moteurs d???inf??rence. Cette approche d??terministe est n??cessaire pour pr??venir les utilisateurs, ici les pilotes, lorsqu???un sc??nario non programm?? est rencontr??. La distinction est identique pour le Deep Learning, qui est une sous-entit?? du Machine Learning.
                                    <br></br>
                                    </p>
                                    <p>
                                    <center><img width="auto" height="250" src={ai_compositionimg}></img></center>
                                    </p>
                                    <p>
                                    Plus g??n??ralement, alors que???les donn??es???sont n??cessaires pour l???entra??nement de mod??les de Machine Learning, l???IA en est moins d??pendante car elle peut recourir ?? des algorithmes d??terministes, moins ?????datavores????? ou utiliser des mod??les d??j?? entra??n??s, comme le GoogleNet.
                                    </p>
                                </p>
                            </Row>


                            <Row>
                                <p id="text3" style={{ display: "none" }}>
                                    <h3 class="h3_lesshigh"><strong> <center>Mythe N??3 : ?? L???IA, c???est la Data.  </center> </strong> </h3>
                                    La question de la pr??pond??rance des???donn??es???ou de l???algorithme est sans cesse d??battue et la r??ponse ne peut pas ??tre binaire. La quantit?? et la qualit?? des donn??es qui alimentent un algorithme de Machine Learning ont un impact direct sur la justesse des pr??dictions, comme le met en avant le directeur de la recherche de Google, Peter Norvig???:????????Nous n???avons pas de meilleurs algorithmes. Nous avons seulement plus de donn??es????????. Cette citation est ?? nuancer???: l???ajout de plus de donn??es ne va pas toujours am??liorer l???algorithme, voire pourrait le d??grader, c???est le principe du fl??au de la dimension. La qualit?? des donn??es ajout??es compte autant que leur quantit??.
                                     </p> <br /><br />
                            </Row>
            
                            </Row>
                        </div>


                    </Row>



{/* 
     <Row>

                        <center><h2>D??finition de l???IA et applications  </h2></center>  <br /><br />

                    </Row>
                    <Row>
                        <p>
                            ?? L'IA est la partie de l'informatique consacr??e ?? la conception de syst??mes informatiques intelligents. E. Feigenbaum. ????? <br /><br />

                            ?? L'IA est l'??tude des concepts qui permettent de rendre les machines intelligentes. Winston. ????? </p>                        </Row>
                    <Row>

                        <h4>D??finition de l'intelligence???artificielle :???</h4> <p>L'intelligence artificielle (IA, ou AI???en anglais???pour???Artificial Intelligence) consiste ?? mettre en ??uvre un certain nombre de techniques visant ?? permettre aux machines d'imiter une forme d'intelligence r??elle. L'IA se retrouve impl??ment??e dans un nombre grandissant de domaines d'application.  </p>

                        <Row>
                            <       button class="collapsible" onClick={this.revealText4}><center>Applications et devenir</center></button>
                            <p id="text4" style={{ display: "none" }}>
                                L'IA, quelques exemples d???usage
                                La???vision artificielle, par exemple, permet ?? la machine de d??terminer pr??cis??ment le contenu d'une image pour ensuite la classer automatiquement selon l'objet, la???couleur???ou le visage rep??r??. Ce classement est notamment utilis?? en m??decine, dans la s??curit?? et dans de divers domaines.

                                Les algorithmes sont en mesure d'optimiser leurs calculs au fur et ?? mesure qu'ils effectuent des traitements. C'est ainsi que les filtres antispam deviennent de plus en plus efficaces au fur et ?? mesure que l'utilisateur identifie un message ind??sirable ou au contraire traite les faux-positifs.

                                La???reconnaissance vocale???a le???vent???en poupe avec des assistants virtuels capables de transcrire les propos formul??s en langage naturel puis de traiter les???requ??tes???soit en r??pondant directement via une???synth??se vocale, soit avec une traduction instantan??e ou encore en effectuant une requ??te relative ?? la commande. <br /><br />

                                L'intelligence artificielle, un potentiel infini

                                Les possibilit??s de l'IA semblent s'accro??tre de mani??re exponentielle.
                                Ces derni??res ann??es, nous sommes???pass??s du simple???chatbot????? l'utilisation de l'intelligence artificielle pour l'aide ?? la prise de d??cisions cruciales, que ce soit???dans le domaine m??dical ou militaire.
                                Avec des champs d'applications si divers, les besoins en experts des donn??es se font sentir dans nombre de secteurs d'activit??. C'est notamment le cas des???acteurs???de la Banque et des assurances???qui n'ont pas h??sit?? ?? se pr??parer aux m??tiers de demain, avec des ??coles sp??cialis??es et des formations pour devenir???Data Analyst???par exemple.

                                Alors qu'en 2015???le march?? de l'intelligence artificielle pesait 200 millions de dollars, on estime qu'en 2025, il s'??l??vera ?? pr??s de???90 milliards de dollars. <br /><br /> </p>         </Row>
                    </Row> */}

                </Row>
            </Container>

        )
    }
}

export default At1;