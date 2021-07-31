var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth-5;
canvas.height = window.innerHeight-5;

var center = {
	x: window.innerWidth/2,
	y: window.innerHeight/2
}
center.x = window.innerWidth/2;
center.y = window.innerHeight/2;

var c = canvas.getContext('2d');


var stararray = [];

for (var i=0;i<400;i++){
	var x=Math.random() * window.innerWidth; 
	var y=Math.random() * window.innerHeight;
	var r=(Math.random() * 1) + 1;
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
	this.update = function(bright, plane) {
		if (mouse.x - this.x < 30 && mouse.x - this.x > -30
			&& mouse.y - this.y < 30 && mouse.y - this.y > -30){
			if (this.radius<3){
				this.radius += 0.2;
			}
		}else{
			if (this.radius > radius && this.radius > 0){
				this.radius -= 0.2;
			}
		}
		if (bright == 1){
			var random_star = Math.floor(Math.random() * 100) ;
		
			if (random_star > 30 && random_star < 32){
				this.radius += 1;
				this.draw();
				this.radius -= 1;
			}
		}else{
			this.draw();
		}
		if (mouse.x < center.x){
			this.x -= 0.1;
		}else{
			this.x += 0.1;
		}
		if (mouse.y < center.y){
			this.y -= 0.1;
		}else {
			this.y +=0.1;
		}
		
		
		
		if (this.x <=1){
			this.x = Math.random()+ innerWidth-1;
		}
		if (this.x >= innerWidth){
			this.x = Math.random()+ 1
		}
		if (this.y <=1){
			this.y = Math.random()+ innerHeight-1;
		}
		if (this.y >= innerHeight){
			this.y = Math.random()+1
		}
	}
}

window.addEventListener('mousemove', function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
		
	})

function skyanimate(){
	requestAnimationFrame(skyanimate);
	var x=Math.random() * window.innerWidth; 
	var y=Math.random() * window.innerHeight;
	var r=Math.random() * 5;
	c.clearRect(0, 0, window.innerWidth, innerHeight);
	
	for (var i=0;i<stararray.length;i++){
		var random_glow = Math.floor(Math.random() * 100) ;
		if (random_glow > 30 && random_glow < 35){
			stararray[i].update(1);
		}else {
			stararray[i].update(0);
		}
	}
}

skyanimate();



