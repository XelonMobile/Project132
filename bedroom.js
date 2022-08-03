function preload(){
    img = loadImage('background.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#6293e3");
    text("Table",  45, 75);
    noFill();
    stroke("#6293e3");
    rect(30, 60, 450, 350 );

    fill("#6293e3");
    text("Couch", 320, 120);
    noFill();
    rect(300, 90, 270, 320 );
    stroke("#6293e3");

}

img = "";
status = "";

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error){
        console.log(error);
    } else {
    console.log(results);
    }
}