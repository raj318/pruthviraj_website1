var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth-5;
canvas.height = window.innerHeight-5;


var c = canvas.getContext('2d');


var stararray = [];

for (var i=0;i<500;i++){
	var x=Math.random() * window.innerWidth; 
	var y=Math.random() * window.innerHeight;
	var r=(Math.random() * 2) +1;
	if (r < 0){
		i -= 1;
	}
	stararray.push(new star(x, y, r));
}

var mouse = {
	x: undefined,
	y: undefined
};


function star(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
	
	this.draw = function() {
		//c.clearRect(0, 0, window.innerWidth, innerHeight);
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, 22.7, false);
		c.fillStyle = ["white"];
		c.fill();
		c.stroke(); 
	}
	this.update = function() {
		if (mouse.x - this.x < 50 && mouse.x - this.x > -50
			&& mouse.y - this.y < 50 && mouse.y - this.y > -50){
			if (this.radius<3){
				this.radius += 2;
			}
		}else{
			if (this.radius > radius && this.radius > 0){
				this.radius -= 1;
			}
		}
		this.draw();
	}
}

window.addEventListener('mousemove', function(event) {
		console.log(mouse.x, mouse.y);
		mouse.x = event.x;
		mouse.y = event.y;
	})

function skyanimate(){
	requestAnimationFrame(skyanimate);
	var x=Math.random() * window.innerWidth; 
	var y=Math.random() * window.innerHeight;
	var r=Math.random() * 5;
	c.clearRect(0, 0, window.innerWidth, innerHeight);
	
	for (var i = 0;i< stararray.length;i++){
		stararray[i].update();
	}
}

skyanimate();



