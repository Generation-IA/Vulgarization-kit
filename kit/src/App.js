import React from "react";
import First from "./First.js";
import Presentation from "./Presentation.js";
import Decouverte from "./Decouverte.js";
import At1 from "./At1.js";
import At2 from "./At2.js";
import Explication1 from "./Explication1.tsx";
import Explication2 from "./Explication2.js";
import "bootstrap/dist/css/bootstrap.css";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

// function that returns window size
function getWindowSize() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight,
  };
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.cvRef = React.createRef();
  }

  // Function that gets the cookie value
  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    // froce desktop mode for mobile browser
    // get the cookie value for view mode
    var viewMode = this.getCookie("viewMode");
    if (viewMode === "mobile") {
      document.getElementById("viewMode").checked = true;
    }
    else if (viewMode === "desktop") {
      // Set scale to 1
      document.getElementById("scale").value = 1;
    }
  }

  // Log on the console the window size
  updateWindowDimensions = () => {
    const { width, height } = getWindowSize();
    console.log(`Window size: ${width}x${height}`); // eslint-disable-line no-console
  };


  render() {
    return (
      <div class="center">
        <First />
        <Presentation />
        <Decouverte />
        <At1 />
        <Explication1 />
        <At2 />
        <Explication2 />
      </div>
    );
  }
}

export default App;
