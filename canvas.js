var canvas;
var c;
var burnhouse1;
var positionOfCanavasElement;
var x1;
var y1;
var flyX=0;
var flyY=0;
var speedX=2;
var speedY=2;
var rotate=0;
var rotateD=0;

function main(){
	
	canvas=document.getElementById("text1");
	c=canvas.getContext("2d");
	
	canvas.addEventListener('mousemove',mouseMove,false);
	canvas.addEventListener('mousedown',mouseDown,false);
	canvas.addEventListener('contextmenu', function(event){event.preventDefault();}, false);
	
	
	burnhouse1=new Image();
	burnhouse1.src="house1.jpg";
	

	

	setInterval("draw();",16);
}

function draw(){

	flyX += speedX;

	if( flyX > 10) {
		speedX = Math.floor((Math.random() * -1.2) + 0);
		
	}if(flyX < -10){
		speedX = Math.floor((Math.random() * 1.2) + 1);
	}
	
	flyY += speedY;	
	if( flyY > 10) {
		speedY = Math.floor((Math.random() * -1.2) + 0);
	}if(flyY < -10){
		speedY = Math.floor((Math.random() * 1.2) + 1);
	}
		
	
	c.clearRect(0,0,canvas.width,canvas.height);
	
	c.drawImage(burnhouse1,0,0);
	
	c.save();
	drawDrone(x1+flyX,y1+flyY,1);
	c.restore();
	
}

function mouseMove(event){
	positionOfCanavasElement=findPos(event.target);
	x1=event.pageX-positionOfCanavasElement.x;
	y1=event.pageY-positionOfCanavasElement.y;
	
	

}

function mouseDown(event){
	
	var rot=250;
	
	if(event.which==3){
		burnhouse1.src="house1.jpg";
			
		rotate=1;

	// makes it shoot kinda. a couple of times
	}else{
		
		setTimeout(function(){
				c.save();
				drawDrone(x1,y1,2);
				c.restore();	
			},
			50 // 2 sec
		);
		
		setTimeout(
			function(){
				c.save();
				drawDrone(x1,y1,2);
				c.restore();	
			},
			100 // 2 sec
		);
		
		setTimeout(
			function(){
				c.save();
				drawDrone(x1,y1,2);
				c.restore();	
			},
			150 // 2 sec
		);
		setTimeout(
			function(){
				c.save();
				drawDrone(x1,y1,2);
				c.restore();	
			},
			200 // 2 sec
		);
		setTimeout(
			function(){
				c.save();
				drawDrone(x1,y1,2);
				c.restore();	
			},
			250 // 2 sec
		);
		
		if(y1 > 175 && y1 < 235){
			setTimeout(
				function(){
					burnhouse1.src="house2.jpg";	
				},
				300 // 2 sec
			);
				
		}
	}
}


