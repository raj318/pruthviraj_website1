var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth-30;
canvas.height = window.innerHeight-30;

var ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// // box with lines
// ctx.beginPath();
// ctx.moveTo(100, 200);
// ctx.lineTo(200, 400);
// ctx.lineTo(400, 600);
// ctx.lineTo(600, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(100, 200);
// ctx.strokeStyle= "#ff0000";
// ctx.stroke();


// // closed space with curves
// ctx.beginPath();
// ctx.moveTo(80, 400);
// ctx.quadraticCurveTo(40, 50, 140, 306.5);
// ctx.quadraticCurveTo(180, 440, 180, 600);
// //ctx.quadraticCurveTo(50, 120, 30, 125);
// //ctx.quadraticCurveTo(60, 120, 65, 100);
// //ctx.quadraticCurveTo(125, 100, 125, 62.5);
// //ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();

var prev_x = 350;
var prev_y = 10;

var speedx = 1;
var speedy = 0.1;

var prev_x2 = 550;
var prev_y2 = 500;

var speedx2 = 0.5;
var speedy2 = 1;
var speed = 10;
animate();
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);        
    drawcurve(prev_x2, prev_y2);
    drawcurveb(prev_x, prev_y, prev_x2, prev_y2);
    if (prev_y > 25 || prev_y < 0){
        speedy = -speedy;
    }
    if (prev_x > 310 || prev_x < 390){
        speedx = -speedx;
    }
    prev_x += speedx;
    prev_y += speedy;

    if (prev_y2 > 550 || prev_y2 < 480){
        speedy2 = -speedy2;
    }
    if (prev_x2 > 600 || prev_x2 < 540){
        speedx2 = -speedx2;
    }
    prev_x2 += speedx2;
    prev_y2 += speedy2;
}

function drawcurve(x, y){
    ctx.beginPath();
    ctx.moveTo(80, 800);
    ctx.quadraticCurveTo(y-400, x-900, 220, 800);
    //ctx.quadraticCurveTo(y+220, x+380, 300, 600);
    //ctx.quadraticCurveTo(50, 120, 30, 125);
    //ctx.quadraticCurveTo(60, 120, 65, 100);
    //ctx.quadraticCurveTo(125, 100, 125, 62.5);
    //ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.stroke();
}

function drawcurveb(x, y, x2, y2){
    ctx.beginPath();
    ctx.moveTo(400, 1000);
    console.log(x, y, x2, y2);
    ctx.bezierCurveTo(x, y, x2, y2, 550, 1000);
    //ctx.quadraticCurveTo(y+220, x+380, 300, 600);
    //ctx.quadraticCurveTo(50, 120, 30, 125);
    //ctx.quadraticCurveTo(60, 120, 65, 100);
    //ctx.quadraticCurveTo(125, 100, 125, 62.5);
    //ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.stroke();
}

// lot more complicated
// ctx.beginPath();
// ctx.strokeStyle = 'black';
// ctx.lineWidth = 5;
// ctx.moveTo(200, 20);
// ctx.arcTo(200,130, 100,20, 40);
// ctx.stroke();


// ctx.beginPath();
// ctx.moveTo(25, 25);
// ctx.lineTo(35, 28);
// ctx.lineTo(45, 35);
// ctx.lineTo(55, 43);
// ctx.lineTo(45, 55);
// ctx.lineTo(40, 59);
// ctx.lineTo(35, 62);
// ctx.lineTo(30, 40);
// ctx.lineTo(30, 30);
// ctx.lineTo(25, 25);
// ctx.fillStyle= "blue";
// ctx.fill();





