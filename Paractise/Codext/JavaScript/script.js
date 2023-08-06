var modelNav = document.getElementsByClassName("modelNav")[0];
var iconClick = document.getElementById("iconClick");
var crossBtn = document.getElementsByClassName("crossBtn")[0];

iconClick.addEventListener("click" , showNav);
crossBtn.addEventListener("click" , hideNav);

function showNav() {
    modelNav.style.display="block";
}

function hideNav() {
    modelNav.style.display="none";
}


// ------ Card Values ------

var slideBtn = document.getElementById("slideBtn");
var leftToggle = document.getElementById("leftToggle");
var rightToggle = document.getElementById("rightToggle");
console.log(rightToggle , leftToggle);

var st = document.getElementsByClassName("st")[0];
var cl = document.getElementsByClassName("cl")[0];
var pr = document.getElementsByClassName("pr")[0];

slideBtn.addEventListener("click" , toggleBtn );

function toggleBtn() {
    slideBtn.classList.toggle("slide1");

    if(slideBtn.classList.contains("slide1") == true){
        st.innerHTML="$120 / Y";
        cl.innerHTML="$360 / Y";
        pr.innerHTML="$588 / Y";
        leftToggle.style.fontWeight=400;
    }
    else {
        st.innerHTML="$10 / M";
        cl.innerHTML="$30 / M";
        pr.innerHTML="$49 / M";
        rightToggle.style.fontWeight=bold;
    }
}

// ------ Card Values ------