function drawDrone(x,y,who){
	// rotatemode for rightclick
	if(rotate==1){
		
		
		c.translate(x,y);
		c.rotate(Math.PI / 180 * rotateD);
		c.scale(5,5);
		rotateD += 10;
		
		
		if(rotateD > 360){
			console.log("rotateD");
			rotate=0;
			rotateD=0;
		}
		
	}else{
		c.translate(x,y);
		c.scale(5,5);		
	}
	
	// draws the drone
	if(who==1){
	

		
		c.beginPath();
		c.moveTo(17.836,7.907);
		c.lineTo(17.336,7.907);
		c.lineTo(17.336,7.407);
		c.lineTo(13.514,7.407);
		c.lineTo(13.514,6.155);
		c.lineTo(13.014,6.155);
		c.lineTo(13.096,5.662);
		c.lineTo(3.435,4.052);
		c.lineTo(2,-2.766);
		c.lineTo(3.841,-2.894);
		c.bezierCurveTo(4.153,-1.896,5.321,-1.172,6.764,-1.172);
		c.bezierCurveTo(8.453,-1.172,9.776,-2.161,9.776,-3.424);
		c.bezierCurveTo(8.453,-5.677,8.453,-5.677,6.764,-5.677);
		c.bezierCurveTo(5.98,-5.677,5.283,-5.458,4.752,-5.103);
		c.lineTo(4.752,-7.603);
		c.bezierCurveTo(5.282,-7.239,5.98,-7.014,6.764,-7.014);
		c.bezierCurveTo(8.453,-7.014,9.776,-8.029,9.776,-9.325);
		c.bezierCurveTo(9.776,-10.621,8.453,-11.636,6.764,-11.636);
		c.bezierCurveTo(3.752,-10.62,3.752,-10.62,3.752,-9.324);
		c.bezierCurveTo(3.752,-9.146,3.782,-8.976,3.829,-8.811);
		c.lineTo(-4.18,-10.445);
		c.bezierCurveTo(-4.433,-11.519,-5.634,-12.336,-7.079,-12.336);
		c.bezierCurveTo(-8.707,-12.336,-10.033,-11.299,-10.033,-10.025);
		c.bezierCurveTo(-10.033,-8.751,-8.708,-7.714,-7.079,-7.714);
		c.bezierCurveTo(-6.261,-7.714,-5.52,-7.976,-4.985,-8.398);
		c.lineTo(-4.669,-6.405);
		c.bezierCurveTo(-5.218,-6.682,-5.884,-6.844,-6.612,-6.844);
		c.bezierCurveTo(-8.53,-6.844,-10.032,-5.726,-10.032,-4.3);
		c.bezierCurveTo(-10.032,-2.874,-8.53,-1.756,-6.612,-1.756);
		c.bezierCurveTo(-5.791,-1.756,-5.056,-1.969,-4.473,-2.316);
		c.lineTo(-2.089,-2.482);
		c.lineTo(-2.566,3.052);
		c.lineTo(-5.83,2.508);
		c.lineTo(-5.912,3.001);
		c.lineTo(-6.412,3.001);
		c.lineTo(-6.412,15.15);
		c.lineTo(-5.912,15.15);
		c.lineTo(-5.86,15.647);
		c.lineTo(13.065,13.661);
		c.lineTo(13.013,13.164);
		c.lineTo(13.513,13.164);
		c.lineTo(13.513,11.678);
		c.lineTo(17.335,11.678);
		c.lineTo(17.335,11.178);
		c.lineTo(17.835,11.178);
		c.lineTo(17.835,7.907);
		c.lineTo(17.836,7.907);
		c.moveTo(0.76,-3.8);
		c.lineTo(0.784,-3.684);
		c.lineTo(-0.993,-3.56);
		c.lineTo(-0.972,-3.8);
		c.lineTo(0.76,-3.8);
		c.lineTo(0.76,-3.8);
		c.moveTo(1.782,-3.8);
		c.lineTo(2.449,-3.8);
		c.lineTo(1.792,-3.754);
		c.lineTo(1.782,-3.8);
		c.lineTo(1.782,-3.8);
		c.moveTo(3.752,-3.891);
		c.lineTo(2.766,-3.822);
		c.lineTo(2.766,-8.007);
		c.lineTo(3.752,-7.806);
		c.lineTo(3.752,-3.891);
		c.lineTo(3.752,-3.891);
		c.moveTo(4.752,-3.424);
		c.bezierCurveTo(4.752,-3.553,4.794,-3.676,4.856,-3.795);
		c.lineTo(6.015,-3.232);
		c.lineTo(5.479,-2.477);
		c.bezierCurveTo(5.041,-2.708,4.752,-3.048,4.752,-3.424);
		c.lineTo(4.752,-3.424);
		c.moveTo(6.5,-2.189);
		c.lineTo(6.898,-2.75);
		c.lineTo(7.616,-2.299);
		c.bezierCurveTo(7.355,-2.22,7.067,-2.172,6.764,-2.172);
		c.bezierCurveTo(6.674,-2.172,6.587,-2.182,6.5,-2.189);
		c.lineTo(6.5,-2.189);
		c.moveTo(8.563,-2.885);
		c.lineTo(7.626,-3.473);
		c.lineTo(8.43,-4.115);
		c.bezierCurveTo(8.647,-3.915,8.776,-3.677,8.776,-3.424);
		c.bezierCurveTo(8.775,-3.231,8.695,-3.05,8.563,-2.885);
		c.lineTo(8.563,-2.885);
		c.moveTo(7.432,-4.598);
		c.lineTo(6.698,-4.012);
		c.lineTo(5.723,-4.485);
		c.bezierCurveTo(6.03,-4.604,6.385,-4.677,6.764,-4.677);
		c.bezierCurveTo(6.998,-4.677,7.221,-4.646,7.432,-4.598);
		c.lineTo(7.432,-4.598);
		c.moveTo(4.752,-9.324);
		c.bezierCurveTo(4.752,-9.546,4.85,-9.753,5.006,-9.939);
		c.lineTo(6.07,-9.197);
		c.lineTo(5.477,-8.333);
		c.bezierCurveTo(5.04,-8.576,4.752,-8.931,4.752,-9.324);
		c.lineTo(4.752,-9.324);
		c.moveTo(6.764,-8.013);
		c.bezierCurveTo(6.668,-8.013,6.576,-8.023,6.484,-8.032);
		c.lineTo(7.077,-8.896);
		c.lineTo(8.763,-9.406);
		c.bezierCurveTo(8.766,-9.378,8.776,-9.352,8.776,-9.323);
		c.bezierCurveTo(8.775,-8.613,7.854,-8.013,6.764,-8.013);
		c.lineTo(6.764,-8.013);
		c.moveTo(8.144,-10.264);
		c.lineTo(6.851,-9.873);
		c.lineTo(5.934,-10.51);
		c.bezierCurveTo(6.189,-10.588,6.469,-10.635,6.764,-10.635);
		c.bezierCurveTo(7.293,-10.635,7.781,-10.491,8.144,-10.264);
		c.lineTo(8.144,-10.264);
		c.moveTo(-6.498,-11.267);
		c.lineTo(-7.116,-10.679);
		c.lineTo(-7.842,-11.226);
		c.bezierCurveTo(-7.606,-11.295,-7.348,-11.335,-7.079,-11.335);
		c.bezierCurveTo(-6.877,-11.335,-6.684,-11.308,-6.498,-11.267);
		c.lineTo(-6.498,-11.267);
		c.moveTo(-8.763,-10.668);
		c.lineTo(-7.845,-9.976);
		c.lineTo(-8.608,-9.228);
		c.bezierCurveTo(-8.869,-9.451,-9.033,-9.727,-9.033,-10.025);
		c.bezierCurveTo(-9.033,-10.258,-8.93,-10.476,-8.763,-10.668);
		c.lineTo(-8.763,-10.668);
		c.moveTo(-7.639,-8.778);
		c.lineTo(-7.122,-9.284);
		c.lineTo(-6.684,-8.743);
		c.bezierCurveTo(-6.812,-8.724,-6.944,-8.714,-7.08,-8.714);
		c.bezierCurveTo(-7.274,-8.714,-7.46,-8.74,-7.639,-8.778);
		c.lineTo(-7.639,-8.778);
		c.moveTo(-5.696,-9.111);
		c.lineTo(-6.4,-9.981);
		c.lineTo(-5.567,-10.773);
		c.lineTo(-5.762,-10.979);
		c.bezierCurveTo(-5.375,-10.738,-5.126,-10.398,-5.126,-10.026);
		c.bezierCurveTo(-5.126,-9.673,-5.346,-9.35,-5.696,-9.111);
		c.lineTo(-5.696,-9.111);
		c.moveTo(-4.277,-3.923);
		c.bezierCurveTo(-4.35,-3.747,-4.466,-3.58,-4.627,-3.432);
		c.lineTo(-5.631,-4.187);
		c.lineTo(-4.425,-4.719);
		c.lineTo(-4.621,-5.164);
		c.bezierCurveTo(-4.551,-5.1,-4.495,-5.03,-4.441,-4.959);
		c.lineTo(-4.277,-3.923);
		c.lineTo(-4.277,-3.923);
		c.moveTo(-5.128,-5.502);
		c.lineTo(-6.54,-4.878);
		c.lineTo(-7.593,-5.703);
		c.bezierCurveTo(-7.291,-5.792,-6.96,-5.844,-6.612,-5.844);
		c.bezierCurveTo(-6.056,-5.845,-5.542,-5.712,-5.128,-5.502);
		c.lineTo(-5.128,-5.502);
		c.moveTo(-9.033,-4.3);
		c.bezierCurveTo(-9.033,-4.631,-8.855,-4.94,-8.564,-5.194);
		c.lineTo(-7.281,-4.189);
		c.lineTo(-8.001,-3.079);
		c.lineTo(-7.873,-2.996);
		c.bezierCurveTo(-8.561,-3.271,-9.033,-3.756,-9.033,-4.3);
		c.lineTo(-9.033,-4.3);
		c.moveTo(-7.002,-2.782);
		c.lineTo(-6.485,-3.579);
		c.lineTo(-5.595,-2.91);
		c.bezierCurveTo(-5.907,-2.814,-6.25,-2.756,-6.613,-2.756);
		c.bezierCurveTo(-6.746,-2.756,-6.874,-2.769,-7.002,-2.782);
		c.lineTo(-7.002,-2.782);
		c.moveTo(-3.419,-3.392);
		c.bezierCurveTo(-3.406,-3.418,-3.398,-3.446,-3.386,-3.473);
		c.lineTo(-3.198,-3.503);
		c.lineTo(-3.252,-3.843);
		c.bezierCurveTo(-3.217,-3.991,-3.192,-4.143,-3.192,-4.301);
		c.bezierCurveTo(-3.192,-4.677,-3.302,-5.029,-3.49,-5.347);
		c.lineTo(-4.133,-9.402);
		c.lineTo(-4.258,-9.382);
		c.bezierCurveTo(-4.25,-9.4,-4.242,-9.417,-4.236,-9.435);
		c.lineTo(2.735,-8.013);
		c.lineTo(-2.907,-8.013);
		c.lineTo(-2.907,-3.8);
		c.lineTo(-1.976,-3.8);
		c.lineTo(-2.003,-3.49);
		c.lineTo(-3.419,-3.392);
		c.lineTo(-3.419,-3.392);
		c.moveTo(-1.08,-2.552);
		c.lineTo(0.992,-2.697);
		c.lineTo(2.376,3.875);
		c.lineTo(-1.577,3.216);
		c.lineTo(-1.08,-2.552);
		c.lineTo(-1.08,-2.552);
		c.moveTo(-2.792,5.682);
		c.bezierCurveTo(-4.148,5.807,-5.126,6.493,-5.126,7.382);
		c.bezierCurveTo(-5.126,8.366,-3.932,9.109,-2.348,9.109);
		c.bezierCurveTo(-0.765,9.109,0.43,8.367,0.43,7.382);
		c.bezierCurveTo(0.43,6.517,-0.492,5.84,-1.789,5.688);
		c.lineTo(-1.663,4.216);
		c.lineTo(2.597,4.926);
		c.lineTo(2.805,5.913);
		c.bezierCurveTo(2.179,6.213,1.766,6.751,1.766,7.382);
		c.bezierCurveTo(1.766,8.35,2.73,9.109,3.96,9.109);
		c.bezierCurveTo(6.154,8.35,6.154,8.35,6.154,7.382);
		c.bezierCurveTo(5.19,5.655,5.19,5.655,3.96,5.655);
		c.bezierCurveTo(3.897,5.655,3.837,5.665,3.775,5.669);
		c.lineTo(3.656,5.103);
		c.lineTo(12.513,6.579);
		c.lineTo(12.513,7.908);
		c.lineTo(13.013,7.908);
		c.lineTo(13.013,8.408);
		c.lineTo(16.835,8.408);
		c.lineTo(16.835,10.679);
		c.lineTo(13.013,10.679);
		c.lineTo(13.013,11.179);
		c.lineTo(12.513,11.179);
		c.lineTo(12.513,12.715);
		c.lineTo(-5.412,14.596);
		c.lineTo(-5.412,3.591);
		c.lineTo(-2.652,4.051);
		c.lineTo(-2.792,5.682);
		c.lineTo(-2.792,5.682);
		c.globalAlpha = 1.0;
		c.fillStyle = "#000";
		c.fill();
	}else{
		
		
		c.strokeStyle = "#000000";
		c.globalAlpha = 1.0;
		c.beginPath();
		c.moveTo(-8.07,-9);
		c.bezierCurveTo(-9.104,-9,-10,-8.552,-10,-8.782);
		c.bezierCurveTo(-10,-7.448,-9.104,-7,-8.07,-7);
		c.bezierCurveTo(-6.896,-7,-6,-7.448,-6,-8.782);
		c.bezierCurveTo(-6,-8.552,-6.896,-9,-8.07,-9);
		c.stroke();
		
		c.strokeStyle = "#000000";
		c.globalAlpha = 1.0;
		c.beginPath();
		c.moveTo(5.773,-9);
		c.bezierCurveTo(3.896,-9,3,-8.552,3,-8.081);
		c.bezierCurveTo(3,-7.448,3.896,-7,5.773,-7);
		c.bezierCurveTo(6.104,-7,7,-7.448,7,-8.081);
		c.bezierCurveTo(7,-8.552,6.104,-9,5.773,-9);
		c.stroke();
		
		c.strokeStyle = "#000000";
		c.globalAlpha = 1.0;
		c.beginPath();
		c.moveTo(-7.603,-5);
		c.bezierCurveTo(-8.104,-5,-9,-4.104,-9,-3.058);
		c.bezierCurveTo(-9,-1.896,-8.104,-1,-7.603,-1);
		c.bezierCurveTo(-5.896,-1,-5,-1.896,-5,-3.058);
		c.bezierCurveTo(-5,-4.104,-5.896,-5,-7.603,-5);
		c.stroke();
		
		c.strokeStyle = "#000000";
		c.globalAlpha = 1.0;
		c.beginPath();
		c.moveTo(5.773,-3);
		c.bezierCurveTo(3.896,-3,3,-2.552,3,-2.182);
		c.bezierCurveTo(3,-1.448,3.896,-1,5.773,-1);
		c.bezierCurveTo(6.104,-1,7,-1.448,7,-2.182);
		c.bezierCurveTo(7,-2.552,6.104,-3,5.773,-3);
		c.stroke();
		
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-5.617,-8.782);
		c.lineTo(-5.617,-8.782);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(3.262,-2.182);
		c.lineTo(3.262,-2.182);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-5.617,-8.081);
		c.lineTo(-5.617,-8.081);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(3.262,-6.971);
		c.lineTo(3.262,-6.971);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-6.902,4.244);
		c.lineTo(-6.902,4.244);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(12.023,7.398);
		c.lineTo(12.023,7.398);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(12.023,9.15);
		c.lineTo(12.023,9.15);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(16.346,9.15);
		c.lineTo(16.346,9.15);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(16.346,12.421);
		c.lineTo(16.346,12.421);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(12.023,12.421);
		c.lineTo(12.023,12.421);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(12.023,14.407);
		c.lineTo(12.023,14.407);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-6.902,16.393);
		c.lineTo(-6.902,16.393);
		c.stroke();
		c.strokeStyle = "#000000";
		c.globalAlpha = 1.0;
		c.beginPath();
		c.moveTo(-3.397,-6.271);
		c.lineTo(1,-6.271);
		c.lineTo(1,-3);
		c.lineTo(-3.397,-3);
		c.lineTo(-3.397,-6.271);
		c.stroke();
		
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-2.346,-3.934);
		c.lineTo(-2.346,-3.934);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-0.009,-3.934);
		c.lineTo(-0.009,-3.934);
		c.stroke();
		c.strokeStyle = "#000000";
		c.globalAlpha = 1.0;
		c.beginPath();
		c.moveTo(-3.339,7);
		c.bezierCurveTo(-4.104,7,-5,7.448,-5,8.625);
		c.bezierCurveTo(-5,8.552,-4.104,9,-3.339,9);
		c.bezierCurveTo(-1.896,9,-1,8.552,-1,8.625);
		c.bezierCurveTo(-1,7.448,-1.896,7,-3.339,7);
		c.stroke();
		
		c.strokeStyle = "#000000";
		c.globalAlpha = 1.0;
		c.beginPath();
		c.moveTo(2.97,7);
		c.bezierCurveTo(1.448,7,1,7.448,1,8.625);
		c.bezierCurveTo(1,8.552,1.448,9,2.97,9);
		c.bezierCurveTo(2.552,9,3,8.552,3,8.625);
		c.bezierCurveTo(3,7.448,2.552,7,2.97,7);
		c.stroke();
		
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-7.603,-3.058);
		c.lineTo(-7.603,-3.058);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-7.603,-3.058);
		c.lineTo(-7.603,-3.058);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-7.603,-3.058);
		c.lineTo(-7.603,-3.058);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-7.603,-3.058);
		c.lineTo(-7.603,-3.058);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-8.07,-8.782);
		c.lineTo(-8.07,-8.782);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-8.07,-8.782);
		c.lineTo(-8.07,-8.782);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-8.07,-8.782);
		c.lineTo(-8.07,-8.782);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(-8.07,-8.782);
		c.lineTo(-8.07,-8.782);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(5.773,-8.081);
		c.lineTo(5.773,-8.081);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(5.773,-8.081);
		c.lineTo(5.773,-8.081);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(5.773,-8.081);
		c.lineTo(5.773,-8.081);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(5.773,-2.182);
		c.lineTo(5.773,-2.182);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(5.773,-2.182);
		c.lineTo(5.773,-2.182);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(5.773,-2.182);
		c.lineTo(5.773,-2.182);
		c.stroke();
		c.strokeStyle = "#000000";
		c.beginPath();
		c.moveTo(5.773,-2.182);
		c.lineTo(5.773,-2.182);
		c.stroke();
		c.fillStyle = "#D42027";
		c.beginPath();
		c.moveTo(22.304,9.851);
		c.bezierCurveTo(22.304,9.851,21.322,9.838,20.086,9.823);
		c.bezierCurveTo(17.27,9.79,13.14,9.75,16.346,9.851);
		c.bezierCurveTo(22.888,10.056,19.617,3.514,22.888,10.056);
		c.bezierCurveTo(7.489,10.087,7.489,10.087,21.322,9.838);
		c.bezierCurveTo(28.239,9.713,27.17,10.494,24.372,11.307);
		c.bezierCurveTo(17.047,12.963,17.047,12.963,17.047,12.963);
		c.bezierCurveTo(17.868,5.361,17.868,5.361,21.574,12.12);
		c.globalAlpha = 1.0;
		c.fill();
		
		c.fillStyle = "#F8ED35";
		c.beginPath();
		c.moveTo(16.346,10.693);
		c.bezierCurveTo(22.888,10.056,16.246,13.902,18.282,10.051);
		c.bezierCurveTo(20.945,12.374,20.945,12.374,20.854,10.051);
		c.bezierCurveTo(18.49,14.265,18.49,14.265,21.156,11.401);
		c.globalAlpha = 1.0;
		c.fill();
		
		c.fillStyle = "#2E409A";
		c.beginPath();
		c.moveTo(24.523,9.15);
		c.lineTo(22.887,10.056);
		c.bezierCurveTo(24.523,13.327,24.523,13.327,24.523,13.327);
		c.bezierCurveTo(18.261,8.351,18.261,8.351,24.371,11.306);
		c.globalAlpha = 1.0;
		c.fill();
		
	}

}

function findPos(obj) {
	var curleft = curtop = 0;
	
	if (obj.offsetParent) {
			curleft = obj.offsetLeft
			curtop = obj.offsetTop
				while (obj = obj.offsetParent) {
					curleft += obj.offsetLeft
					curtop += obj.offsetTop
				}
	}
	return {x:curleft, y:curtop} //Returns the position of the element as an object
}