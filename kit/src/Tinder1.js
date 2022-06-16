import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import "./css/Tinder1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from '@mui/material/Stack';
import { Container } from "react-bootstrap";
import questions from "./Ressources/Tinder1.json";

function Tinder1() {
  // build the list of correct answers
  const correctAnswers = useMemo(() => {
    return questions.map((question) => question.correctAnswer);
  }
    , [questions]);
  console.log(correctAnswers);

  const results = [];

  // function that counts the number of correct answers
  const countCorrectAnswers = () => {
    let count = 0;
    for (let i = 0; i < results.length; i++) {
      if (results[i] === correctAnswers[i]) {
        count++;
      }
    }
    return count;
  }

  // function that updates the score
  const updateScore = () => {
    let score = countCorrectAnswers();
    // get html element
    let scoreElement = document.querySelector(".rslt");
    // update the score
    scoreElement.innerText = score + "/" + questions.length;
  }

  const [currentIndex, setCurrentIndex] = useState(questions.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(questions.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < questions.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    console.log("You swiped: " + direction);
    if (direction === "right") {
      results.push("Yes");
    } else {
      results.push("No");
    }
    console.log("RESULTS " + results); // Swipe t
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // update the score
    updateScore();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < questions.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  questions.map((item) => {
    console.warn("Index ", item);
  });

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };


  return (
    <Container className="Tinder">
      <h2 class='title'>Vrai / Faux ?</h2>
      <h2 class='intox'>🔥 Swipe !</h2>
      <div className="Tinder-container">
        <Stack spacing={-58}>

          {questions.map((item, index) => (
            <center>
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={item.name}
                onSwipe={(dir) => swiped(dir, item.name, index)}
                onCardLeftScreen={() => outOfFrame(item.name, index)}
                preventSwipe={["up", "down"]}
              >
                <img src="cardLogo.svg" alt="" />
                <div className="tinderTitle">
                  Culture <br /> Générale
                </div>
                <h1 className="tindertext">
                  {item.index} : {item.title} <br />
                  {/* <li class="answer">{item.answers[0]}</li>
              <li class="answer">{item.answers[1]}</li> */}
                </h1>
                <div className="buttons">
                  <button
                    type="button"
                    class="btn btn-danger"
                    style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                    onClick={() => swipe("left")}
                  >
                    Faux!
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                    onClick={() => swipe("right")}
                  >
                    Vrai!
                  </button>
                </div>{" "}
              </TinderCard>
            </center>
          ))}
        </Stack>
      </div>
      <h3>Nombre de beignets captés: 🍩</h3>
      <h3 class='rslt'>{countCorrectAnswers()} / {questions.length}</h3>
    </Container>
  );
}

export default Tinder1;
