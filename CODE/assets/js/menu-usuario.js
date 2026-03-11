(function () {

  document.addEventListener('click', function (e) {
    const btn  = e.target.closest('.user-btn');
    const menu = e.target.closest('.user-menu');

    if (btn && menu) {
      e.stopPropagation();
      const dropdown = menu.querySelector('.user-dropdown');
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      if (expanded) {
        btn.setAttribute('aria-expanded', 'false');
        dropdown.classList.remove('show');
        dropdown.setAttribute('hidden', '');
      } else {
        // Fecha todos os outros antes de abrir
        document.querySelectorAll('.user-dropdown').forEach(dd => {
          dd.classList.remove('show');
          dd.setAttribute('hidden', '');
        });
        document.querySelectorAll('.user-btn').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
        });

        btn.setAttribute('aria-expanded', 'true');
        dropdown.classList.add('show');
        dropdown.removeAttribute('hidden');
      }
      return;
    }

    // Clique fora fecha todos
    document.querySelectorAll('.user-dropdown').forEach(dd => {
      dd.classList.remove('show');
      dd.setAttribute('hidden', '');
    });
    document.querySelectorAll('.user-btn').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });
  });

  // Fecha no ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.user-dropdown').forEach(dd => {
        dd.classList.remove('show');
        dd.setAttribute('hidden', '');
      });
      document.querySelectorAll('.user-btn').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
      });
    }
  });

})();
