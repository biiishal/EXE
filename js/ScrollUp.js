var btnScrollUp = document.getElementById('btn-scroll-up');
window.addEventListener("scroll", function(event) {
    var top = this.scrollY,
        left =this.scrollX;
        if(window.scrollY > 200) btnScrollUp.style.display = 'block';
        else btnScrollUp.style.display = 'none';
}, false);     

function scrollUp() {
  var i = window.pageYOffset || document.documentElement.scrollTop;
  var scrollInterval = setInterval(function(){
    if(i >= 0) {
    window.scrollTo(0, i);
    i -= 50;
  }
  else {
    window.scrollTo(0, 0);
    clearInterval(scrollInterval)};
  }, 10);
}