(function () {

  const items   = document.querySelectorAll('.dashboard-card .carousel-item');
  const btnNext = document.querySelector('.carousel-btn.next');
  const btnPrev = document.querySelector('.carousel-btn.prev');

  if (!items.length || !btnNext || !btnPrev) return;

  let index = 0;

  function showSlide(n) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === n);
    });
  }

  btnNext.addEventListener('click', () => {
    index = (index + 1) % items.length;
    showSlide(index);
  });

  btnPrev.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    showSlide(index);
  });

  showSlide(index);

})();
