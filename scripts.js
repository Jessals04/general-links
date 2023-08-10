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

// --- User Scripts ---
let user = {
  "type": "student",
  "username": "john.citizen",
  "email": "john.citizen@lindisfarne.nsw.edu.au",
  "given_name": "John",
  "surname": "Citizen",
  "services": [
    "it_helpdesk",
    "booking",
    "cleaning",
  ],
  "apps": [
    "gmail",
    "seqta_learn",
    "seqta_teach",
    "tassweb",
    "kiosk",
  ],
};

window.onload = function() {loadUser(user)};

function loadUser(user) {
  document.getElementById("given-name-surname").innerHTML = user.given_name + " " + user.surname;
  document.getElementById("email").innerHTML = user.email;

  user.services.forEach(service => {
    document.getElementById(service).style.display = "flex";
  });

  user.apps.forEach(app => {
    document.getElementById(app).style.display = "flex";
  });

  if (user.services.includes("it_helpdesk")) {
    document.getElementById("open-tickets").style.display = "flex";
    document.getElementById("it_helpdesk_open_tickets").style.display = "block";
  }
  
  if (
        user.services.includes("booking")
        || user.services.includes("cleaning")
        || user.services.includes("maintenance")
      ) {
    document.getElementById("open-tickets").style.display = "flex";
    document.getElementById("facilities_open_tickets").style.display = "block";
  }
}