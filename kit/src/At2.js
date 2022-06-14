import React from "react";
import { ButtonGroup, Col, Container, Row, Button } from "react-bootstrap";
import "./css/At2.css"
import at2_text from "./Ressources/At2.json"
import p5 from "p5";
import SketchObj from "./cv/obj_detect.js";
import SketchPose from "./cv/pose_detect.js";
import SketchFace from "./cv/face_detect.js";
import SketchHand from "./cv/hand_detect.js";
const at2_title = require("./img/at2.png");
const at2_logo = require("./img/at2_logo.png");

class At2 extends React.Component {
    constructor(props) {
        super(props);
        this.cvRef = React.createRef()
    }
    SketchObj = SketchObj;
    SketchPose = SketchPose;
    SketchFace = SketchFace;
    SketchHand = SketchHand;

    start = () => {
        // Check if a sketch has already been started
        if (this.cvP5) {
            // exit if a sketch has already been started
            return;
        }
        this.cvP5 = new p5(this.SketchObj, this.cvRef.current);
    };

    objDetector = () => {
        this.cvP5.remove();
        this.cvP5 = new p5(this.SketchObj, this.cvRef.current);
    };

    PoseNet = () => {
        this.cvP5.remove();
        this.cvP5 = new p5(this.SketchPose, this.cvRef.current);
    };

    Facemesh = () => {
        this.cvP5.remove();
        this.cvP5 = new p5(this.SketchFace, this.cvRef.current);
    };

    HandPose = () => {
        this.cvP5.remove();
        this.cvP5 = new p5(this.SketchHand, this.cvRef.current);
    };

    stopModel = () => {
        this.cvP5.remove();
        this.cvP5.removeElements();
        // reload the page
        window.location.reload();
    };


