var song;
var fft;
var button;

var volhistory = [];
var w;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('The Maids of Michelstown.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('play/stop');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 128);
  w = width / 64;
  ellipse(width/2, height/2, 100, 100);
}

//function draw() {
  //background(0);
  //var spectrum = fft.analyze();
  //console.log(spectrum);
  //stroke(255);
  //noStroke();
  //translate(width / 2, height / 2);
  //beginShape();
  //for (var i = 0; i < spectrum.length; i++) {
    //var angle = map(i, 0, spectrum.length, 0, 360);
    //var amp = spectrum[i];
    //var r = map(amp, 0, 256, 20, 100);
    //fill(i, 255, 255);
    //var x = r * cos(angle);
    //var y = r * sin(angle);
    //stroke(i, 255, 255);
    //line(0, 0, x, y);
    //vertex(x, y);
    //var y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  //}
  //endShape();
//}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  console.log(spectrum);
  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w - 2, height - y);
  }
  //stroke(255);
  //Fill();
}