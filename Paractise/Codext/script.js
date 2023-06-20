var modelNav = document.getElementsByClassName("modelNav")[0];
var Icoon = document.getElementsByClassName("Icoon")[0];

Icoon.addEventListener(click , showNav);
Icoon.addEventListener(click , closeNav);

function showNav(params) {
    modelNav.style.display="block";
}

function closeNav () {
    modelNav.style.display="none";
}
