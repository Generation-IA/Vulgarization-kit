import * as ml5 from "ml5";
import p5 from 'p5';

const SketchHand = (p) => {
    let handpose;
    let video;
    let hands = [];
    let width = 760;
    let height = 1070;

    p.setup = () => {
        p.createCanvas(1070, 760);
        video = p.createCapture(p5.VIDEO);
        video.size(width, height);
        video.volume(0);
        handpose = ml5.handpose(video, modelReady);

        // This sets up an event that fills the global variable "predictions"
        // with an array every time new hand poses are detected
        handpose.on("hand", results => {
            hands = results;
        });

        // Hide the video element, and just show the canvas
        video.hide();
    }
    
    function modelReady() {
        console.log("Model ready!");
    }

    p.draw =() => {
        p.image(video, 0, 0, width, height);

        // We can call both functions to draw all keypoints and the skeletons
        drawKeypoints();
    }

    // A function to draw ellipses over the detected keypoints
    function drawKeypoints() {
        for (let i = 0; i < hands.length; i += 1) {
            const hand = hands[i];
            for (let j = 0; j < hand.landmarks.length; j += 1) {
                const keypoint = hand.landmarks[j];
                p.fill(0, 255, 0);
                p.noStroke();
                p.ellipse(keypoint[0], keypoint[1], 10, 10);
            }
        }
    }
}

export default SketchHand;