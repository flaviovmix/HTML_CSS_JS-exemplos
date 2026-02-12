  const items = document.querySelectorAll(".dashboard-card .carousel-item");
  let index = 0;

  function showSlide(n) {
    items.forEach((item, i) => {
      item.classList.toggle("active", i === n);
    });
  }

  document.querySelector(".carousel-btn.next").addEventListener("click", () => {
    index = (index + 1) % items.length;
    showSlide(index);
  });

  document.querySelector(".carousel-btn.prev").addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    showSlide(index);
  });

  // Inicia no primeiro slide
  showSlide(index);