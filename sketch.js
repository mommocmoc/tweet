var index = 1;
var mon;
var d;
var h;
var m;
var s;
var dd;
var img;
var pixel;
var input;
var t;

function preload(){
img = loadImage('https://mommocmoc.github.io/wedding/tbgs_Weddingcard.png');
}

function setup(){
input = createInput('축하메시지를 적어주세요.');
input.parent('message');
var cnv = createCanvas(500, 600);
cnv.parent('coloring');
image(img,0,0);
pixel = get();
}

function draw(){
t = input.value();
textAlign(CENTER);
textSize(24);
text(t,250,550);
 
}

function mouseDragged(){
 noStroke();
fill(255,102,204);
ellipse(mouseX,mouseY,16,16)
image(pixel,0,0);
}

function touchStarted() {
  ellipse(mouseX, mouseY, 5, 5);
  image(pixel,0,0);
  // prevent default
  return false;
}

function keyPressed(){

//makeScreenshot();
mon = str(month());
d = str(day());
h = str(hour());
m = str(minute());
s = str(second());
dd = mon + d + h + m + s; 
}
function makeScreenshot(){
var canvas = $('canvas')[0];
var data = canvas.toDataURL('image/png').replace(/data:image\/png;base64,/, '');
 
// make names  eg "img_1.png", "img_2.png"......etc"
var iname = 'img_' + dd + index + '.png'; 
 
$('canvas').remove();
//post to php
$.post('save.php',{data: data, iname });
// update counter
index++;
//restart sketch
setup();
            }