/* ------------ scrollToTop ---------- */

let mybutton = document.getElementById("myBtn");
// select button

window.onscroll = function () { scrollFunction() };
// add scroll event listener

// define scroll function
function scrollFunction() {

  // check if the user scrolled more than 20px
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    // if yes apply display block

  } else {
    mybutton.style.display = "none";
    // if no apply display none
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", topFunction);
// add a listener to the mybutton and run topFunction on click

// ------------------ phoneScript ----------------

// --------------- chatIcon ----------------

document.querySelector("#appBtnChat").addEventListener("click", function () {
  document.querySelector("#notification-box-chat").style.visibility = "visible";
});

document.querySelector("#closeBtnChat").addEventListener("click", function () {
  document.querySelector("#notification-box-chat").style.visibility = "hidden";
});

// --------------- mapIcon ----------------

document.querySelector("#appBtnMap").addEventListener("click", function () {
  document.querySelector("#notification-box-map").style.visibility = "visible";
});

document.querySelector("#closeBtnMap").addEventListener("click", function () {
  document.querySelector("#notification-box-map").style.visibility = "hidden";
});

// --------------- PhoneIcon ----------------

document.querySelector("#appBtnPhone").addEventListener("click", function () {
  document.querySelector("#notification-box-phone").style.visibility = "visible";
});

document.querySelector("#closeBtnPhone").addEventListener("click", function () {
  document.querySelector("#notification-box-phone").style.visibility = "hidden";
});