    render() {
        return (
            <Container className="at2">
                <Row className="at2_row1">
                    <img className='at2_title' src={at2_title} alt='at2' />
                </Row>
                <Row className="at2_row2">
                    <Col sm={4}>
                        <img className='at2_logo rotate' src={at2_logo} alt='at2_logo' />
                    </Col>
                    <Row>
                            <p class="bodytext">{this.text}<br/><br/>
                            Introduction : à la fin de cet atelier, tu sauras ce que sont les données personnelles, à quoi elles servent, et comment les gérer. </p>                       </Row>
                    <Col>
                        <h1 className="at2_op">Cours écrit :</h1>
                        <Row>
                        <center><h2>Qu’est-ce qu’une donnée personnelle ?</h2></center>  <br/><br/>
                            <p class="bodytext">{this.text}<br/><br/>
                            “Toute information identifiant directement ou indirectement une personne physique.”Par exemple : un nom, une photo, une empreinte digitale, une adresse postale, une adresse mail, un numéro de téléphone, un numéro de sécurité sociale, un matricule interne, une adresse IP, un identifiant de connexion informatique, un enregistrement vocal, une photographie, date de naissance, etc.   </p>
                        </Row>
                        <Row>
                        <center><h2>Qu’est-ce qu’une donnée sensible ?</h2></center>  <br/><br/>
                            <p class="bodytext">{this.text}<br/><br/>
                            Les données sensibles forment une catégorie particulièredes données personnelles.Ce  sont  des  informations  qui  révèlent  la  prétendue  origine  raciale  ou  ethnique,  les  opinions politiques, les convictions religieuses ou philosophiques ou l'appartenance syndicale, ainsi que le  traitement  des  données  génétiques,  des  données  biométriques  aux  fins  d'identifier  une personne  physique  de  manière  unique,  des  données  concernant  la  santé  ou  des  données concernant la vie sexuelle ou l'orientation sexuelle d'une personne physique. Unrèglement européen(nommé RGPD–Règlement Général sur la Protection des Données)interdit de recueillir ou d’utiliser ces données, sauf, notamment, dans les cas suivants:  <br/><br/> •si la personne concernéea donné sonconsentement exprès(démarche active, explicite et de préférence écrite, qui doit être libre, spécifique, et informée);  <br/><br/> •si les informations sont manifestement rendues publiques par la personne concernée; <br/><br/> •si elles sont nécessaires à la sauvegarde de la vie humaine;  <br/><br/> •si leur utilisation est justifiée par l'intérêt public et autorisé par la CNIL;•si elles concernent lesmembres ou adhérents d'une associationou d'une organisation politique, religieuse, philosophique, politique ou syndicale.https://www.cnil.fr/fr/definition/donnee-sensible </p>
                        </Row>
                        <Row>
                        <center><h2>Comment sont récoltées nos données personnelles ?</h2></center>  <br/><br/>
                            <p class="bodytext">{this.text}<br/><br/>
                            Comment sont récoltées nos données personnelles ?Il existe de nombreux moyens de collecter nos données. Voici un aperçu des principaux : Tout  d’abord,  ces  données  peuvent  tout  simplement  être  “déclaratives”  (directement renseignées par l’internaute ) : <br/><br/> • via un profil loggé(par exemple quand on se connecte surson compteInstagram): lors de  la  création  d’un  compte  (souvent  obligatoire)  pour  accéder  au  service  d’un  site (formulaire pouvant questionner sur l’âge, les coordonnées etc) <br/><br/> • via les données CRMd’une entreprise : données enregistrées sur un point de vente, lors d’un évènement (remplissage d’un formulaire papier, création d’une carte de fidélité...) <br/><br/> Puis il y a les données “comportementales” qui sont récoltées plus discrètement afin d’identifier les modes de navigation ou les centres d’intérêt d’un individu : <br/><br/> • via  les  cookies:  le  cookie est un petit fichier texte enregistré sur l’ordinateur d’un internaute lorsqu’il visite une page web. Les pages visitées ou les recherches effectuées sur  un  site  peuvent  être  enregistrée  via  ce  cookie  puis  exploitées  pour  proposer  des annonces  publicitaires  très  ciblées. Certaines  entreprises (les  data-provider) sont spécialisées dans la collecte de cookies qu’elles revendent par la suiteà des entreprises qui cherchent à acquérir des données sur des clients potentiels. <br/><br/> • via  le  “search” :  toutes  nos  recherches  effectuées  sur  Google  notamment  sont enregistrées, au vu de connaître nos intentions d’achats, affinités etc.•via le navigateur : par exemple avec le remplissage automatique des formulaires que propose  Chrome.  Chaque  visite  de  pageinternet  est  automatiquement  traquée  et collectée par Google si l’utilisateur a un compte Chrome. Chrome collecte également son historique de navigation, ses mots de passe, les permissions particulières selon les sites  web,  les  cookies,  l’historique  de  téléchargement  et  les  données  relatives  aux extensions. <br/><br/> • via les “3rd party”:  indirectement  en  achetant  des  données  aux  “data  provider” (spécialisés     dans     la     collecte     de     données).: https://www.webmarketing-com.com/2018/12/17/87290-7-types-de-donnees-utiles-a-collecter-sur-vos-audiencesUn adage résume ce mécanisme : "si c’est gratuit, c’est que vous êtes le produit !".Celui-ci se vérifie chez la grande majorité des géants du numérique et constitue souvent le cœur de leur modèle économique. </p>
                        </Row>
                        <p className="at2_text">{at2_text.text.paragraph1}</p>
                        <center><h2>Pourquoides donnéessont récoltéessur nous?</h2></center>  <br/><br/>

                        <Row>
                            <p class="bodytext">{this.text}<br/><br/>
                                Pourquoi les entreprises collectent-elles des données ?Toutes les entreprises s’accordent à dire que la donnée est un enjeu stratégique, incontournable au succès d’une entreprises. En effet, plus les entreprises recueillent des informationssur leur marché, plus elles ont la capacité de répondre aux besoins utilisateurs et gagner des parts de marché. Les données possédées par les entreprises sont donc un enjeu majeur pour faire face à la concurrence et pour affirmer son positionnement. <br/><br/> Encore faut-il qu’elles aient la capacité d’exploiter et d’analyser ces données. Une étude réalisée par la  sociétéSplunk  met  en  évidence  que plus  de  55%  des  données  possédées  par  les entreprises  ne  sont  pas  identifiées  ou  tout  simplement  ignorées.  Pour  cela,  de  nouvelles fonctions  font  leur  apparition  en  entreprises  :  data  analysts,  data  scientists,  ingénieur  en intelligence artificielle, expert Business Intelligence... https://www.androidetvous.com/pourquoi-les-entreprises-collectent-a-tout-prix-vos-donnees/ <br/><br/>   Les données personnelles peuvent être récoltées à bon escient, dans le respect de nos droitset de nos  intérêts, par exemple par des  acteurs publics. Elles peuvent être utilisées à des fins d’intêret général, pour la recherche, le développement des services publics, la médecine, etc.. en respectant le droit des personnes. <br/><br/> Tous les jours, nous répondons à des questionnaires, nous acceptons l’utilisation des cookies, nous partageons notre localisation avec le site sur lequel nous sommes en train de surfer etc... Nos données à caractère personnel sont à chaque fois récoltées. <br/><br/> Par exemple, lorsqu’on vous demande d’identifier des images pour prouver que vous n'êtes pas un robot (système CAPTCHA), vous participez à entraîner des algorithmes de reconnaissance d’images. Lorsque vous acceptez que votre activité sur une page soit suivie, en consentant aux "cookies", vous permettez à des algorithmes de vous proposer des publicités ciblées en fonction de vos préférences.Si cela est fait dans le respect de nos droitset que nous consentons à donner des informations, alors il n’y a pas de problème. <br/><br/> L’intérêt des entreprises se trouve dans l’exploitation de ces données. Les données à caractère personnel vont en effet permettre à l’entreprise de nous connaître dans les moindres détails: J’ai 18ans, je suis une femme, j’ai la peau mixte à tendance sèche, je fais environ 3000 pas par jour,  j’habite  en  bord  de  mer  et  je  vais  surfer  une  à  deux  fois  par  semaine:  Toutes  ces informations   vont   être   exploitées   pour mieux   me   cibler   en   tant   que   potentielle consommatrice. <br/><br/> En  récoltant  toutes  ces  informations  sur  moi,  les  entreprises  vont  pouvoir adapter  leur communication à mon profil. Plutôt que de m’envoyer une communication sur leur nouvelle crème  anti-ride,  les  marques,  en  ayant  accès  à  des  informations  clés  sur  mon  profil  de consommateur, vont me proposer de tester des produits qui correspondent à mes besoins et que je serai plus à même d’acheter. <br/><br/> https://droitdigital.fr/comment-et-pourquoi-sont-recoltees-les-donnees-personnelles </p>                        </Row>
                        
                        <center><h2>Résumé</h2></center>  <br/><br/>
                        <p class="bodytext">{this.text}<br/><br/>
                        Une  donnée  personnelle  est une  information  identifiant directement  ou  indirectement  une personne physique. C’est par exemple un prénom ou une adresse mail.Une donnée sensible est une donnée personnelle à caractère sensible (comme la religion d’une personne ou ses données de santé). Ces données sont régulées par la RGPD qui prévoit des lois de protection à cet effet.Par  exemple,  il  est  interdit  pour  un  organisme  de  les  collecter,  à  part  si  la  personne  les  a partagées volontairement par elle-mêmesur les réseaux. Ainsi, il est important de faire attention à ce qu’on partage sur Internetcar  cela  créé  un  environnement idéal  pour  le  harcèlement,  le tracking  et  la  cybercriminalité.Chaque  contenu,  commentaire,  photo  et  vidéos  publiées  en ligne, peut révéler à tout le monde bien plus d’informations qu’on ne le croit. <br/><br/> D’autre part, les données personnelles peuvent être récoltées à bon escient,dans le respect de nos droits et de nos intérêts, par exemple par des acteurs publics. Elles peuvent être utilisées à  des  fins  d’intérêtgénéral,  pour  la  recherche,  le  développement  des  services  publics,  la médecine, etc.. en respectant le droit des personnes.10 bonnes habitudes à prendre sur les réseaux : <br/><br/> https://www.cnil.fr/fr/10-conseils-pour-rester-net-sur-le-web </p>

                        <p className="at2_text">{at2_text.text.paragraph2}</p>
                    </Col>
                </Row>
                <Row className="at2_row3">
                    <Col>
                        <h2 className="at2_act">Activité</h2>
                    </Col>
                    <Col>
                        <ButtonGroup className="at2_button_grp">
                            <Button className="" onClick={this.start}>start</Button>
                            <Button className="" onClick={this.objDetector}>objDetector</Button>
                            <Button className="" onClick={this.PoseNet}>PoseNet</Button>
                            <Button className="" onClick={this.Facemesh}>Facemesh</Button>
                            <Button className="" onClick={this.HandPose}>HandPose</Button>
                            <Button className="" onClick={this.stopModel}>stop</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="at2_row4">
                    <div className="rect1">
                        <div ref={this.cvRef} className="rect2"></div>
                        <div ></div>

                    </div>
                </Row>
            </Container>
        )
    }
}

export default At2;