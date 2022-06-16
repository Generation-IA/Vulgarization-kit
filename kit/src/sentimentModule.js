import * as ml5 from "ml5";

const SentimentModule = (p) => {
  let sentiment;
  let statusEl;
  let submitBtn;
  let inputBox;
  let sentimentResult;
  p.setup = () => {
    // p.noCanvas();
    var canvas = p.createCanvas(100,100);
    canvas.parent('nlpDiv'); 
    // initialize sentiment
    sentiment = ml5.sentiment("movieReviews", modelReady);

    // setup the html environment
    statusEl = p.createP("Chargement du modèle...");
    inputBox = p.createInput(
      "Quelle journée fantastique"
    );
    inputBox.attribute("size", "75");
    submitBtn = p.createButton("Analyser !");
    sentimentResult = p.createP("Score de sentiment:");

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
    statusEl.html("modèle chargé");
  }
};

export default SentimentModule;
