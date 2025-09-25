var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 800;

var ctx = canvas.getContext('2d');

if (ctx){
    ctx.fillStyle = "blue";
    ctx.fillRect(20, 20, 100, 100);
    ctx.strokeStyle="green";
    ctx.lineWidth = 10;
    ctx.strokeRect(30, 30, 100, 100);
}
ctx.clearRect(30, 30, 400, 20);

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.strokeRect(150, 20, 100, 100);

ctx.fillStyle = "yellow";
ctx.fillRect(250, 20, 50, 50);

ctx.strokeStyle = "blue";
ctx.fillStyle = "orange";
ctx.strokeRect(350, 20, 50, 50);
ctx.fillRect(350, 20, 50, 50);


ctx.strokeStyle = "grey";
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(100, 100);
ctx.lineTo(400, 100);
ctx.stroke();

ctx.lineWidth = 5;
ctx.strokeStyle = "lightblue";
ctx.lineCap = "butt";
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(250, 200);
ctx.lineTo(350, 250);
ctx.stroke();

ctx.lineWidth = 10;
ctx.strokeStyle = "lightgreen";
ctx.lineCap = "round";
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(250, 300);
ctx.stroke();

ctx.lineWidth = 20;
ctx.strokeStyle = "lightred";
ctx.lineCap = "square";
ctx.beginPath();
ctx.moveTo(50, 400);
ctx.lineTo(250, 400);
ctx.stroke();