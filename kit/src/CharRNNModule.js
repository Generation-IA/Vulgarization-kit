import * as ml5 from "ml5";

const charRNNModule = (p) => {

let charRNN;
let textInput;
let tempSlider;
let lengthSlider;
let runningInference = true;

let generated = false;
let last;

let original;

p.setup = () => {
  // noCanvas();
  var canvas = p.createCanvas(1000,1000);
  canvas.parent('ncharRNNDiv'); 
  // Create the LSTM Generator passing it the model directory
  charRNN = ml5.charRNN('https://raw.githubusercontent.com/ml5js/ml5-data-and-models/main/models/charRNN/woolf/', modelReady);

  // Grab the DOM elements
  textInput = p.select('#textInput');
  lengthSlider = p.select('#lenSlider');
  tempSlider = p.select('#tempSlider');

  // Run "changing" anytime something changes
  textInput.input(changing);
  lengthSlider.input(changing);
  tempSlider.input(changing);

  // Check every so often if we should generate something new
  setInterval(checkGenerate, 500);
}

function modelReady() {
  p.select('#status').html('Model Loaded');
  runningInference = false;
}

// Has 500 milliseconds passed since the last time a change was made?
function checkGenerate() {
  const passed = p.millis() - last;
  if (passed > 500 && !generated) {
    generate();
    generated = true;
  }
}

// Update the time
function changing() {
  generated = false;
  last = p.millis();
}

// Generate new text!
function generate() {
  // Grab the original text
 original = textInput.value();
  // Make it to lower case
  const txt = original.toLowerCase();

  // prevent starting inference if we've already started another instance
  // or if there is no prompt
  // TODO: is there better JS way of doing this?
  if (!runningInference && txt.length > 0) {
    runningInference = true;

    // Update the status log
    p.select('#status').html('Generating...');

    // Update the length and temperature span elements
    p.select('#length').html(lengthSlider.value());
    p.select('#temperature').html(tempSlider.value());

    // Here is the data for the LSTM generator
    const data = {
      seed: txt,
      temperature: tempSlider.value(),
      length: lengthSlider.value(),
    };

    // Generate text with the charRNN
    charRNN.generate(data, gotData);
  }
}

// Update the DOM elements with typed and generated text
function gotData(err, result) {
  runningInference = false;
  if (err) {
    console.error(err);
    return;
  }
  p.select('#status').html('Ready!');
  p.select('#original').html(original);
  p.select('#prediction').html(result.sample);
}};

export default charRNNModule