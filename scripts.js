// hide and show functions
function flex( flex ) {
    document.getElementById(flex).style.display="flex";
}

function hide( hide ) {
    document.getElementById(hide).style.display="none";
}

// header scroll animation function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.boxShadow = "0px 1px 12px 0px rgba(0, 0, 0, 0.15)";
    document.getElementById("header").style.height = "50px";
    document.getElementById("header-inner").style.scale = "40%";
} else {
    document.getElementById("header").style.boxShadow = "none";
    document.getElementById("header").style.height = "100px";
    document.getElementById("header-inner").style.scale = "65%";
  }
}