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

/* -------------program-slider -------------- */

document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function showSlide(index) {
    carouselItems.forEach(item => {
      item.style.display = 'none';
    });
    carouselItems[index].style.display = 'block';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  }

  // Show the first slide initially
  showSlide(currentIndex);

  // Set up event listeners for next and previous buttons
  document.getElementById('nextBtn').addEventListener('click', nextSlide);
  document.getElementById('prevBtn').addEventListener('click', previousSlide);
});