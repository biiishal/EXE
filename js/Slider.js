var strip = document.getElementsByClassName('slider-strip')[0];
var slides = document.getElementsByClassName('slider-img');
var active = 0;
var imgWidth = 1920;
var fps = 10;
var mlCurrent = 0;
var mlFinal = 0;

var slide = function() {
	active == slides.length-1 ? active = 0 : active++;
	mlFinal = imgWidth * active * -1;	
	animate(500);
	setTimeout(slide, 5000);
}
setTimeout(slide, 3000);

var animate = function(duration) {
	var counter = 0;
	var step = (mlFinal - mlCurrent)/(duration/fps);


	var intervalId = setInterval(function(){
		counter++;
		mlCurrent += step;
		strip.style.marginLeft = mlCurrent + 'px';
		if (counter >= duration/fps) {
			clearInterval(intervalId);
			return;
		}
	}, fps);
}