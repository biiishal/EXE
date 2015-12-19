var Counter = function(){
	var counter;
	var scrollPos = 0;
	var listened = false;


	this.setCounter = function (id, scrollPosition, startFrom) {
		counter = document.getElementById(id);
		scrollPos = scrollPosition;
		counter.initialPos = startFrom;
		counter.finalPos = counter.innerHTML;
		counter.innerHTML = counter.initialPos;
	}

	var countLoop = function() {
		counter.initialPos++;
		if(counter.finalPos >= counter.initialPos)
		counter.innerHTML = counter.initialPos;
		else clearInterval(countLoop);
	}


	var checkPos = function() {
		if(scrollPos <= window.pageYOffset || document.documentElement.scrollTop) {
			if(!listened)
			setInterval(countLoop, 1);

			listened = true;
			// countLoop;	
		}
	}
	window.addEventListener("scroll", checkPos);
}