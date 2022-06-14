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
import title from "./img/at1.svg";
import "./css/At1.css";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';
import Reveal from 'react-text-reveal';
import { motion } from "framer-motion";




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
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
    text = " A la fin de cet atelier, tu sauras définir ce qu’est l’IA et où tu en rencontres dans ta vie quotidienne. Nous vivons dans un monde hyperconnecté dans lequel chaque interaction, de l'appel téléphonique à l'achat en passant par l'affichage d'une page web, s'ajoute à un océan de données sans fin. Avec l'arrivée de l'Internet des objets (IoT), les voitures, les réfrigérateurs, les vêtements... ceux-ci génèrent des millions de données supplémentaires chaque jour ! L &#39; objectif de ce premier épisode est de faire le point sur les mythes qui existent autour de l’IA, et de découvrir dans quelles mesures l’IA intervient dans notre quotidien.   "; 
    

    revealText1 = () => {
        // reveal the text
        if (this.display_boolean5 == false) {
            document.getElementById("text1").style.display = "block";
            this.display_boolean5 = true
            }else{
                document.getElementById("text1").style.display = "none";
                this.display_boolean5 = false
            }
    }

    revealText2 = () => {
        // reveal the text
        if (this.display_boolean5 == false) {
            document.getElementById("text2").style.display = "block";
            this.display_boolean5 = true
            }else{
                document.getElementById("text2").style.display = "none";
                this.display_boolean5 = false
            }
    }
    
    revealText3 = () => {
        // reveal the text
        if (this.display_boolean5 == false) {
            document.getElementById("text3").style.display = "block";
            this.display_boolean5 = true
            }else{
                document.getElementById("text3").style.display = "none";
                this.display_boolean5 = false
            }
    }
    revealText4 = () => {
        // reveal the text
        if (this.display_boolean5 == false) {
        document.getElementById("text4").style.display = "block";
        this.display_boolean5 = true
        }else{
            document.getElementById("text4").style.display = "none";
            this.display_boolean5 = false
        }
    }
    revealText5 = () => {
        // reveal the text
        if (this.display_boolean5 == false) {
            document.getElementById("text5").style.display = "block";
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
        if (this.display_boolean5 == false) {
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
        if (this.display_boolean5 == false) {
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
        if (this.display_boolean5 == false) {
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
        if (this.display_boolean5 == false) {
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
        if (this.display_boolean5 == false) {
            document.getElementById("text5").style.display = "none";
            document.getElementById("8h").style.display = "none";
            document.getElementById("8h45").style.display = "none";
            document.getElementById("12h30").style.display = "none";
            document.getElementById("18h").style.display = "none";
            document.getElementById("19h").style.display = "none";
            document.getElementById("PrincipauxMythes").style.display = "block";
            this.display_boolean5 = true
        }

        else {

            document.getElementById("PrincipauxMythes").style.display = "none";
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
                    <Col>
                        <Row>
                        <div>
                        <Col>
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
                        <Col>
                           
                        <Col></Col>
                               
                               <Col>
                                   <h2>Objectifs Pedagogiques</h2>
                                   <p class="bodytext">{this.text}</p>
                               </Col>     
                            </Col>
                    </div>
                    

                            
                        </Row>
                        
                        <Row>
                            <p class="bodytext">
                            Nous &#39 vivons dans un monde hyperconnecté dans lequel chaque interaction, de l'appel téléphonique à l'achat en passant par l'affichage d'une page web, s'ajoute à un océan de données sans fin. Avec l'arrivée de l'Internet des objets (IoT), les voitures, les réfrigérateurs, les vêtements... génèrent des millions de données supplémentaires chaque jour !                             </p>
                        </Row>
                        <Row>
                        {/* <div class="btn-group" style="width:100%">
                            <button style="width:25%">Apple</button>
                            <button style="width:25%">Samsung</button>
                            <button style="width:25%">Sony</button>
                            <button style="width:25%">HTC</button>
                        </div> */}

                        </Row>

                        <Row>
                        <Col>
                        <button  class = "collapsible" onClick={this.revealText5}><center>Une journée type</center></button>
                        </Col>
                        <Col>
                        <button  class = "collapsible2" onClick={this.revealText6PrincipauxMythes}><center>Principaux Mythes de l'IA</center></button>
                        </Col>

                        </Row>
                        <Row>
                    
                        
                        <div class="btn-group" id="text5" style={{display: "none"}}>
                        <br/><br/>
                            <button onClick={this.revealText8h} ><strong>8h</strong></button>
                            <button onClick={this.revealText8h45}><strong>8h45</strong></button>
                            <button onClick={this.revealText12h30}><strong>12h30</strong></button>
                            <button onClick={this.revealText18h}><strong>18h</strong></button>
                            <button onClick={this.revealText19h}><strong>19h</strong></button>
                        </div>

                        <p id="8h" style={{display: "none"}}> 
                        <br/><br/>
                        <strong> 8 h : Un reveil en douceur !  </strong>
  
 Il est 8 h du matin, vous naviguez peut-être sur un réseau social tel que Facebook, Instagram, LinkedIn ou Twitter.  
  
 Quel que soit le réseau que vous utilisez, toutes ces plateformes appliquent des techniques d'intelligence artificielle à leurs services. 
 Vous faites défiler votre fil d’actualité pour découvrir les nouvelles du jour et les contributions de votre réseau. 
  
  
 Savez-vous que votre fil d'actualité est unique ? Il est complètement construit et affiché pour vous, et ce en fonction de nombreux paramètres (par exemple : vos intérêts, les personnes que vous suivez, les posts que vous avez "likés"). Ainsi, lorsque vous faites défiler ce fil d'actualité, il ne s'agit pas d'un contenu fixe mais bien d’un contenu personnalisé. Des techniques sont mises en œuvre afin de vous fournir l'information la plus pertinente, à travers des contenus ciblés selon votre profil : des articles, des vidéos, des posts de votre réseau, et aussi des publicités. 
  
</p>

 <p id="8h45" style={{display: "none"}}> 
                        <br/><br/>
                <strong>  8 h 45 : Direction le lycée   </strong>


 Vous montez dans votre transport habituel pour rejoindre votre travail, et choisissez votre application musicale préférée, par exemple Spotify ou Deezer. En un clic, vous pouvez découvrir des dizaines de chansons et de podcasts recommandés ! 
  
 Cette recommandation d’œuvres est permise par l’IA. Une sélection de contenus est suggérée en fonction de votre profil.  
  
 Vous trouverez par exemple la liste de lecture "Découvertes de la semaine", ces nouveaux titres à écouter, mise à jour chaque lundi par Spotify.  Pour constituer cette playlist, un programme d'IA a analysé vos écoutes récentes, et celles d’autres utilisateurs aux goûts proches des vôtres. 
  

</p>


 <p id="12h30" style={{display: "none"}}> 
                        <br/><br/>
                        <strong>   12 h 30 : L’heure de manger est arrivée !   </strong>


Vous rejoignez vos ami(e)s pour la pause déjeuner, et l’un d’eux vous propose de tester ce petit restaurant qui vient d’ouvrir au bout de la rue ! Vous acceptez et, pour faire baver vos amis, vous décidez de prendre une photo de votre dessert. 
 
Lorsque vous réalisez votre photo, l'appareil se calibre automatiquement en fonction de la scène qui va être photographiée. Derrière vos clichés réussis, il y a une application d’IA qui optimise les paramétrages de l'appareil photo pour vous. 
 
Vous prenez également une photo avec vos amies, et la postez sur les réseaux. Lorsque vous publiez votre photo, la plateforme vous suggère d'identifier les personnes présentes sur celle-ci. 
Si le cliché présente des individus qui font partie de votre cercle proche, leur identification vous est proposée automatiquement. L'identification des visages est aussi une fonctionnalité facilitée par l’IA.  
</p>

<p id="18h" style={{display: "none"}}> 
                        <br/><br/>
                        <strong>    18 h : Retour à la maison    </strong>


 Quel que soit votre moyen de locomotion, vous vous appuyez sûrement sur des applis comme Google Maps ou Waze. Très pratiques, elles savent fournir des informations de trafic en temps réel. Mieux, elles savent désormais anticiper les retards (par exemple de bus ou de train). 
 Pour cela, elles utilisent l’intelligence artificielle et les données disponibles (positions des bus en temps réel, météo, etc.). 

</p>
                        <p id="19h" style={{display: "none"}}> 
                        <br/><br/>
 <strong>   19 h : Minute shopping     </strong>

 
 Le e-commerce, c’est des millions de produits à portée de clic. Vous avez peut-être déjà effectué vos achats sur Cdiscount, la Fnac ou Amazon. Ces acteurs utilisent l’IA pour vous offrir la meilleure expérience d’achat. 
  </p>        
 {/*                                         Myths part  */}
 <div  id="PrincipauxMythes" style={{display: "none"}}>

<Col>

<center><h2>Mythes autour de l'IA</h2></center>  <br/><br/>
</Col>
<Row>
                            <p>
                            Aujourd’hui, de plus en plus de personnes découvrent le monde d l’IA. On peut imaginer que pour certaines personnes l’arrivée de l’intelligence artificielle dans leur vie effraie ou trouble les pensées en faussant certaines informations. Voici quelques mythes que vous avez surement dû lire ou entendre à propos de l’IA.                                </p>
                        </Row>

                        <Row>

<       button class = "collapsible2" onClick={this.revealText1}><center>Mythe Numéro 1</center></button>

<p id="text1" style={{display: "none"}}>
<h3>Mythe N°1 « L’IA, plus intelligente qu’un humain. » </h3>
Les technologies capables de résoudre un problème plus efficacement ou plus rapidement que l’homme existent déjà, mais uniquement sur des tâches très spécifiques : résolution de jeux, traduction de textes en diverses langues, détection d’anomalies sur des IRM, etc. 

Cependant, l’intelligence n’est pas seulement une puissance cognitive, c’est aussi la capacité à s’adapter et à se généraliser. Alors que le Deep Learning permet l’apprentissage automatique, la généralisation à tous les domaines n’est pas encore possible. 
Pourquoi ? Parce que les programmes d’aujourd’hui ne sont pas encore dotés de conscience ni de compréhension du contexte </p>         </Row>


<Row>
<       button class = "collapsible2" onClick={this.revealText2}><center>Mythe Numéro 2</center></button>

<p id="text2" style={{display: "none"}}>
<h3>Mythe N°2 « Mythe N°2 : « L’IA, destructrice d’emplois. »  </h3>
    Selon le Gartner, 1,8 millions de postes seront supprimés d’ici 2020 à cause de l’IA… Mais en contrepartie, 2,3 millions de postes seront créés ! Des chiffres qui peuvent paraître assez optimistes, à vérifier sur le long terme. Cependant, il est d’ores et déjà assuré que l’IA engendrera des changements avec des formations et des remises à niveau des personnels en entreprise
Il faut donc surtout retenir les modifications des postes et non leur suppression, tout en gardant en ligne de mire les améliorations que l’IA peut nous apporter au quotidien, comme par exemple le pré-traitement de documents, apport dans la médecine (visualisation de tumeur). L’IA permet ainsi aux entreprises d’entrer dans l’ère des « services augmentés ».   </p>         </Row>


<Row>
<       button class = "collapsible2" onClick={this.revealText3}><center>Les infos cléfs!</center></button>

<p id="text3" style={{display: "none"}}>
<h3>Les mythes que faut-il retenir ?  </h3>
Tout d’abord l’Intelligence Artificielle, ce n’est pas le futur mais bel et bien le présent. Il ne faut pas en avoir peur. L’IA n’a pas vocation à remplacer l’homme, mais plutôt « l’augmenter » en démultipliant ses performances. 
Ensuite, bien évidemment, si son utilisation est faite dans un objectif malsain, l’IA sera effrayante, négative voire destructrice. Mais mise entre de bonnes mains, elle est alors porteuse de promesses d’un avenir enthousiasmant. Tout dépend donc de l’objectif initial. 
Enfin, il faut comprendre le positionnement central de l’IA : située entre les données et l’algorithmie (ex. le Machine Learning), elle a vocation à rendre les offres et services plus efficaces et ainsi propulser les entreprises dans l’ère des « services augmentés ».    </p> <br/><br/>        </Row>


 </div>

 
  </Row>

                        


                        <Row>

                    <center><h2>Définition de l’IA et applications  </h2></center>  <br/><br/>

                            </Row>
                            <Row>
                            <p>
                            « L'IA est la partie de l'informatique consacrée à la conception de systèmes informatiques intelligents. E. Feigenbaum. »  <br/><br/>
   
                            « L'IA est l'étude des concepts qui permettent de rendre les machines intelligentes. Winston. »  </p>                        </Row>
                        <Row>
                            
                            <h4>Définition de l'intelligence artificielle : </h4> <p>L'intelligence artificielle (IA, ou AI en anglais pour Artificial Intelligence) consiste à mettre en œuvre un certain nombre de techniques visant à permettre aux machines d'imiter une forme d'intelligence réelle. L'IA se retrouve implémentée dans un nombre grandissant de domaines d'application.  </p>

                            <Row>
                        <       button class = "collapsible" onClick={this.revealText4}><center>Applications et devenir</center></button>
                        <p id="text4" style={{display: "none"}}> 
                        L'IA, quelques exemples d’usage 
                La vision artificielle, par exemple, permet à la machine de déterminer précisément le contenu d'une image pour ensuite la classer automatiquement selon l'objet, la couleur ou le visage repéré. Ce classement est notamment utilisé en médecine, dans la sécurité et dans de divers domaines.  
 
                Les algorithmes sont en mesure d'optimiser leurs calculs au fur et à mesure qu'ils effectuent des traitements. C'est ainsi que les filtres antispam deviennent de plus en plus efficaces au fur et à mesure que l'utilisateur identifie un message indésirable ou au contraire traite les faux-positifs. 
 
                La reconnaissance vocale a le vent en poupe avec des assistants virtuels capables de transcrire les propos formulés en langage naturel puis de traiter les requêtes soit en répondant directement via une synthèse vocale, soit avec une traduction instantanée ou encore en effectuant une requête relative à la commande. <br/><br/>
 
                L'intelligence artificielle, un potentiel infini 
 
                Les possibilités de l'IA semblent s'accroître de manière exponentielle.  
                Ces dernières années, nous sommes passés du simple chatbot à l'utilisation de l'intelligence artificielle pour l'aide à la prise de décisions cruciales, que ce soit dans le domaine médical ou militaire.  
                Avec des champs d'applications si divers, les besoins en experts des données se font sentir dans nombre de secteurs d'activité. C'est notamment le cas des acteurs de la Banque et des assurances qui n'ont pas hésité à se préparer aux métiers de demain, avec des écoles spécialisées et des formations pour devenir Data Analyst par exemple. 
 
                Alors qu'en 2015 le marché de l'intelligence artificielle pesait 200 millions de dollars, on estime qu'en 2025, il s'élèvera à près de 90 milliards de dollars. <br/><br/> </p>         </Row>
                        </Row>
                        </Col>
                </Row>
                
                <Row>
                    <h2 class="act">Activité</h2>
                </Row>
                <Row>
                    <div class="rect1">
                        <div ref={this.cvRef} class="rect2"></div>
                    </div>
                </Row>
                
            </Container>

        )
    }
}

export default At1;