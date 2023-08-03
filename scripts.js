
function flex( flex ) {
    document.getElementById(flex).style.display="flex";
}

function hide( hide ) {
    document.getElementById(hide).style.display="none";
}

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.boxShadow = "0px 1px 12px 0px rgba(0, 0, 0, 0.15)";
    document.getElementById("header").style.height = "50px";
    document.getElementById("header-inner").style.scale = "40%";
    document.getElementById("header-inner").style.translate = "0 -30px";
} else {
    document.getElementById("header").style.boxShadow = "none";
    document.getElementById("header").style.height = "100px";
    document.getElementById("header-inner").style.scale = "65%";
    document.getElementById("header-inner").style.translate = "0 0";
  }
}