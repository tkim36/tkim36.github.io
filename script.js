window.onscroll = function() {scrollFunction()};
document.getElementById("header").style.top = "-500px";

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("header").style.top = "0";
    document.getElementById("menubar").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-500px";
    document.getElementById("menubar").style.top = "0";
  }
}

function openSlideMenu(){
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("side-menu").style.display = "block";
}

function closeSideMenu(){
  document.getElementById("side-menu").style.width = "0";

}
