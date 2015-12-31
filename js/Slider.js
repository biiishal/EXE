var strip = document.getElementsByClassName('slider-strip')[0];
var slides = document.getElementsByClassName('slider-img');
var btnNext = document.getElementsByClassName('btn-next')[0];
var btnPrev = document.getElementsByClassName('btn-prev')[0];
var bullet = document.getElementsByClassName('bullet')[0];
var active = 0;
var imgWidth = slides[0].clientWidth;
var fps = 10;
var mlCurrent = 0;
var mlFinal = 0;
var intervalId;
var slideTimeout;

for(var i = 0; i<slides.length; i++){
		var li = document.createElement('li');
		li.id = i+'bullet';
		li.addEventListener('click', function(){
			active = parseInt(this.id);
			clearTimeout(slideTimeout);
			clearInterval(intervalId);
			mlFinal = (imgWidth * (active) * -1);
			bulletChanger();
			animate(500);
		});
	bullet.appendChild(li);
}

var bulletChanger = function(){
	for(var i=0 ; i<slides.length; i++){
		document.getElementById(i+'bullet').className= '';
	}
	document.getElementById(active+'bullet').className = 'active';
}

var slide = function() {
	active == slides.length-1 ? active = 0 : active++;
	mlFinal = imgWidth * active * -1;	
	bulletChanger();
	animate(500);
}
bulletChanger();
slideTimeout = setTimeout(slide, 3000);

var animate = function(duration) {
	var counter = 0;
	var step = (mlFinal - mlCurrent)/(duration/fps);

	intervalId = setInterval(function(){
		counter++;
		mlCurrent += step;
		strip.style.marginLeft = mlCurrent + 'px';
		if (counter >= duration/fps) {
			clearInterval(intervalId);
			slideTimeout = setTimeout(slide, 3000);
		}
	}, fps);
}

var onNextBtnClick = function() {
	clearTimeout(slideTimeout);
	clearInterval(intervalId);
	active == slides.length-1 ? active = 0 : active++;
	bulletChanger();
	mlFinal = imgWidth * active * -1;	
	animate(500);
}

var onPrevBtnClick = function() {
	clearTimeout(slideTimeout);
	clearInterval(intervalId);
	active == 0 ? active = slides.length-1 : active--;
	bulletChanger();
	mlFinal = imgWidth * active * -1;	
	animate(500);
}

btnNext.addEventListener('click', onNextBtnClick);
btnPrev.addEventListener('click', onPrevBtnClick);