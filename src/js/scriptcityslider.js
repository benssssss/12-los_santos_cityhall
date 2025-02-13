document.addEventListener("DOMContentLoaded", function () {
  const carouselItems1 = document.querySelectorAll('.carousel-item-1');
  let currentIndex = 0;

  function showSlide(index) {
    carouselItems1.forEach(item => {
      item.style.display = 'none';
    });
    carouselItems1[index].style.display = 'block';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems1.length;
    showSlide(currentIndex);
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + carouselItems1.length) % carouselItems1.length;
    showSlide(currentIndex);
  }

  // Show the first slide initially
  showSlide(currentIndex);

  // Set up event listeners for next and previous buttons
  document.getElementById('nextBtn1').addEventListener('click', nextSlide);
  document.getElementById('prevBtn1').addEventListener('click', previousSlide);
});