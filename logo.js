//image loader:

var canvas = document.getElementById("logo_image");
var context = canvas.getContext("2d");

var myImg = new Image();
myImg.onload= drawImageScaled.bind(null, myImg, context);

function drawImageScaled(myImg, context) {
   var canvas = context.canvas ;
   var hRatio = canvas.width  / myImg.width    ;
   var vRatio =  canvas.height / myImg.height  ;
   var ratio  = Math.min ( hRatio, vRatio );
   var centerShift_x = ( canvas.width - myImg.width*ratio ) / 2;
   var centerShift_y = ( canvas.height - myImg.height*ratio ) / 2;  
   ctx.clearRect(0,0,canvas.width, canvas.height);
   ctx.drawImage(myImg, 0,0, myImg.width, myImg.height,
                      centerShift_x,centerShift_y,myImg.width*ratio, myImg.height*ratio);  
}

var name = './images/' + getRndInteger(1, 12).toString() + '.png';
myImg.src = name;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//random color pusher
const ctx = canvas.getContext('2d');

let speed = 90;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const Dot = function(color){
  //this.r = Math.floor(Math.random() * 100);
  this.r = getRndInteger(200,300);
  this.x = Math.floor(Math.random() * canvas.width / (this.r * 2)) * this.r * 2;
  this.y = Math.floor(Math.random() * canvas.height / (this.r * 2)) * this.r * 2;
  
  this.render = function(){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
    ctx.fill();
  };
  
  this.move = function(){
    const rand = Math.random();
    
    if(rand < 0.25 && this.x < canvas.width){
      this.x += speed;
    }else if(rand < 0.5 && this.x > 0){
      this.x -= speed;
    }else if(rand < 0.75 && this.y < canvas.height){
      this.y += speed;
    }else if (rand > 0.75 && this.y > 0){
      this.y -= speed;
    }
  }
}

//const colors = ['red', 'blue'];
//const colors = ['rgba(0, 0, 0, 0.1)'];

const colors = ['rgba(255, 0, 0, 0.002)', 'rgba(0, 255, 0, 0.002)', 'rgba(0, 0, 255, 0.002)'];

//multiple rgb for simulation to run quicker
/*
let colors = [];
for(let i = 0; i < 3; i++){
  colors.push('rgba(255, 0, 0, 0.2)');
  colors.push('rgba(0, 255, 0, 0.2)');
  colors.push('rgba(0, 0, 255, 0.2)');
}
*/

//for randomly picked colors
/*
let colors = [];
const colorsNumber = Math.floor(Math.random() * 10) + 3;
for(let i = 0; i < colorsNumber; i++){
  let r = Math.floor(190 + Math.random() * 65);
  let g = Math.floor(190 + Math.random() * 65);
  let b = Math.floor(190 + Math.random() * 65);
  colors.push('rgba(' + r + ', ' + g + ', ' + b + ', 0.01)');  
}
*/

const dots = colors.map(function(color){return new Dot(color)});


//const loop = function(){
//  //ctx.clearRect(0,0, canvas.width, canvas.height);
//  dots.forEach(function(dot){dot.render(); dot.move();})
//  //speed = Math.floor(Math.random() * (60 - 20)) + 20;
//  requestAnimationFrame(loop);
//}

//loop();

let start;

function step(timestamp) {
  if (start === undefined)
    start = timestamp;
  const elapsed = timestamp - start;
	
	dots.forEach(function(dot){dot.render(); dot.move();})

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);

