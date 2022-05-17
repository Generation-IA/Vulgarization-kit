import React from "react"
import { Container } from "react-bootstrap";
const cookie = require("./img/cookie.png")

let imageClick = 0;

class Explication2 extends React.Component {
    // function that counts the number of times the image is clicked
    handleClick = () => {
        // add event listener to the image
        document.getElementById("cookie").addEventListener("click", () => {
            imageClick++;
            console.log(imageClick);
        }
        );
    }

    componentDidMount() {
        this.handleClick();
    }
            
    render() {
        return (
            <Container>
                <h1>Hello World</h1>
                <img id="cookie" src={cookie} alt="cookie" />
            </Container>
        )
    }
}
export default Explication2;