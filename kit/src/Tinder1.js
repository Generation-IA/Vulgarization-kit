import React, { useState, useMemo, useRef } from "react";
import userEvent from "@testing-library/user-event";
import TinderCard from "react-tinder-card";
import "./css/Tinder1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from '@mui/material/Stack';
import { Container } from "react-bootstrap";

// correct answer counter
let correctAnswer = 0;

function Tinder1() {
  const questions = [
    {
      index: 3,
      title: "Do you think robots will rule the world ?",
      answers: ["Yes", "No"],
      correctAnswer: "No",
    },
    {
      index: 2,
      title: "Are you interested in AI ?",
      answers: ["Yes", "No"],
      correctAnswer: "Yes",
    },
    {
      index: 1,
      title: "Have you ever heard about AI ?",
      answers: ["Yes", "No"],
      correctAnswer: "Yes",
    },
  ];

  const results = [];

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
      <h2 class='title'>Vrai / Faux</h2>
      <p>QUIZZ TIME BITCH</p>

      <h2 class='intox'>Info ou intox?</h2>
      <Stack spacing={-40}>
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
              <h1>
                {item.index} : {item.title} <br />
                {/* <li class="answer">{item.answers[0]}</li>
              <li class="answer">{item.answers[1]}</li> */}
              </h1>
              {/* <div className="buttons">
              <button
                type="button"
                class="btn btn-danger"
                style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                onClick={() => swipe("left")}
              >
                Swipe left!
              </button>
              <button
                type="button"
                class="btn btn-primary"
                style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
                onClick={() => goBack()}
              >
                Undo swipe!
              </button>
              <button
                type="button"
                class="btn btn-success"
                style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                onClick={() => swipe("right")}
              >
                Swipe right!
              </button> */}
              {/* </div>{" "} */}
            </TinderCard>
          </center>
        ))}
      </Stack>
    </Container>
  );
}

export default Tinder1;
