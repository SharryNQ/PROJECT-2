var lastScrollTop = 0;
var navbar1 = document.getElementById("navbar1");
window.addEventListener('scroll',function(){
  var scrollTop =window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar1.style.top = "-70px";
  }
  else{
    navbar1.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
