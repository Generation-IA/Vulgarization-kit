import * as ml5 from "ml5";

const SentimentModule = (p) => {
  let sentiment;
  let statusEl;
  let submitBtn;
  let inputBox;
  let sentimentResult;
  p.setup = () => {
    // p.noCanvas();
    var canvas = p.createCanvas(1000,1000);
    canvas.parent('nplDiv'); 
    // initialize sentiment
    sentiment = ml5.sentiment("movieReviews", modelReady);

    // setup the html environment
    statusEl = p.createP("Loading Model...");
    inputBox = p.createInput(
      "Today is the happiest day and is full of rainbows!"
    );
    inputBox.attribute("size", "75");
    submitBtn = p.createButton("submit");
    sentimentResult = p.createP("sentiment score:");

    // predicting the sentiment on mousePressed()
    submitBtn.mousePressed(getSentiment);
  };

  function getSentiment() {
    // get the values from the input
    const text = inputBox.value();

    // make the prediction
    const prediction = sentiment.predict(text);

    // display sentiment result on html page
    sentimentResult.html("Sentiment score: " + prediction.score);
  }

  function modelReady() {
    // model is ready
    statusEl.html("model loaded");
  }
};

export default SentimentModule;
