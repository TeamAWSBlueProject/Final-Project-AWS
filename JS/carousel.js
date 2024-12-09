document.addEventListener('DOMContentLoaded', function () {
  var currentIndex = 0;
  var items = document.querySelectorAll('.carousel-item');
  var totalItems = items.length;
  var itemsPerSlide = 4; // Number of items to show at once

  function showItems() {
      document.getElementById('photo-carousel').style.transform = 'translateX(' + (-currentIndex * (100 / itemsPerSlide)) + '%)';
  }

  function nextSlide() {
      if (currentIndex < totalItems - itemsPerSlide) {
          currentIndex += itemsPerSlide;
      } else {
          currentIndex = 0;
      }
      showItems();
  }

  function prevSlide() {
      if (currentIndex >= itemsPerSlide) {
          currentIndex -= itemsPerSlide;
      } else {
          currentIndex = totalItems - itemsPerSlide;
      }
      showItems();
  }

  document.getElementById('next-btn').addEventListener('click', function () {
      nextSlide();
  });

  document.getElementById('prev-btn').addEventListener('click', function () {
      prevSlide();
  });
});
